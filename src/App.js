import React,{useState} from 'react';
import face from './face.jpg';
import resume from './resume.pdf';
import './App.css';

function random255(){
  return Math.floor((Math.random() * 255))
}

function App() {
  const [color, setColor] = useState("rgb(0,0,0)")
  return (
    <div className="App">
      <header className="App-header" style = {{ backgroundColor: color }} >
        <img src={face} className="App-logo" alt="logo" />
        <p>
          Adam Zawierucha
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer" 
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href = {resume} 
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <button onClick = { ()=>{ setColor("rgb(255,255,255)") }} > Change Color! </button>
      </header>
    </div>
  );
}

export default App;
