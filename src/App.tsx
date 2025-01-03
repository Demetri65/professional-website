import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { About } from './pages/About';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default App;
