import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TopChoices from './components/TopChoices'
import Games from './components/Games'
import './App.css'

function App() {

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <TopChoices />
      <Games />
    </div>
  )
}

export default App
