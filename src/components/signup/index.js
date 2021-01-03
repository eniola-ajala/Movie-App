import React, { useState } from "react";
import Button from "../Button/index";
import Textinput from "../textinput/index";
import { NavLink, useHistory } from "react-router-dom";
import { auth, firestore } from "./../../config/firebase";
import { } from 'react-bootstrap'

export default function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "fullname") {
      setFullname(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!fullname || !email || !password) {
        setErrorMessage("All fields are required");
      }
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (user) {
        const profile = firestore.collection("users").doc(user.uid);
        await profile.set({
          fullname,
          email,
        });
        localStorage.setItem("uid", user.uid);
        history.push("./signin");
      }
    } catch (error) {
      if (error.code === "auth/weak-password") {
        setErrorPassword(error.message);
      } else if (error.code === "auth/email-already-in-use") {
        setErrorEmail(error.message);
      } else if (error.code === "auth/invalid-email") {
        setErrorEmail(error.message);
      }
      console.log(error.code);
      console.log(error.message);
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
          <label htmlFor="Fullname"> Enter Fullname </label>
          <input
           type="text"
           className="form-control"
           id="text"
           placeholder="Fullname"
           name="fullname"
           onKeyUp={handleKeyUp}
           onChange={handleChange}
           value={fullname}
           />
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
           error={errorPassword}
           name="password"
           onKeyUp={handleKeyUp}
           onChange={handleChange}
           value={password}
           />
        </div>
        <Button text="Sign Up" className="btn-signup" />
        <p className="center-align">
            Already have an account <a href="/signin"> Signin </a>
           </p>
      </form>

    </div>
    </div>
  );
}
