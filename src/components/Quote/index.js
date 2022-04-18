import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import axios from 'axios';
import {
  Container,
  FormContainer,
  FormWrap
} from './FormElements';

const Quote = ({services}) => {
  let selector = -1;
  if(services !== undefined) {
    selector = services.services;
  }
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = (values) => {
    setIsSubmitted(true);
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: values.address,
        city: values.city,
        zipcode: values.zipcode,
        service: values.service,
        info: values.info
    };
    axios({
      url: 'api/save',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to the server');
    })
    .catch((error) => {
      console.log('Internal server error');
      console.log('Error is '+error);
    });
  }
  return (
    <>
      <Container>
        <FormWrap>
              <FormContainer>
                {!isSubmitted ? (
                  <FormSignup services={selector} submitForm={submitForm} />
                  ) : (
                  <FormSuccess />
                  )}
              </FormContainer>
        </FormWrap>
      </Container>
    </>
  );
};

export default Quote;
