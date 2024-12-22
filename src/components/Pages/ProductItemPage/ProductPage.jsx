import { useLocation } from "react-router-dom";

function ProductPage() {
  const location = useLocation();
  const { productName, productDescription, productPrice } = location.state || {};

  return (
    <div>
      <h1 style={{fontSize:'25px'}}>Product Info</h1>
      <p>Product: {productName}</p>
      <p>Color: {productDescription}</p>
      <p>Price: {productPrice} $</p>
    </div>
  );
}

export default ProductPage;
