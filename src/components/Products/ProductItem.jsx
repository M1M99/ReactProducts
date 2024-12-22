import styled from "styled-components";
import EditForm from "./EditForm";
import { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

function ProductItem(props) {
  let [show, setShow] = useState(false);

  let inputName = useRef("");
  let inputDescription = useRef("");
  let inputPrice = useRef("");
  let button = useRef(null);
  let navigate = useNavigate();

  let { product } = useContext(MyContext);

  return (
    <ProductsLi>
      {props.obj.active && (
        <>
          <h3>{props.obj.productName}</h3>
          <p>
            {props.obj.productDescription}
          </p>
          <ProductPrice>{props.obj.productPrice} $</ProductPrice>
          <Link state={props.obj} to={`/product-page/${props.obj.id}`}>
            <button>SHOW</button>
          </Link>
          <button
            ref={button}
            onClick={() => {
              console.log(button.current);
              setShow(!show);
              inputName.current = props.obj.productName;
              inputDescription.current = props.obj.productDescription;
              inputPrice.current = props.obj.productPrice;
            }}
          >
            EDIT
          </button>
        </>
      )}
      <HasStock>
        {props.obj.active ? "HAS STOCK" : "HAS NO STOCK"}
      </HasStock>
      <EditForm
        show={show}
        id={props.obj.id}
        inputName={inputName}
        inputDescription={inputDescription}
        inputPrice={inputPrice}
      />
    </ProductsLi>
  );
}

export default ProductItem;

const ProductsLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  border: 2px solid black;
  border-radius: 5px;
`;

const ProductPrice = styled.span``;
const HasStock = styled.span``;
