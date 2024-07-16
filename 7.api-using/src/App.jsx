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
    return response.data.postId;
  };

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  const updateUser = async (userId, updatedUser) => {
    const response = await axios.put(
      `${BASE_URL}/users/${userId}`,
      updatedUser
    );
  };

  const deleteUser = async (userId) =>
    await axios.delete(`${BASE_URL}/users/${userId}`);

  const getPostById = async (postId) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
    return response.data;
  };

  const getPost = async () => {
    const postId = await getUserById(1);
    const postData = await getPostById(postId);
    console.log(postData);
  };

  useEffect(() => {
    //getAllUsers();
    // getUserById(1);
    // createUser({ name: "ilayda", password: "ww" });
    // updateUser("3cd3", { name: "dilara", password: "kkk" });
    // deleteUser("3cd3");
    getPost();
  }, []);

  return <div></div>;
}

export default App;
