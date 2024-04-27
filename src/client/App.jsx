import {useState, createContext} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Tracker from "./Components/health/Tracker.jsx";
import Courses from "./Components/Courses.jsx";
import Header from "./Components/NavBar/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Calculator from "./Components/health/calculator.jsx";
import Pregnancytips from "./Components/health/prenancytips.jsx";
import LogInForm from "./Components/signupandlogin/login.jsx";
import SignUpForm from "./Components/signupandlogin/signup.jsx";

import "./App.scss";


const apiUrl = `https://sheleadsserverrepo-production.up.railway.app`;
const formContext = createContext()
function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toggleSignUp, setToggleSignUp] = useState(false)

const [userId, setUserId] = useState(null);


  const handleRegister = async ({ firstName, lastName, email, password }) => {
    const createdRegister = await fetch(`${apiUrl}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    
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
    setUserId(logInToken.id)
    localStorage.setItem("token", JSON.stringify(logInToken.data));
    localStorage.setItem("id", JSON.stringify(logInToken.id));
    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn(true);
  };
  

  return (
    <formContext.Provider value={{userId , setUserId}}>
<div className="app-Container">
      <Header />
      
      {!isLoggedIn && (
        <>
      {toggleSignUp ? (<LogInForm setToggleSignUp= {setToggleSignUp} toggleSignUp={toggleSignUp} handleSubmit={handleLogin} />
      ) : (
      <SignUpForm setToggleSignUp= {setToggleSignUp} toggleSignUp= {toggleSignUp} handleSubmit={handleRegister} />
      )} 
      </>
    )}
    {isLoggedIn && (
        <>
          <Routes>
            <Route path= "/" element= {<Home/>}/>
            <Route path= "/about" element = {<About/>} />
            <Route path= "/calculator" element = {<Calculator/>} />
            <Route path= "/tips" element = {<Pregnancytips/>} />
            <Route path= "/tracker" element = {<Tracker/>} />
            <Route path= "/courses" element = {<Courses/>} />
          </Routes>
           <Footer/>
        </>
    )}
      
    </div>
    </formContext.Provider>
    
  );
}

export {formContext, App}
