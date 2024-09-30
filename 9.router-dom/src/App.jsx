import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import EmployeeAbout from "./pages/EmployeeAbout";
import CompanyAbout from "./pages/CompanyAbout";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="employee" element={EmployeeAbout}></Route>
          <Route path="company" element={CompanyAbout}></Route>
        </Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
        <Route
          path="/product-details/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
