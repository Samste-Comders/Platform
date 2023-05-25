import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import SignUpForm from "./Signup";
import SignInForm from "./Signin";

import "../App.css";
import BaseAuth from "../Components/BaseAuth";

const Auth = () => {
  return (
    <Router>

          <Routes>
            <Route path="/sign-up" element={<BaseAuth page={"signup"} compo={<SignUpForm/>} />} />
            <Route path="/sign-in" element={<BaseAuth page={"signin"} compo={<SignInForm/>}/>} />
          </Routes>

      
    </Router>
  );
};

export default Auth;
