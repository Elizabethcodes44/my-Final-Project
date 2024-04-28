// SignUpForm.jsx
import './signup.scss';
import { useState } from 'react';

export default function SignUpForm({ handleSubmit, setToggleSignUp , toggleSignUp}) {
  
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  const [signUp, setSignUp] = useState(initialState);

  const handleSubmitDecorator = (e) => {
    e.preventDefault();
    handleSubmit(signUp);
    setSignUp(initialState);
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
      <h1>
            Sign Up  on our page to discover your
            baby's due date, view health tips and track your health!
          </h1>
        <form className="signupform" onSubmit={handleSubmitDecorator}>
          
          <label>
            Firstname
            <input
              type="text"
              name="firstName"
              placeholder="Input your firstname"
              value={signUp.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Lastname
            <input
              type="text"
              name="lastName"
              value={signUp.lastName}
              placeholder="Input your lastname"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="text"
              name="email"
              placeholder="Please enter your email"
              value={signUp.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Input your password"
              value={signUp.password}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
          <p>Already have an account ? click on the button below</p>
          <button onClick ={()=> setToggleSignUp(!toggleSignUp)}>Login</button>
          
        </form>
        
        
      </div>
    </>
  );
}
