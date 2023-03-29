import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../actions/auth';
import { Link } from 'react-router-dom';

const RegisterForm = ({isHome = false}) => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
    firstName: '',
    lastName: '',
  });

  const { email, password, password2, firstName, lastName } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      dispatch(registerUser({ email, password, firstName, lastName }));
    }
  };

  return (
    <div className={isHome ? "container auth-form-container w-50" : "container auth-form-container"}>
      <form onSubmit={e => onSubmit(e)}>
        <h2 className='text-center'>Registration</h2>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={lastName}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            minLength='6'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
            minLength='6'
            required
          />
        </div>
        <div className='form-group'>
          <input type='checkbox' required /> I accept the Terms and Conditions
          and Privacy Policy
        </div>
        <button type='submit' className='dark-button' value='Register'>Register</button>
      </form>
      <div className='text-center'>
        <p>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
