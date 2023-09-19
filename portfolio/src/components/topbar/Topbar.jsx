/* eslint-disable react/prop-types */
import './topbar.scss'
export default function Topbar({ isActive, setIsActive }) {
    return (
        <div className={'topbar' + (isActive === true ? ' active' : '')}>
            <h1>
                <a href="#intro" className="logo">B.J · Lee</a>
            </h1>
            <div className="phone-container">
                <span className="material-symbols-outlined icon">
                    person
                </span>
                <span className='phone-text'>+44 924 12 74</span>
            </div>
            <div className="email-container">
                <span className="material-symbols-outlined icon">
                    email
                </span>
                <span className='email-text'>
                    bjlee@gmail.com
                </span>
            </div>
            <div className="burger" onClick={() => setIsActive(!isActive)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
// Topbar.PropTypes = {
//     isActive:Boolean,
//     setIsActive:PropTypes.
// }
