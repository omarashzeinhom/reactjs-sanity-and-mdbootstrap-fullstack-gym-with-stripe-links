import React from 'react'
import {ContactForm} from '../../components/index';
import { MDBContainer } from 'mdb-react-ui-kit';

const Contact = () => {
  return (
    <MDBContainer fluid>
       <h1 className="text-info">
        Contact <span className="text-dark">Us!</span>
      </h1>
    <ContactForm/>

    </MDBContainer>

  )
};

export default Contact;