
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import PageHome from './pages/PageHome.jsx'
import PageAbout from './pages/PageAbout.jsx'
import PageContainer from './pages/PageContainer.jsx'
import Prueba from './prueba.jsx'
import SectionCharacters from './components/SectionCharacters.jsx'
import SectionLocations from './components/SectionLocations.jsx'
import SectionEpisodes from './components/SectionEpisodes.jsx'



export default function App() {
  return (
    <div className="app-grid">
      <Header />
      <main className="app-main" role="main" aria-live="polite">
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/PageAbout" element={<PageAbout />} />
          <Route path="/PageContainer" element={<PageContainer />}>
                <Route index element={<SectionCharacters />} />
                <Route path="SectionLocations" element={<SectionLocations />} />
                <Route path="SectionEpisodes" element={<SectionEpisodes />} />
          </Route>
          {/* 404 -> redirige a Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
