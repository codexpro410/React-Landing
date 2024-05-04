import React from 'react';

import {ContactSection,Contacttitle,Span,Form, FormInput,InputText,InputEmail,InputExp,TextArea,InputSubmit} from './style.js'
import Footer from './../Footer'
const Contact = ()=>{
  return(
    <>
    <ContactSection>
    <div className="container">
        <Contacttitle><Span>Drop </Span>Me A line</Contacttitle>
        <Form action="">
            <FormInput className="form-input">
                <InputText type="text" placeholder="Your Name"/>
                <InputEmail type="email" placeholder="Your Email"/>
            </FormInput>
            <InputExp type="text" className="sub" placeholder="Your Subject"/>
            <TextArea cols="30" rows="10" placeholder="Your Message"/>
            <InputSubmit type="submit" value="Send Message"/>
        </Form>
    </div>
</ContactSection>
<Footer/>
</>
    )
  }




export default Contact;