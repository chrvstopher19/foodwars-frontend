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

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/characters" element={<Characters />}/>
        <Route path="/characters/:characterId" element={<Detail />} />
        <Route path="/dishes" element={<Dishes />}/>
        <Route path="/dishes/:dishesId" element={<DishDetails />} />
        {/* <Route path="/add-dish" element={<DishCreate />} /> */}
        <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
        <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
        <Route path="/sign-out" element={<SignOut setUser={setUser} />} />
        {/* <Route
          path="/add-character"
          element={
            user ? <ProductCreate user={user} /> : <Navigate to="/sign-up" />
          } />
        <Route
          path="/products/:id/edit"
          element={user ? <ProductEdit user={user} /> : <Navigate to="/" />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;