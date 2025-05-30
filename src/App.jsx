import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'
import Video from './components/Video'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Video/>
      <Services />
      <Projects />
      <Contact/>
      
    </div>

  )
}

export default App
