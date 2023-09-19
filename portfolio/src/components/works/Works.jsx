import { useState } from 'react'
import './works.scss'
export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliders = [
        {
            id: "1",
            icon: "../src/assets/mobile.png",
            title: "Web Design",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
                "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "2",
            icon: "../src/assets/globe.png",
            title: "Mobile Application",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
            id: "3",
            icon: "../src/assets/writing.png",
            title: "Branding",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
    ];
    function handleSlide(way) {
        way === 'next' ? setCurrentSlide(prev => (prev + 1) % sliders.length)
            : setCurrentSlide(prev => prev === 0 ? sliders.length - 1 : prev - 1)
    }
    return (
        <div className="works" id="works">
            <div className='slider' style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {sliders.map(sl => (
                    <div className="work-container" key={sl.id}>
                        <span className='next' onClick={() => handleSlide('next')}>
                            <img src="../src/assets/arrow.png" alt="" />
                        </span>
                        <span className='prev' onClick={() => handleSlide('prev')}>
                            <img src="../src/assets/arrow.png" alt="" />
                        </span>
                        <div className="work">
                            <div className="work-intro">
                                <div className="work-intro-icon">
                                    <img src={sl.icon} alt="" />
                                </div>
                                <h2>{sl.title}</h2>
                                <p>{sl.desc}</p>
                                <a href="#">Projects</a>
                            </div>
                            <div className="work-img">
                                <img src={sl.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
