import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./screens/Home.jsx"
import Characters from './screens/Characters.jsx';
import Detail from './screens/CharacterDetail.jsx';
import Dishes from "./screens/Dishes.jsx"
import DishDetails from "./screens/DishesDetail.jsx"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/characters" element={<Characters />}/>
        <Route path="/characters/:characterId" element={<Detail />} />
        <Route path="/dishes" element={<Dishes />}/>
        <Route path="/dishes/:dishesId" element={<DishDetails />} />
      </Routes>
    </div>
  );
}

export default App;
