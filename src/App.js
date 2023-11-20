import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import { useState, useEffect } from "react";
import Home from "./screens/Home.jsx"
import Characters from './screens/Characters.jsx';
import Detail from './screens/CharacterDetail.jsx';
import Dishes from "./screens/Dishes.jsx"
import DishDetails from "./screens/DishesDetail.jsx"
import DishCreate from './screens/DishesCreate.jsx';
import { verifyUser } from "./services/users.js";
import SignUp from "./screens/SignUp.jsx";
import SignIn from "./screens/SignIn.jsx";
import SignOut from "./screens/SignOut.jsx";
import CharacterCreate from "./screens/CharacterCreate.jsx";
import CharacterEdit from "./screens/CharacterEdit.jsx"
import Nav from "./components/Nav.jsx"


const App = () => {
  const [user, setUser] = useState(null);
  const [showNav , setShowNav] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      {showNav? <Nav user={user}/>: null} 
      {/* Passing user as a prop */}
      <Routes>
        <Route path="/" element={<Home setShowNav={setShowNav}/>}/>
        <Route path="/characters" element={<Characters setShowNav={setShowNav}/>}/>
        <Route path="/characters/:characterId" element={<Detail setShowNav={setShowNav}/>} />
        <Route path="/dishes" element={<Dishes setShowNav={setShowNav}/>}/>
        <Route path="/dishes/:dishesId" element={<DishDetails setShowNav={setShowNav}/>} />
        {/* <Route path="/add-dish" element={<DishCreate />} /> */}
        <Route path="/sign-up" element={<SignUp setUser={setUser} setShowNav={setShowNav}/>} />
        <Route path="/sign-in" element={<SignIn setUser={setUser} setShowNav={setShowNav}/>} />
        <Route path="/sign-out" element={user ? <SignOut setUser={setUser} setShowNav={setShowNav}/> : <Navigate to="/"/> } />
        <Route
          path="/add-character"
          element={
            user ? <CharacterCreate user={user} /> : <Navigate to="/sign-up" setShowNav={setShowNav} />
          } />
        <Route
          path="/characters/:id/edit"
          element={user ? <CharacterEdit user={user} /> : <Navigate to="/sign-up" setShowNav={setShowNav} />}
        />
      </Routes>
    </div>
  );
}

export default App;