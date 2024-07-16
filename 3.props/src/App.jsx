import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Product";
import Container from "./Container";

function App() {
  const productName = "Buzdolabı";
  return (
    <div>
      {/* <Product productName="Ayakkabı" price={3200} />
      <hr />
      <Product productName="Pantolon" price={950} />
      <hr />
      <Product productName={productName} price={15000} /> */}
      <Container>
        <Product productName="Telefon" price={20500} />
      </Container>
    
    </div>
  );
}

export default App;
