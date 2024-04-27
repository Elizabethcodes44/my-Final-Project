// LogInForm.jsx

import './login.scss';
import { useState} from 'react';


export default function LogInForm({ handleSubmit,setToggleSignUp , toggleSignUp }) {
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
          <h2>Log-in</h2>
          <label>
            E-mail
            <input
              type="text"
              name="email"
              placeholder="Please Enter your Email"
              value={logIn.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Please Enter your Password"
              value={logIn.password}
              onChange={handleChange}
            />
          </label>
          <button >Submit</button>
          <p>Yet to sign up? click on the button below</p>
          <button onClick ={()=> setToggleSignUp(!toggleSignUp)}>Sign Up </button>
          
        </form>
       
      </div>
    </>
  );
}
