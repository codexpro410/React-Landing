import React, { useEffect, useState } from 'react';

import {ProfileSkills, Profileprofile, ProfileList, ProfileItem, Span, Skills, SkillsDesc, SkillsBar, Title,
     Perc, Parent, Parentspan, H2Title, H2TitleSpan} from './style.js'
import axios from 'axios';


const Profile = ()=>{
    //  HOOKS
const [ percent, setPercent] = useState([])
useEffect(()=>{
    axios.get('js/data.json').then( res => {setPercent(res.data.percent)})
    
},[])


const PercentItems = percent.map((percentItem) =>{
    return(
        <SkillsBar key={percentItem.id} className="bar">
        <Title>{percentItem.title}</Title>
        <Perc>{percentItem.perc}</Perc>
        <Parent>
            <Parentspan sp={percentItem.id}></Parentspan>
        </Parent>
    </SkillsBar>      
    )
})

  return(
    <ProfileSkills>
    <div className="container">
        <Profileprofile>
            <H2Title><H2TitleSpan>My </H2TitleSpan>Profile</H2Title>
            <ProfileList>
                <ProfileItem className="profile-item">
                    <Span>Name</Span>
                    Hamza Nabil
                </ProfileItem>
                <ProfileItem className="profile-item">
                    <Span>Birthday</Span>
                    21/1/1996
                </ProfileItem>
                <ProfileItem className="profile-item">
                    <Span>Address</Span>
                    Ain shams
                </ProfileItem>
                <ProfileItem className="profile-item">
                    <Span>Phone</Span>
                    4444 5555 6666
                </ProfileItem>
                <ProfileItem className="profile-item">
                    <Span>Email</Span>
                    hamza@hamza.com
                </ProfileItem>
                <ProfileItem className="profile-item">
                    <Span>Website</Span>
                    <Span className="web">www.google.com</Span>
                </ProfileItem>
            </ProfileList>
        </Profileprofile>
        
        <Skills>
            <H2Title>Some <H2TitleSpan>skills</H2TitleSpan></H2Title>
            <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>
            {/* <SkillsBar className="bar">
                <Title>Bootstrap</Title>
                <Perc>100%</Perc>
                <Parent>
                    <Parentspan className="sp1"></Parentspan>
                </Parent>
            </SkillsBar>
            
            <SkillsBar className="bar">
                <Title>CSS3</Title>
                <Perc>90%</Perc>
                <Parent>
                    <Parentspan className="sp2"></Parentspan>
                </Parent>
            </SkillsBar>
            
            <SkillsBar className="bar">
                <Title>Photoshop</Title>
                <Perc>80%</Perc>
                <Parent>
                    <Parentspan className="sp3"></Parentspan>
                </Parent>
            </SkillsBar> */}

            {PercentItems}
        </Skills>
        
    </div>
</ProfileSkills>

    )
  }




export default Profile;