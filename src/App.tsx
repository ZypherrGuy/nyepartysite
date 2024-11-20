import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CursorEffect from './components/Cursor/Cursor';

import videoBackground from "./assets/images/background.mp4";
import Button from './components/Button/Button';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import InfoPage from './pages/Info/InfoPage'; // Create this new page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </Router>
  );
};

const Home = () => (
  <>
    <div className="background-container">
      <video autoPlay loop muted className="video-background">
        <source src={videoBackground} type="video/mp4" />
      </video>

      <img src="/glow-top.png" alt="glow" className="Glow top-glow" />
      <div className="content">
        <CountdownTimer />
        <Button>
          <a href="/info" style={{ color: 'inherit', textDecoration: 'none' }}>You're Invited</a>
        </Button>
      </div>
      <img src="/glow-bottom.png" alt="glow" className="Glow bottom-glow" />
    </div>
    <CursorEffect />
  </>
);

export default App;
