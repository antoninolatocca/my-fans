import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/auth';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    stageName: '',
    bio: ''
  });

  const dispatch = useDispatch();

  const { email, password, confirmPassword, stageName, bio } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
    } else {
      dispatch(registerUser({ email, password, stageName, bio }));
    }
  };

  return (
    <div className="container auth-form-container">
      <form onSubmit={e => onSubmit(e)}>
        <h2 className='text-center'>Registration</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={confirmPassword}
            onChange={e => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <div className="form-group">
          <label>Stage Name</label>
          <input
            type="text"
            className="form-control"
            name="stageName"
            value={stageName}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea
            className="form-control"
            name="bio"
            value={bio}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <button type="submit" className="dark-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
