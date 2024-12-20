import React, { useState, useEffect } from 'react';
import './App.css';
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-ZQW5D4LHSV';
ReactGA.initialize(TRACKING_ID);

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
  // Send pageview only once when the component mounts
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname + window.location.search,
      title: 'Home Page',
    });
  }, []);

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

    // Send button click event to Google Analytics
    ReactGA.event({
      category: 'CTA Button',
      action: `Button ${index + 1} Clicked`,
      label: buttons[index].text,
    });
  };

  return (
    <div className="App">
      <ButtonTest buttons={buttons} onButtonClick={handleButtonClick} />
      <Analytics clicks={clicks} />
    </div>
  );
};

export default App;
