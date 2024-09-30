import React from "react";
import Product from "../components/Product";
import { products } from "../data/products";

function Products() {
  return (
    <div>
      {products &&
        products.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
    </div>
  );
}

export default Products;
