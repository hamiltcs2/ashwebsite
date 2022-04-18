import { useState, useEffect } from 'react';
import axios from 'axios';
const useForm = (callback, validate, services, options) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipcode: '',
    service: '',
    info: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    if (event.target !== undefined) {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value
      });
    } else {
      setValues(previousState => {
        return { ...previousState, service: event.value}
      })
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (services !== -1) {
        setValues(previousState => {
          return { ...previousState, service: options[services].value}
        })
      }
      if (Object.keys(errors).length === 0 && isSubmitting) {
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
        callback();
      }
    },
    [callback, errors, isSubmitting, options, services, values.name, values.email, values.phone,
    values.address, values.city, values.zipcode, values.service, values.info]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;