import React from 'react'
import { useState, useEffect } from 'react';
import Logo from '../components/logo.js';
import Wrapper from '../assets/wrappers/RegisterPage';
import FormRow from '../components/FormRow.js';
import Alert from '../components/alert.js';

// global context and useNavigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert : false,
};
// if possible prefer local state
// global state
function Register() {
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

     const handleChange = (e) => {
      console.log(e.target);
      };

    const onSubmit = (e) => {
    e.preventDefault();
      console.log(e.target);
      };
  return (
    <Wrapper className='full-page'>
    <form className='form' OnSubmit={onSubmit}>
      <Logo />
      <h3>{values.isMember ? 'Login' : 'Register'}</h3>
      {values.showAlert && <Alert/>} 

      {!values.isMember && (
      <FormRow
        type='text'
        name='name'
        value={values.name}
        handleChange={handleChange}/>
        )}

       <FormRow type = 'email'
       name = 'email' 
       value ={values.email} 
       handleChange = {handleChange}/>

       <FormRow type = 'password'
       name = 'password' 
       value ={values.password} 
       handleChange = {handleChange}/>
     

      <button type='submit' className='btn btn-block'>
        submit
      </button>
      <p>
      {values.isMember ? 'Not a member yet?' : 'Already a member?'} 
      <button type='button' onClick={toggleMember} className='member-btn'>
        {values.isMember ? 'Register' : 'Login'}
      </button>
      </p>
    </form>
  </Wrapper>    
  )
}
export default  Register ; 