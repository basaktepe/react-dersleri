import { useEffect } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  const getUserById = async (userId) => {
    //const response = await axios.get(BASE_URL + "/users/" + userId);
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  };

  useEffect(() => {
    //getAllUsers();
    getUserById(1);
  }, []);

  return <div></div>;
}

export default App;
