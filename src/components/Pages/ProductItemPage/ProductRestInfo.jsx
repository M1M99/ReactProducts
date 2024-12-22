import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { MyContext } from "../../../App";

function ProductRestInfo() {
  let { product } = useContext(MyContext);
  console.log(product.current);

  let obj = useOutletContext();
  if (!obj) {
    return <h1>404 NOT FOUND</h1>;
  }
  return (
    <section>
      <h1>Product Info</h1>
      <p>{obj.productDescription}</p>
      <p>{obj.productPrice}</p>
      <p> {obj.active ? "HAS STOCK" : "HAS NO STOCK"}</p>
    </section>
  );
}

export default ProductRestInfo;
