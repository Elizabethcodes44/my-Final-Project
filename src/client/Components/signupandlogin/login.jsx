import './login.css'
import "./signup.css";
import { useState } from "react";

export default function logInForm({ handleSubmit }) {
  const [logIn, setLogIn] = useState({ email: "", password: "" });

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
      /
      <div className="signupform">
        <form onSubmit={handleSubmitDecorator}>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={logIn.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={logIn.password}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
