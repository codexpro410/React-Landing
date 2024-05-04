import React, { Component } from 'react';
import axios from 'axios'

import {WorkSection,WorkTitle,Span,WrokPart,Icon,PartTitle,Line,PartDesc} from './style.js'

class Work extends Component{
  state = {
    works:[]
  }

  componentDidMount(){
    // axios.get('js/data.json').then( res => {console.log(res.data);})
    axios.get('js/data.json').then( res => { this.setState({ works: res.data.works})})
  }
render(){

  const {works} = this.state
  const worksList = works.map((workItem) => {
    return(
      <WrokPart first={workItem.id} key={workItem.id}>
        <Icon className={workItem.icon_name}></Icon>
        <PartTitle>{workItem.title}</PartTitle>
        <Line/>
        <PartDesc>
        {workItem.body}
        </PartDesc>
      </WrokPart>      

    )
  })

  return(
    <WorkSection>
    <div className="container">
        <WorkTitle><Span>My</Span> Work</WorkTitle>
       {worksList}
        
    </div>
</WorkSection>

    )
  }
}




export default Work;