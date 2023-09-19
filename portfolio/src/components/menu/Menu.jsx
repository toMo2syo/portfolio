/* eslint-disable react/prop-types */
import './menu.scss'
export default function Menu({ isActive, setIsActive }) {
    function handleClick(e) {
        if (e.target.matches('a')) {
            setIsActive(!isActive)
        }
    }
    return (
        <div
            className={'menu' + (isActive === true ? ' active' : '')}
            onClick={handleClick}
        >
            <ul className="menu-item-list">
                <li><a href="#intro">Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}