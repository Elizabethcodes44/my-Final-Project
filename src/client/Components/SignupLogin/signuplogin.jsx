import "./signuplogin.css";
import { useState } from "react";

export default function LogInSignUp({ handleRegister, handleLogin }) {
  const [action, setAction] = useState("Sign Up");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (action === "Sign Up") {
      handleRegister(formData); // Call handleRegister with sign up form data
    } else {
      handleLogin(formData); // Call handleLogin with login form data
    }
  };

  return (
    <div className="container">
      <div className="header1">
        <div className="text">{action}</div>
        <div className="underline"></div>{" "}
      </div>
      <div className="inputs">
        {action === "LogIn" ? null : (
          <>
            <div className="input">
              <p>firstname</p>
              <input
                type="text"
                name="firstName"
                placeholder="firstname"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input">
              <p>lastname</p>
              <input
                type="text"
                name="lastName"
                placeholder="lastname"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}
        <div className="input">
          <p>email</p>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <p>password</p>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            required
          />
        </div>
      </div>
      <div className="submit_container">
        <div
          className={action === "LogIn" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
            handleSubmit(); // Call handleSubmit when the "Sign Up" button is clicked
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("LogIn");
            handleSubmit(); // Call handleSubmit when the "Log In" button is clicked
          }}
        >
          LogIn
        </div>
      </div>
    </div>
  );
}
