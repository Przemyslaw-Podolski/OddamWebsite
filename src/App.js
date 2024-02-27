import './App.css';
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Logout from "./components/Auth/Logout";
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
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/logowanie' element={<Login/>}/>
                  <Route path='/rejestracja' element={<Register/>}/>
                  <Route path='/wylogowano' element={<Logout/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
          </HashRouter>
      </>
  );
}

export default App;
