import { useEffect, useState } from 'react';
import './portfolio.scss'
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
} from "../../data/data";
const list = [
    {
        id: "featured",
        title: "Featured",
    },
    {
        id: "web",
        title: "Web App",
    },
    {
        id: "mobile",
        title: "Mobile App",
    },
    {
        id: "design",
        title: "Design",
    },
    {
        id: "content",
        title: "Content",
    },
];
export default function Portfolio() {
    const [selected, setSelected] = useState('featured')
    const [selectedList, setSelectedList] = useState([])
    useEffect(() => {
        switch (selected) {
            case 'featured': {
                setSelectedList(featuredPortfolio)
                break
            }
            case 'web': {
                setSelectedList(webPortfolio)
                break
            }
            case 'mobile': {
                setSelectedList(mobilePortfolio)
                break
            }
            case 'design': {
                setSelectedList(designPortfolio)
                break
            }
            case 'content': {
                setSelectedList(contentPortfolio)
                break
            }
            default: {
                setSelectedList(featuredPortfolio)

            }
        }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(list => (
                    <li
                        key={list.id}
                        className={selected === list.id ? 'active' : ''}
                        onClick={() => setSelected(list.id)}
                    >
                        {list.id}
                    </li>
                ))}
            </ul>
            <div className='portfolio-list-container'>
                {selectedList?.map(sl => (
                    <div className='portfolio-list-item' key={sl.id}>
                        <span>{sl.title}</span>
                        <img src={sl.img} alt={sl.title} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    )
}
