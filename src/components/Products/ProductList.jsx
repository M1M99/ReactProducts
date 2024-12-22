import styled from "styled-components";
import ProductItem from "./ProductItem";
import { useContext, useState } from "react";
import { MyContext } from "../../App";

function ProductList() {
  let [value, setValue] = useState('');

  let {productsState} = useContext(MyContext)

  let filtered = productsState.products.filter((item) => item.productName.startsWith(value))

  return (
    <Section>
      <input type="text" onInput={(ev) => setValue(ev.target.value)}/>
      <List>
        {filtered.map((item) => (
          <ProductItem
            key={item.id}
            obj={item}
          />
        ))}
      </List>
    </Section>
  );
}

export default ProductList;
const List = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px 30px;
`;

const Section = styled.section`
  padding: 30px;
`;

