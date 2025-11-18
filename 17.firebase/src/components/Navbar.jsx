import React from "react";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Log out succesfully");
      navigate("/auth");
    } catch (error) {
      toast.error("Log out failed" + error.message);
    }
  };
  return (
    <div className="navbar">
      <div className="navbar-left">Firebase</div>
      <div className="navbar-right" onClick={logout}>
        Log out
      </div>
    </div>
  );
}

export default Navbar;
