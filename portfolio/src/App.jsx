import { useState } from 'react'
import TopBar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Menu from './components/menu/Menu'
import './App.scss'
function App() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className='app'>
      <TopBar isActive={isActive} setIsActive={setIsActive} />
      <Menu isActive={isActive} setIsActive={setIsActive} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}

export default App
