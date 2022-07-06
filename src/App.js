import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/menu';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wddm-122-react-website" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
