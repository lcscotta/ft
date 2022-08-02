import React from 'react';
import './App.css';
import StrangerThings from './components/StrangerThings';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      <StrangerThings />
      <span> Em desenvolvimento </span>
    </div>
  );
}

export default App;
