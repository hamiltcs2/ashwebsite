
export default function validateInfo(values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = 'Name required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.phone.trim()) {
        errors.phone = 'Phone number required';
    }
    if (!values.address.trim()) {
        errors.address = 'Address required';
    }
    if (!values.city.trim()) {
        errors.city = 'City required';
    }
    if (!values.zipcode.trim()) {
        errors.zipcode = 'Zipcode required';
    }
    if (!values.service.trim()) {
        errors.service = 'Desired service required';
    }
    // if (!values.info.trim()) {
    //     errors.info = 'Additional info required';
    // }
    return errors;
  }