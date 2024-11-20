import './InfoPage.css'; // Create this file for styling
import CursorEffect from '../../components/Cursor/Cursor';

const InfoPage = () => {
  return (
    <div className="neon-page page-transition">
      <div className="back-button-container">
        <a href="/" className="back-button">← Back</a>
      </div>
      <div className="neon-content">
        <h1>Welcome to the Neon World!</h1>
        <p>Get ready for an unforgettable New Year's Eve!</p>
      </div>
      <CursorEffect />
    </div>
  );
};

export default InfoPage;
