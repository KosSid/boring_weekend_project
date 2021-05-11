import React, { useState, useEffect } from 'react';

const useForm = validationInfo => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setValues({...values,
    [name]: value
    })
  }
  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validationInfo(values));
  }

  return { handleChange, values, handleSubmit, errors }
};

export default useForm;