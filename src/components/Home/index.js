import React from 'react';

import {HomeSection , Homeinformation, Hometitle, Homeinfo, Homedesc, Span, Homebtn} from'./style.js'


const Home = ()=>{
  return(
    <HomeSection>
    <div className="container">
        <Homeinformation>
            <Hometitle>Islam M. Abozeed</Hometitle>
            <Homeinfo>Creative Director</Homeinfo>
            <Homedesc>
                Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
            </Homedesc>
            <Homebtn >Let's Begin</Homebtn>
        </Homeinformation>
        </div>
</HomeSection>

    )
  }




export default Home;