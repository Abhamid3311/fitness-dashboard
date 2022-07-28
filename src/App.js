import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
     </Routes>
      
    </div>
  );
}

export default App;
