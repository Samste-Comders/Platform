import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
const BaseAuth = ({ page, compo }) => {
	return (
		<div className='App'>
			<div className='appAside' />
			<div className='appForm'>
				<div className='formTitle' style={{ marginTop: "2rem" }}>
					<Link
						to='/sign-in'
						className='formTitleLink'
						style={{ color: page === "signin" ? "#03dac6" : "#9da6b1" }}>
						Sign In
					</Link>{" "}
					or{" "}
					<Link
						to='/sign-up'
						className='formTitleLink'
						style={{ color: page === "signup" ? "#03dac6" : "#9da6b1" }}>
						Sign Up
					</Link>
					<div style={{ marginTop: "2rem" }}>{compo}</div>
				</div>
			</div>
		</div>
	);
};

export default BaseAuth;
