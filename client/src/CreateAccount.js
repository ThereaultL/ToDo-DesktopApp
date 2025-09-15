import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function CreateAccount() {
  const [returnToLogin, setReturnToLogin] = useState(false);

  if (returnToLogin) {
    return <Navigate to="/" />;
  }
  return (
    <div className="create-account">
      <button onClick={() => setReturnToLogin(true)}>X</button>
      <h1>CreateAccount</h1>
    </div>
  );
}
