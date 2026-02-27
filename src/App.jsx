import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from './pages/hero.jsx'
import { LearnMore } from './pages/LearnMore.jsx'
import { Accommodations } from './pages/Accommodations.jsx'
import { Penthouse } from './pages/Penthouse.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/penthouse" element={<Penthouse />} />
      </Routes>
    </Router>
  )
}

export default App
