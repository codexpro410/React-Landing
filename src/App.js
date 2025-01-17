import React, { Component} from 'react';
import './App.css'
import { BrowserRouter , Routes, Route, Switch} from 'react-router-dom';

// import Home from "./components/Home";
// import About from "./components/About";
// import Profile from "./components/Profile";
// import Portfolio from "./components/Home";
// import SocialMedia from "./components/SocialMedia";
// import Work from "./components/Work";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Andex from "./components/Andex"



class App extends Component{
  render(){


  return(
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' Component={Andex}/>
          {/* <Route path='/contact' Component={Contact}/> */}
        </Routes>
    </BrowserRouter>

    )
  }
}



export default App;
//  axios
//  styled-components