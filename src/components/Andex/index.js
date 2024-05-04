import React, { Component} from 'react';

import Home from "./../Home";
import About from "./../About";
// import Navbar from "./../Navbar";
// import Contact from "./../Contact";
import Portfolio from "./../Portfolio";
import Profile from "./../Profile";
import SocialMedia from "./../SocialMedia";
import Work from "./../Work";
import Footer from "./../Footer";


class Andex extends Component{
  render(){


  return(
    <div>
        {/* <Navbar /> */}
        <Home/>
        <Work />
        <Portfolio />
        <Profile />
        <About />
        {/* <Contact /> */}
        <SocialMedia />
        <Footer/>
    </div>

    )
  }
}



export default Andex 
