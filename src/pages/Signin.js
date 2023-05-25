import React, { useState } from "react";
import { Link } from "react-router-dom";
import BaseAuth from "../Components/BaseAuth";

const SignIn= () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(formData);
  };

  return (
    <>

    <div className="formCenter">
      <form className="formFields" onSubmit={handleSubmit}>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="formFieldInput"
            placeholder="Enter your Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
        </div>

        <div className="formField">
          <label className="formFieldLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="formFieldInput"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
        </div>

        <div className="formField">
          <button className="formFieldButton" >Sign In</button>{" "}
          <Link to="/" className="formFieldLink" style={{marginLeft:"2rem"}}>
            Create an account
          </Link>
        </div>
      </form>
    </div>
            </>
  );
};

export default SignIn;
