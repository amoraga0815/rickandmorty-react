
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Personajes from './pages/Personajes.jsx'
import Prueba from './prueba.jsx'



export default function App() {
  return (
    <div className="app-grid">
      <Header />
      <main className="app-main" role="main" aria-live="polite">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/personajes" element={<Personajes />} />
          {/* 404 -> redirige a Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
