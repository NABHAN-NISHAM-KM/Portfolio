import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNavbar from './components/BottomNavbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Services from './components/Services';
import Resume from './components/Resume';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;