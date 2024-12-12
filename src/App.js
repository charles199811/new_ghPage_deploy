import React, { useState } from 'react';
import './App.css';
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-SRZRLJ1P6M';
ReactGA.initialize(TRACKING_ID);
ReactGA.send({hitType:"pageview", page:"C:\Users\Charles\Desktop\Play2Earn\track user\cta-button-test\public\index.html"})

const ButtonTest = ({ buttons, onButtonClick }) => {
  return (
    <div>
      <h2>Test Your CTA Buttons</h2>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {buttons.map((button, index) => (
          <button
            key={index}
            style={{
              backgroundColor: button.color,
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={() => onButtonClick(index)}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};

const Analytics = ({ clicks }) => {
  return (
    <div>
      <h2>Button Click Analytics</h2>
      <ul>
        {clicks.map((count, index) => (
          <li key={index}>
            B {index + 1}: {count} clicks
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [buttons] = useState([
    { text: 'Buy Now', color: 'blue' },
    { text: 'Sign Up', color: 'green' },
    { text: 'Learn More', color: 'red' },
  ]);

  const [clicks, setClicks] = useState(Array(buttons.length).fill(0));

  const handleButtonClick = (index) => {
    const newClicks = [...clicks];
    newClicks[index] += 1;
    setClicks(newClicks);
  };

  return (
    <div className="App">
      <ButtonTest buttons={buttons} onButtonClick={handleButtonClick} />
      <Analytics clicks={clicks} />
    </div>
  );
};

export default App;
