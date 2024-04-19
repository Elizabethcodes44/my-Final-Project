import {useState} from "react";
import Home from "./Components/Home.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import LogInForm from "./Components/signupandlogin/login.jsx";
import SignUpForm from "./Components/signupandlogin/signup.jsx";

import "./App.css";


const apiUrl = `https://sheleadsserverrepo-production.up.railway.app`;

function App() {
  const [userId, setUserId] = useState(null);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(true); 

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
  
  const switchToSignUp = () => {
    setShowSignUp(true); // Show sign-up form
  };

  const switchToLogin = () => {
    setShowSignUp(false); // Show login form
  };
  return (
    <div className="app-Container">
      <Header />
      
      {!isLoggedIn ? (
        isSignedUp ? (
          showSignUp ?(
          <SignUpForm handleSubmit={handleRegister} switchToLogin={switchToLogin}/>
        ) : (
          <LogInForm handleSubmit={handleLogin} switchToSignUp={switchToSignUp} />
        )
      ) : (
        <SignUpForm handleSubmit={handleRegister} switchToLogin={switchToLogin} />
      )
    ) : (
        <>
          <Home  userId= {userId}/>
          <Footer />
        </>
      )}
      
    </div>
  );
}

export default App;
