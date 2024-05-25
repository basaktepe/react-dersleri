import React from "react";

function Product({ productName, price }) {
  // const { productName, price } = props;
  return (
    <div>
      <div> ÜRÜN BİLGİLERİ</div>
      <div>
        <div>İsim : {productName}</div>
        <div>Fiyat: {price} TL</div>
      </div>
    </div>
  );
}

export default Product;
