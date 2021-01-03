import React, { useState } from "react";
import Button from "../Button/index";
import { NavLink, useHistory } from "react-router-dom";
import { auth } from "../../config/firebase";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        setErrorMessage("All fields are required");
      }
      const { user } = await auth.signInWithEmailAndPassword(email, password);

      localStorage.setItem("uid", user.uid);
      history.push("./movie");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setErrorMessage("Invalid email address or password");
      } else if (error.code === "auth/invalid-email") {
        setErrorEmail("error.message");
      } else if (error.code === "auth/wrong-password") {
        setErrorEmail("invalid email address or password");
      }
    }
  };
  const handleKeyUp = () => {
    setErrorMessage("");
  };

  return (
<div className="center-form">  
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center text-center form p-4">
      <form onSubmit={handleSubmit}>
      <div className="signup">
          <NavLink to="/" className="signup-title">
            Cloud 9
         </NavLink>

          {errorMessage ? (
            <p className="red-text center-align">{errorMessage}</p>
           ) : (
             ""
           )}
           </div>
        
        <div className="form-group text-left">
          <label htmlFor="exampleEmail"> Enter Email Address </label>
          <input
           type="email"
           className="form-control"
           id="text"
           placeholder="Email Address"
           name="email"
           error={errorEmail}
             onKeyUp={handleKeyUp}
             onChange={handleChange}
             value={email}
           />
        </div>
        <div className="form-group text-left">
          <label htmlFor="password"> Enter Password </label>
          <input
           type="password"
           className="form-control"
           id="password"
           aria-describedby="fullname"
           placeholder="Password"
           name="password"
           onKeyUp={handleKeyUp}
           onChange={handleChange}
           value={password}
           />
        </div>
        <Button text="Log In" className="btn-signup" />
        <p className="center-align">
            Don't have an account? <a href="/signup"> Create one for free </a>
           </p>
      </form>

    </div>
    </div>
  );
}
