import logo from './logo.svg';
import './App.css';
import ClientDashboard from "./Pages/Dashboard/Client"
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import {
  Route,
  Routes,
} from "react-router-dom";
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import axios from 'axios'
import React, { useState, useEffect } from 'react';
function App() {
  useEffect(() =>
  axios.get("https://ancient-fjord-10674.herokuapp.com/").then(res => console.log(res.data.answer))
)

  return (
    <div className="App">


        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/client" element={<ClientDashboard />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
    </div>
  );
}

export default App;
