import React, {useState} from 'react';
import LoginService from "../../../services/LoginService";
import {useDispatch} from 'react-redux'
import {authUser} from "../../../store/user/userAction";
import jwt_decode from "jwt-decode";
import { Link, useHistory } from "react-router-dom";
import useLoginForm from "../../../services/useLoginForm";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {values, handleChange} = useLoginForm();
  const [error, setError] = useState("");

  const onFinish = (e) => {
    e.preventDefault();
    console.log('customerData', values)

    LoginService.LoginResult(values)
      .then(loginResult => {
        localStorage.setItem('token', loginResult.token);

        const decoded = jwt_decode(loginResult.token);
        delete decoded.iat;
        dispatch(authUser({...decoded, isAuthenticated: true}));
        history.push('/');
      })
      .catch(err => {
        const error = err.response.data;
        setError(error.loginOrEmail || error.password);
      })
  };
  return (
    <div>
      <form name='login-form' onSubmit={onFinish}>
        <input
          name="loginOrEmail"
          type="text"
          placeholder='login or email'
          value={values.loginOrEmail}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder='password'
          value={values.password}
          onChange={handleChange}
        />
        <input type="submit"/>
      </form>
      <span>Forgot password?</span>
      <span>Register now</span>
      <p>{error}</p>
      <Link to='/register'> Login</Link>
    </div>
  );
};

export default LoginForm;