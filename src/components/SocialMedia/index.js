import React, { Component } from 'react';
import axios from 'axios'
import {SocialMedia1, Social ,SocialDesc,Icon,Span,SpanInfo} from  './style.js'

class SocialMedia extends Component{
  state = {
    social:[]
  }
  componentDidMount(){
    axios.get('js/data.json')
    .then(res => 
      { this.setState({ social : res.data.social})
    })
  }
  render(){
    const {social} = this.state
    const socialList = social.map((socialItem)=>{
      return(
        <Social item={socialItem.id} key={socialItem.id}>
        <Icon className={socialItem.icon}></Icon>
        <SocialDesc>
            <Span className="info1">{socialItem.title}</Span>
            <SpanInfo className="info2">{socialItem.body}</SpanInfo>
        </SocialDesc>
    </Social>
      )
    })
    return(
      <SocialMedia1>
            {socialList}

      </SocialMedia1>
    )
  }
}





export default SocialMedia;