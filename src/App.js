import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';
import { Link } from "react-router-dom";
import { faHouseUser, faCalendarDay, faCalendarPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Components/home.css'
import Add from "./Components/add";
import List from "./Components/list";
import Home from "./Components/home"

function App(){
  return(
    <BrowserRouter>
      <div className="navbar">
        <Link to="/"><FontAwesomeIcon icon={faHouseUser} size="2x" color="white" className="icons" /></Link>
        <Link to="add"><FontAwesomeIcon icon={faCalendarPlus} size="2x" color="white" className="icons" /></Link>
        <Link to="list"><FontAwesomeIcon icon={faCalendarDay} size="2x" color="white" className="icons" /></Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="add" element={<Add />} />
        <Route path="list" element={<List />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

