// Login.jsx
import React, { useState } from 'react';
import './login.scss';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    isCreatingAccount: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send data to a server or perform client-side validation
    console.log('Form submitted:', formData);
    // Add logic here to send data to the server or perform other actions based on the form data

    // Clear the form values after submission
    setFormData({
      username: '',
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false,
      isCreatingAccount: false,
    });
  };

  return (
    <div className={`login-page ${formData.isCreatingAccount ? 'create-account' : ''}`}>
      <h2>{formData.isCreatingAccount ? 'Create Account' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {formData.isCreatingAccount && (
          <>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <label htmlFor="agreeToTerms">I agree to the terms of service</label>
            </div>
          </>
        )}

        <button type="submit">{formData.isCreatingAccount ? 'Create Account' : 'Login'}</button>
      </form>

      <p onClick={() => setFormData((prevData) => ({ ...prevData, isCreatingAccount: !prevData.isCreatingAccount }))}>
        {formData.isCreatingAccount ? 'Already have an account? Login here' : 'Don\'t have an account? Create one here'}
      </p>
    </div>
  );
};

export default Login;
