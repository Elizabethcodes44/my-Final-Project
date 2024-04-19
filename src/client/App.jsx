import {useState} from "react";
import Home from "./Components/Home.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import LogInForm from "./Components/signupandlogin/login.jsx";
import SignUpForm from "./Components/signupandlogin/signup.jsx";

import "./App.css";


const apiUrl = `https://sheleadsserverrepo-production.up.railway.app`;

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleRegister = async ({ firstName, lastName, email, password }) => {
    const createdRegister = await fetch(`${apiUrl}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    console.log(createdRegister);
    // Assuming successful registration, set isSignedUp to true
    setIsSignedUp(true);
  };

  const handleLogin = async ({ email, password }) => {
    const verifyLogin = await fetch(`${apiUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const logInToken = await verifyLogin.json();
    console.log(logInToken);
    localStorage.setItem("token", logInToken.data);
    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn(true);
  };
  

  return (
    <div className="app-Container">
      <Header />
      
      {!isLoggedIn ? (
        isSignedUp ? (
          <LogInForm handleSubmit={handleLogin} />
        ) : (
          <SignUpForm handleSubmit={handleRegister} />
        )
      ) : (
        <>
          <Home />
          <Footer />
        </>
      )}
      
    </div>
  );
}

export default App;
