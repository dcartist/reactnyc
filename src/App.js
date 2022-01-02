import logo from './logo.svg';
import './App.css';

import { Button } from 'primereact/button';
 
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from "./Pages/About"
import Contact from "./Pages/Contact"
function App() {
  return (
    <div className="App">
 <Button label="Save" />
  some

        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
    </div>
  );
}

export default App;
