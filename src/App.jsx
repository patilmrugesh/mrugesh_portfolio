
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ClientWork from './components/ClientWork'
import Experiments from './components/Experiments'
import Contact from './components/Contact'
import Social from './components/Social'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      {/* Animated background grid */}
      <div className="bg-grid"></div>
      
      <Navbar />
      <Hero />
      <Journey />
      <Skills />
      <Projects />
      {/* <ClientWork /> */}
      {/* <Experiments /> */}
      <Contact />
      <Social />
      <Footer />
    </div>
  )
}

export default App

