// LogInForm.jsx
import './login.css';
import { useState } from 'react';

export default function LogInForm({ handleSubmit, }) {
  const [logIn, setLogIn] = useState({ email: '', password: '' });

  const handleSubmitDecorator = (e) => {
    e.preventDefault();
    handleSubmit(logIn);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLogIn({
      ...logIn,
      [name]: value,
    });
  };

  return (
    <>
      <div className="logincontainer">
        <form className="loginform" onSubmit={handleSubmitDecorator}>
          <h2>log-in</h2>
          <label>
            e-mail
            <input
              type="text"
              name="email"
              placeholder="enter your email"
              value={logIn.email}
              onChange={handleChange}
            />
          </label>
          <label>
            password
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={logIn.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        
          
        </form>
      </div>
    </>
  );
}
