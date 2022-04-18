import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import {
  FormContent,
  Form,
  FormH1,
  FormInputs,
  FormInput,
  FormSelect,
  FormInfoLabel,
  FormInfo,
  FormInputP,
  FormLabel,
  FormInputButton,
  FormDetails,
  FormWrapper
} from './FormElements';
const options = [
  { value: 'pruning', label: 'Pruning' },
  { value: 'removals', label: 'Removals' },
  { value: 'planting', label: 'Planting' },
  { value: 'mulching', label: 'Mulching' },
  { value: 'pest and disease indentification', label: 'Pest and Disease Identification' },
  { value: 'plant health care consultations', label: 'Plant Health Care Consultations' },
  { value: 'cabling and bracing', label: 'Cabling and Bracing' },
  { value: 'stump grinding', label: 'Stump Grinding' }
];
  
const FormSignup = ({ services, submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
    services,
    options
  );

  return (
    <FormContent>
      <Form onSubmit={handleSubmit} noValidate>
        <FormH1>
          Please fill out the form below for your free quote and we will reach out to you shortly.
        </FormH1>
        <FormWrapper>
        <FormInputs>
          <FormLabel>Name *</FormLabel>
          <FormInput
            type='text'
            name='name'
            placeholder='Enter your name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <FormInputP>{errors.name}</FormInputP>}
        </FormInputs>
        <FormInputs>
          <FormLabel>Email *</FormLabel>
          <FormInput
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <FormInputP>{errors.email}</FormInputP>}
        </FormInputs>
        <FormInputs>
          <FormLabel>Phone Number *</FormLabel>
          <FormInput
            type='number'
            name='phone'
            placeholder='Enter your phone number'
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <FormInputP>{errors.phone}</FormInputP>}
        </FormInputs>
        <FormInputs>
          <FormLabel>Address *</FormLabel>
          <FormInput
            type='text'
            name='address'
            placeholder='Enter your address'
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && <FormInputP>{errors.address}</FormInputP>}
        </FormInputs>
        <FormInputs>
          <FormLabel>City *</FormLabel>
          <FormInput
            type='text'
            name='city'
            placeholder='Enter your city'
            value={values.city}
            onChange={handleChange}
          />
          {errors.city && <FormInputP>{errors.city}</FormInputP>}
        </FormInputs>
        <FormInputs>
          <FormLabel>Zipcode *</FormLabel>
          <FormInput
            type='number'
            name='zipcode'
            placeholder='Enter your zipcode'
            value={values.zipcode}
            onChange={handleChange}
          />
          {errors.zipcode && <FormInputP>{errors.zipcode}</FormInputP>}
        </FormInputs>
        <FormInputs>
          <FormLabel>Desired Service *</FormLabel>
          <FormSelect
            type='text'
            name='service'
            placeholder='Enter your service'
            // value={values.service}
            value={options.value}
            options={options}
            defaultValue={options[services]}
            onChange={handleChange}
          />
          {errors.service && <FormInputP>{errors.service}</FormInputP>}
        </FormInputs>
        </FormWrapper>
        <FormInputs>
          <FormInfoLabel>Anything else you would like us to know?
          </FormInfoLabel>
          <FormInfo
            type='text'
            name='info'
            placeholder='Enter any additional information'
            value={values.info}
            onChange={handleChange}
          />
        </FormInputs>
        <FormInputButton type='submit'>
          Submit
        </FormInputButton>
        <FormDetails>
          Required fields are denoted by *
        </FormDetails>
      </Form>
    </FormContent>
  );
};

export default FormSignup;