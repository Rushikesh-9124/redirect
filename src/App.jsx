import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 8; // smooth random loading feel
      if (value >= 100) value = 100;

      setProgress(Math.floor(value));

      if (value === 100) {
        clearInterval(interval);

        setTimeout(() => {
          window.location.replace("https://portfolio-fullstack-rushikesh.vercel.app");
        }, 500);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-glow" />

      {/* Top */}
      <div className="loader-logo">MyPortfolio</div>

      {/* Center */}
      <div className="loader-center">
        <h1 className="loader-title">
          Preparing your experience
        </h1>
      </div>

      {/* Bottom */}
      <div className="loader-bottom">
        <div className="loader-text">LOADING ASSETS...</div>

        <div className="loader-bar">
          <div
            className="loader-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Percentage */}
      <div className="loader-percent">{progress}%</div>
    </div>
  );
}

export default App;