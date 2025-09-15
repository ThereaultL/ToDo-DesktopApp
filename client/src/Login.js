import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [eyeIcon, setEyeIcon] = useState(<IoEyeOutline />);

  const [createAccountRedirect, setCreateAccountRedirect] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);

    if (showPassword) {
      setEyeIcon(<IoEyeOutline />);
    } else {
      setEyeIcon(<IoEyeOffOutline />);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      alert("Login successful");
      setRedirect(true);
    } else {
      alert("Login failed");
    }
  };

  if (redirect) {
    return <Navigate to="/home" />;
  }

  if (createAccountRedirect) {
    return <Navigate to="/createAccount" />;
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit} class="login-form">
        <div class="email">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="password">
          <label htmlFor="password">Password:</label>
          <div class="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={togglePasswordVisibility}>{eyeIcon}</button>
          </div>
        </div>
        <button type="submit" class="login-button">
          Login
        </button>
        <p
          class="create-new-account"
          onClick={() => setCreateAccountRedirect(true)}
        >
          Create an account
        </p>
      </form>
    </div>
  );
}
