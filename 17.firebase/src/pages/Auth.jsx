import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const auth = getAuth();
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  return (
    <div className="auth">
      <h3>Sign in / Register</h3>
      <div className="input-div">
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="Email address"
        ></input>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />
      </div>

      <div className="button-div">
        <button className="google-button">
          <FaGoogle style={{ marginTop: "2px" }} />
          Sign in with Google{" "}
        </button>
        <button className="login-button">Sign in</button>
        <button onClick={register} className="register-button">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Auth;
