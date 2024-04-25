import {useState} from "react";
import Home from "./Components/Home.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import {Router, Routes} from "react-router-dom"
import LogInForm from "./Components/signupandlogin/login.jsx";
import SignUpForm from "./Components/signupandlogin/signup.jsx";

import "./App.css";


const apiUrl = `https://sheleadsserverrepo-production.up.railway.app`;

function App() {
  
  const [toggleSignUp, setToggleSignUp] = useState(false)

  const handleRegister = async ({ firstName, lastName, email, password }) => {
    const createdRegister = await fetch(`${apiUrl}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    
    // Assuming successful registration, set isSignedUp to true
    
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
  
    localStorage.setItem("token", logInToken.data);
    // Assuming successful login, set isLoggedIn to true
    
  };
  

  return (
    <div className="app-Container">
      <Header />
      
      {/*{!isLoggedIn ? (
        isSignedUp ? (
          <LogInForm setToggleSignUp= {setToggleSignUp}  handleSubmit={handleLogin} />
        ) : (
          <SignUpForm setToggleSignUp= {setToggleSignUp} toggleSignUp= {toggleSignUp} handleSubmit={handleRegister} />
        )
      ) : ( */}
      {toggleSignUp ? <LogInForm setToggleSignUp= {setToggleSignUp} toggleSignUp={toggleSignUp} handleSubmit={handleLogin} />: <SignUpForm setToggleSignUp= {setToggleSignUp} toggleSignUp= {toggleSignUp} handleSubmit={handleRegister} />}
        <>
          <Home />
          <Footer />
        </>
      
      
    </div>
  );
}

export default App;
