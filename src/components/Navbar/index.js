import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components'
import {NavbarSection,Logo,ListItem,LogoText, UlList ,Anchor, L } from'./style.js'


const Navbar = ()=>{

  return(
    // this strange tags coz i used styled compnenets and names anything np
    <NavbarSection>
            
    <div className="container">
        
        <Logo>
            <LogoText>Ultra Profile</LogoText>
        </Logo>
        

        
        <UlList>
            <ListItem><L  to ='/'>Home</L></ListItem>
            <ListItem><Anchor href="#">Work</Anchor></ListItem>
            <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
            <ListItem><Anchor href="#">Resume</Anchor></ListItem>
            <ListItem><Anchor href="#">About</Anchor></ListItem>
            <ListItem><L to="/contact">Contact</L></ListItem>
        </UlList>
        
    </div>
    
</NavbarSection>
    )
  }




export default Navbar;

    // <BrowserRouter>
     
    //   {/* <Nav/> */}
    //     <Routes>
   
    //     </Routes>
    //   </BrowserRouter>