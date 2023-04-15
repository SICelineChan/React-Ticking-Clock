import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [clock, setClock] = useState(new Date());

  function refreshClock() {
    setClock(new Date());
  }
  // without the cleanUp function, the clock still ticks!
  useEffect(() => {
    const clockId = setInterval(refreshClock, 1000);
    return function cleanUp() {
      clearInterval(clockId);
    };
  }, []);

  const timeNow = new Date();
  const timeInText = timeNow.toLocaleTimeString();

  return (
    <div>
      <h1>Hello, we have two ticking clocks!</h1>
      <p>This is the time now {timeInText}</p>
      <p>The clock says {clock.toLocaleTimeString()}</p>
    </div>
  );
}
