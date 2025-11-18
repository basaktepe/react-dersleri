import "./App.css";
import Navbar from "./components/Navbar";
import RouterConfig from "./config/RouterConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <RouterConfig></RouterConfig>
      <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
    </div>
  );
}

export default App;
