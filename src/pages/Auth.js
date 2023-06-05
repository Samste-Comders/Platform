import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import SignUpForm from "./Signup";
import SignInForm from "./Signin";

import "../App.css";
import BaseAuth from "../Components/BaseAuth";
import Home from "./Home";
import CtfPage from "./CtfPage";
import LeaderBoard from "../Components/LeaderBoard";


const Auth = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/ctf/EVENT_ID' element={<CtfPage />} />
				<Route path='/ctf/EVENT_ID/leaderboard' element={<LeaderBoard />} />
				<Route
					path='/sign-up'
					element={<BaseAuth page={"signup"} compo={<SignUpForm />} />}
				/>
				<Route
					path='/sign-in'
					element={<BaseAuth page={"signin"} compo={<SignInForm />} />}
				/>
			</Routes>
		</Router>
	);
};

export default Auth;
