import React from "react";
import './styles.css';
import { animals } from './animals';

const title = "";
const showBackground = true;

const background = (
  <img 
    className="background"
    alt="ocean"
    src="./images/ocean.jpeg"
  />
);

function App() {
  return (
      <div>
        <h1>{title}</h1>
        <h2>Hello 2</h2>
        {background}
      </div>
    );
}

export default App;
