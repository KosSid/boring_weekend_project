import React, {useState} from 'react';

const useLoginForm = () => {
  const [values, setValues] = useState({
    loginOrEmail: '',
    password: ''
  })
  const handleChange = e => {
    const { name, value } = e.target
    setValues({...values,
      [name]: value
    })
  }
  return { values, handleChange}
};

export default useLoginForm;