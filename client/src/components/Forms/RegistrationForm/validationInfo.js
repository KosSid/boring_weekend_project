export const validationInfo = (values) => {
  let errors = {}

  if(!values.firstName.trim()) {
    errors.firstName = 'this field is required'
  }

  if(!values.lastName.trim()) {
    errors.lastName = 'this field is required'
  }

  if(!values.login.trim()) {
    errors.login = 'this field is required'
  } else if(values.login.length < 2) {
    errors.login = 'login must contain min 2 letters'
  }

  if(!values.email) {
    errors.email = 'e-mail is required'
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'e-mail is invalid'
  }

  if(!values.password) {
    errors.password = 'password is required'
  } else if(values.password.length < 7) {
    errors.password = 'must be min 7 characters'
  }

  return errors;
}