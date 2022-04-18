import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
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

  const submitForm = () => {
    setIsSubmitted(true);
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
