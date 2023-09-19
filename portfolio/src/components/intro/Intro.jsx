import { useRef, useEffect } from 'react'
import './intro.scss'
import { init } from 'ityped'
export default function Intro() {
    const ref = useRef(null)
    useEffect(() => {
        init(ref.current, {
            showCursor: true,
            strings: [' Developer', ' Desginer', ' Content Creator'],
            typeSpeed: 100,
            backSpeed: 60,
            backDelay: 1500,
            loop: true,
            cursorChar: '|'
        })

    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgWrapper">
                    <img src="../../../src/assets/man.png" alt="man" />
                </div>
            </div>
            <div className="right">
                <div className="intro-text-wrapper">
                    <h2>Hi,there,I am</h2>
                    <h1>B.J · Lee · Brynhild</h1>
                    <h3>Freelancer<span ref={ref}> </span></h3>
                </div>
                <a href="#portfolio">
                    <img src="../../../src/assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
