import React from 'react';

import {AboutSection,Aboutinfo,Infotitle,Span, Infodir, Infodesc,Anchor } from'./style.js'

const About = ()=>{
  return(
<AboutSection>
            <div className="container">
                <Aboutinfo>
                    <Infotitle><Span>This is</Span> Me</Infotitle>
                    <Infodir>Creative Director</Infodir>
                    <Infodesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Infodesc>
                    <Infodesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Infodesc>
                </Aboutinfo>
            </div>
        </AboutSection>

    )
  }




export default About;