import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let count = 0;

    const interval = setInterval(() => {
      const increment = count < 85 ? Math.floor(Math.random() * 8) + 1 : 1;
      count += increment;

      if (count >= 100) {
        count = 100;
        clearInterval(interval);

        setTimeout(() => {
          window.location.replace("https://portfolio-fullstack-rushikesh.vercel.app");
        }, 1000);
      }

      setProgress(count);
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader">
      {/* Top */}
      <div className="loader-top">
        <div className="logo">MyPortfolio</div>

        <div className="nav-skeleton">
          <div className="skeleton small" />
          <div className="skeleton small" />
          <div className="skeleton small" />
        </div>
      </div>

      {/* Center */}
      <div className="loader-center">
        {/* Ghost UI */}
        <div className="ghost-ui">
          <div className="skeleton pill" />
          <div className="skeleton big" />
          <div className="skeleton line" />
          <div className="ghost-buttons">
            <div className="skeleton btn" />
            <div className="skeleton btn" />
          </div>
        </div>

        {/* Text */}
        <div className="hero-text">
          <h1>
            Welcome to my portfolio! <br />
            <span>
              Here, you will explore a showcase of creativity, innovation, and
              passion.
            </span>
          </h1>
        </div>
      </div>

      {/* Bottom */}
      <div className="loader-bottom">
        <div className="loading-left">
          <span className="loading-text">Loading Assets...</span>

          <div className="progress-line">
            <div
              className="progress-fill"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>
        </div>

        <div className="progress-number">{progress}%</div>
      </div>

      {/* Grid */}
      <div className="grid-bg" />
    </div>
  );
}

export default App;
