import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAccount } from '../../actions/account';
import CountryAutocomplete from './CountryAutocomplete';

const ProfileForm = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
  });

  const { email, firstName, lastName } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    dispatch(updateAccount({ email, firstName, lastName }));
  };

  return (
    <div className={"container"}>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={(e) => onChange(e)}
            required
            autoComplete='off'
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
            autoComplete='off'
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
            autoComplete='off'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='country'>Country</label>
          <CountryAutocomplete />
        </div>
        <button type='submit' className='dark-button' value='Register'>Update</button>
      </form>
    </div>
  );
};

export default ProfileForm;
