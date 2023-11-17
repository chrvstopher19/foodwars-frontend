import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./screens/Home.jsx"
import Character from './components/Characters.jsx';

function App() {
  return (
    <div className="App">
      <Character />
    </div>
  );
}

export default App;
