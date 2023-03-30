import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container auth-form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            minLength='6'
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="dark-button">
            Accedi
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
