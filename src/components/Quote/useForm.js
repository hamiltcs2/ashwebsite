import { useState, useEffect } from 'react';

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
        callback(values);
      }
    },
    [callback, errors, isSubmitting, options, services, values]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;