// SignUpForm.jsx
import './signup.css';
import { useState } from 'react';

export default function SignUpForm({ handleSubmit, switchToLogin}) {
  const [signUp, setSignUp] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSubmitDecorator = (e) => {
    e.preventDefault();
    handleSubmit(signUp);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignUp({
      ...signUp,
      [name]: value,
    });
  };

  return (
    <>
      <div className="signupcontainer">
        <form className="signupform" onSubmit={handleSubmitDecorator}>
          <h1>
            Register on our page to get access to free tech courses. Get your
            baby's due date, view health tips and learn about financial
            management.
          </h1>
          <label>
            firstname
            <input
              type="text"
              name="firstName"
              placeholder="firstname"
              value={signUp.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            lastname
            <input
              type="text"
              name="lastName"
              value={signUp.lastName}
              placeholder="lastname"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            email
            <input
              type="text"
              name="email"
              placeholder="email"
              value={signUp.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            password
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signUp.password}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
          <button onClick={switchToLogin}>Log In</button>
          
        </form>
      </div>
    </>
  );
}
