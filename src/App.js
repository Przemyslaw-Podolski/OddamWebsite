import './App.css';
import Home from "./components/Home";
import React, { Component } from 'react';
import {HashRouter, Link, Route, Routes} from "react-router-dom";

//import './scss/main.scss'

function App() {

  class NotFound extends Component {
    render() {
      return <h1>404,Nothing is here. Wrong Address.</h1>;
    }
  }

  return (
      <>
          <HashRouter>
              <nav>
                  <h3>Menu</h3>
                  <Link to='/' className={"nav__element"}>Go To Home</Link>
              </nav>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
          </HashRouter>
      </>
  );
}

export default App;
