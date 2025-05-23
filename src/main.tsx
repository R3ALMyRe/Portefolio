import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyNavbar from './assets/navbar.tsx';
import FirstPage from './assets/FirstPage.tsx';
import Propos from "./assets/Propos.tsx";
import Contact from './assets/Contact.tsx';
import Projects from './assets/Projets.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import TechWatchSlider from './assets/Veille.tsx';
import Footer from './assets/footer.tsx';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <MyNavbar />
  <FirstPage />
  <Propos />
  <Projects />
  <TechWatchSlider />
  <Contact />
  <Footer />
  </StrictMode>,
)
