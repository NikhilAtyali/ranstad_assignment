import React, {useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import UserCard from "./Components/UserCard";
import HomeContainer from "./Components/HomeContainer";
import ListItems from "./Components/ListItems";
export const AppContext = createContext(null);
function App() {
  const [titleList, setTiltleList] = useState([]);
  return (
    <AppContext.Provider value={{ titleList, setTiltleList }}>
      <div className="App">
        <h1>Randstad Risemart</h1>
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route exact path="/list/:userId" element={<ListItems />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
