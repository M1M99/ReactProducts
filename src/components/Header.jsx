import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
  let navigate = useNavigate()
  return (
    <Header1>
      <Headline>Header</Headline>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/products'>PRODUCTS</Link></li>
      </ul>
    </Header1>
  );
}

export default Header;

const Header1 = styled.header`
  background-color: black;
  padding: 40px;
  color:white;
`;

const Headline = styled.h1`
  color: white;
`;
