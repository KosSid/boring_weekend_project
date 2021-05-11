import React from 'react';
import jwt_decode from "jwt-decode";
import RegisterService from "../../../services/RegisterService";
import LoginService from "../../../services/LoginService";
import {useDispatch} from "react-redux";
import {authUser} from "../../../store/user/userAction";
import {validationInfo} from "./validationInfo";
import {useHistory} from "react-router-dom";
import useForm from "../../../services/useForm";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {handleChange, values, handleSubmit, errors} = useForm(validationInfo);

  const onFinish = (e) => {
    e.preventDefault();
    console.log('values',values)
    const newCustomer = {...values, isAdmin: false};
    const userData = {}
    RegisterService.RegisterResult(newCustomer)
      .then(savedCustomer => {
        userData.loginOrEmail = savedCustomer.email;
        userData.password = values.password;
        LoginService.LoginResult(userData)
          .then(loginResult => {
            localStorage.setItem('token', loginResult.token);
            const decoded = jwt_decode(loginResult.token);
            delete decoded.iat
            dispatch(authUser({...decoded, isAuthenticated: true}));
            history.push('/');
          })
          .catch(err => {
            console.log("login error", err);
          })
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <form name='registration-form' onSubmit={onFinish}>
        <div>
          <input
            type='text'
            name='firstName'
            placeholder='First name'
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div>
          <input
            type="text"
            name='lastName'
            placeholder='Last name'
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div>
          <input
            type="text"
            name='login'
            placeholder='Login'
            value={values.login}
            onChange={handleChange}
          />
          {errors.login && <p>{errors.login}</p>}
        </div>
        <div>
          <input
            type="email"
            name='email'
            placeholder='E-mail'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <input
            type="password"
            name='password'
            placeholder='Password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        {/*{collectionItemsForm.map(formItem =>*/}
        {/*  <input*/}
        {/*    name={formItem.name}*/}
        {/*    placeholder={formItem.placeholder}*/}
        {/*    key={formItem.name}*/}
        {/*    onChange={handleChange}*/}
        {/*    value={values.formItem.name}*/}
        {/*  />*/}
        {/*)}*/}
        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
};

export default RegistrationForm;