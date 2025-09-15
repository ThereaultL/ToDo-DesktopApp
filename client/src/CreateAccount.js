import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export default function CreateAccount() {
  const [returnToLogin, setReturnToLogin] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [eyeIcon, setEyeIcon] = useState(<IoEyeOutline />);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);

    if (showPassword) {
      setEyeIcon(<IoEyeOutline />);
    } else {
      setEyeIcon(<IoEyeOffOutline />);
    }
  };

  if (returnToLogin) {
    return <Navigate to="/" />;
  }
  return (
    <div className="create-account">
      <button onClick={() => setReturnToLogin(true)} class="cancel">
        Return to Login
      </button>
      <div class="login">
        <form class="login-form">
          <div class="email">
            <label htmlFor="password">Email:</label>
            <input
              type="email"
              placeholder="Enter Email"
              /** Add target event onChange */
            />
          </div>
          <div class="password">
            <label htmlFor="password">Password:</label>
            <div class="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                /** Add target event onChange */
              />
              <button onClick={togglePasswordVisibility}>{eyeIcon}</button>
            </div>
            <label htmlFor="password">Confirm Password:</label>
            <div class="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                /** Add target event onChange */
              />
              <button onClick={togglePasswordVisibility}>{eyeIcon}</button>
            </div>
          </div>

          <button class="login-button">Create Account</button>
        </form>
      </div>
    </div>
  );
}
