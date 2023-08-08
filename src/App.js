import './App.css';
import Faq from './components/Faq';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privacy from './components/Privacy';
import Features from './components/Features';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
