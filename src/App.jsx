import { useState } from 'react';
import './App.css';

import Container from './components/container/container';


/*

import React, { useState, useEffect } from 'react';

const App = () => {
  const [pressedKey, setPressedKey] = useState(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase(); // Convert the pressed key to uppercase
      setPressedKey(key);
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleClick = (buttonKey) => {
    // Perform the action associated with the buttonKey
    console.log(`Button "${buttonKey}" was clicked.`);
  };

  return (
    <div>
      <p>Pressed Key: {pressedKey}</p>
      <button onClick={() => handleClick('A')}>A</button>
      <button onClick={() => handleClick('B')}>B</button>
      
      </div>
      );
    };
    
    export default App;
    

*/


function App() {


  return (
    <div className="body">
        
        <Container />
    </div>
  )
}

export default App
