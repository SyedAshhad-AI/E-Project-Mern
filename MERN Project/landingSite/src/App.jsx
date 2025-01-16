import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import MainLayout from './Components/MainLayout';
import Navbar from './Components/Navbar';
import AboutPage from './Pages/About';
import ServicesPage from './Pages/Services';
import ContactUsPage from './Pages/Contact';
import Testimonials from './Pages/Testimonials';
import AboutTeam from './Pages/About/AboutTeam';
import { PortfolioPage } from './Pages/Portfolio';
// Import other page components here if needed, like Contact

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/aboutTeam" element={<AboutTeam />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
