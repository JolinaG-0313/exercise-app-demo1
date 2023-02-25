import './App.css';
import React, { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Timer from "./components/DurationExercise/index.js"
import RepetitionEx from './components/RepetitionExercise';
import LapCounter from './components/RunningExercise/index.js';

/*page router reference

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    https://www.w3schools.com/react/react_router.asp

*/

const MenuLayout = () => {
  return (
    <div className="exerciseMenu">
      <h1>Go Do Something</h1>
      <div className="prompt">
        <p>Select an Exercise: </p>
      </div>
      <div className="buttons">
        <Link to="/PushUps"><button>Push Ups</button></Link><br></br>
        <Link to="/Bicycling"><button>Bicycling</button></Link><br></br>
        <Link to="/JumpingJacks"><button>Jumping Jacks</button></Link><br></br>
        <Link to="/Running"><button>Running </button></Link><br></br>
        <Link to="/SitUps"><button>Sit Ups</button></Link><br></br>
      </div>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuLayout />}></Route>
        <Route path="/Home" element={<MenuLayout />}></Route>
        <Route path="/PushUps" element={<RepetitionEx />} />
        <Route path="/JumpingJacks" element={<RepetitionEx />} />
        <Route path="/Situps" element={<RepetitionEx />} />
        <Route path="/Bicycling" element={<Timer />} />
        <Route path="/Running" element={<LapCounter />} />




      </Routes>
    </BrowserRouter>
  )
}


export default App;
