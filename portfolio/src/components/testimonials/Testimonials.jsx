import './testimonials.scss'
export default function Testimonials() {
    const cards = [
        {
            id: 1,
            name: "Tom Durden",
            title: "Senior Developer",
            img:
                "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "../src/assets/twitter.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
            id: 2,
            name: "Alex Kalinski",
            title: "Co-Founder of DELKA",
            img:
                "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "../src/assets/youtube.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
            featured: true,
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "../src/assets/linkedin.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
    ];
    return (
        <div className='testimonials' id="testimonials">
            <h1>Testimonials</h1>
            <div className="cards-container">
                {cards.map(card => (
                    <div className={`card ${card.featured ? ' featured' : ''}`} key={card.id}>
                        <div className="card-manisfet">
                            <img src="../src/assets/right-arrow.png" alt="" />
                            <img src={card.img} alt="avatar" className='avatar' />
                            <img src={card.icon} alt="" />
                        </div>
                        <div className="card-desc">
                            <p>{card.desc}</p>
                        </div>
                        <div className="card-title">
                            <h3>{card.name}</h3>
                            <h4>{card.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
