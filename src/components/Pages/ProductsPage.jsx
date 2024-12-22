import styled from "styled-components";
import AddForm from "../AddForm";
import ProductList from "../Products/ProductList";

function ProductsPage() {
  return (
    <SecrtionBase>
      <AddForm/>
      <ProductList/>
    </SecrtionBase>
  );
}

export default ProductsPage;

const SecrtionBase = styled.section`
  margin-bottom: auto;
  margin-top: 30px;
`;
