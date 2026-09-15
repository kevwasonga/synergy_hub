import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollTop from './components/ScrollTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'

export default function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>
      <FloatingWhatsApp />
      <ScrollTop />
      <Footer />
    </>
  )
}
