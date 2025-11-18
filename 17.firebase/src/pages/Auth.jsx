import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      if (user) {
        toast.success("User created");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      if (user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Login failed" + error.message);
    }
  };

  const googleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      if (user) {
        toast.success("Log in with google succesful");
        navigate("/home");
      }
    } catch (error) {
      toast.error("Log in with google failed" + error.message);
    }
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
        <button className="google-button" onClick={googleLogin}>
          <FaGoogle style={{ marginTop: "2px" }} />
          Sign in with Google{" "}
        </button>
        <button className="login-button" onClick={login}>
          Sign in
        </button>
        <button onClick={register} className="register-button">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Auth;
