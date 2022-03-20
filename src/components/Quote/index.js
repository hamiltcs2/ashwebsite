import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './QuoteElements';

const Quote = () => {

  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);

  const handleChange = (event, type) => {
    if (type === "title") {
      let item = title;
      item = event;
      setTitle(item);
    }
    if (type === "body") {
      let item = body;
      item = event;
      setBody(item);
    }
  };

  const submit = (event) => {
    event.preventDefault();
    const payload = {
      title: title,
      body: body
    };
    axios({
      url: 'api/save',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to the server');
      resetUserInputs();
    })
    .catch(() => {
      console.log('Internal server error');
    });
  }

  const resetUserInputs = () => {
    setTitle('');
    setBody('');
  }


  return (
    <>
      <Container>
        <FormWrap>
          {/* <Icon to='/'>dolla</Icon> */}
          <FormContent>
            <Form onSubmit={submit}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' id="title" value={title}
                onChange={e => handleChange(e.target.value, "title")} required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' id="body" value={body}
                onChange={e => handleChange(e.target.value, "body")} required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Quote;
