import "./signup.css";
import { useState } from "react";

export default function SignUpForm({ handleSubmit }) {
  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
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
      <div className="signupform">
        <form onSubmit={handleSubmitDecorator}>
          <h1>
            Register on our page to get access to free health courses. Get your
            baby's due date, view health tips and learn about financial
            management.
          </h1>
          <input
            type="text"
            name="firstName"
            placeholder="firstname"
            value={signUp.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            value={signUp.lastName}
            placeholder="lastname"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={signUp.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signUp.password}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
