import React, { useState } from "react";
import { Link } from "react-router-dom";
import BaseAuth from "../Components/BaseAuth";
const SignUp = () => {
  const [matched, setMatched] = useState(true);
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    hasAgreed: false,
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
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
        <form onSubmit={handleSubmit} className="formFields">
          <div style={{ display: "flex" , justifyContent:"space-between" }}>
            <div className="formField myclass"  >
              <label className="formFieldLabel" htmlFor="fullname">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                className="formFieldInput"
                placeholder="Enter your full name"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="formField myclass" >
              <label className="formFieldLabel" htmlFor="username">
                UserName
              </label>
              <input
                type="text"
                id="username"
                className="formFieldInput"
                placeholder="Enter your UserName"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="phone">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              className="formFieldInput"
              placeholder="Enter your Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: "flex", justifyContent:"space-between"  }}>
            <div className="formField myclass" >
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
            <div className="formField myclass" >
              <label className="formFieldLabel" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="formFieldInput"
                placeholder="Confirm password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(event) => {
                    handleChange(event);
                    if (formData.password !== event.target.value) {
                      setMatched(false);
                    }else{
                      setMatched(true);
                    }
                  }}
              />
             {!matched && <p style={{ color: "#cf6679" }}>Not matched</p>}
            </div>
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                checked={formData.hasAgreed}
                onChange={handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                Terms of Service
              </a>
            </label>
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign Up</button>{" "}
            <Link
              to="/sign-in"
              className="formFieldLink"
           
            >
              I'm already a member
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
