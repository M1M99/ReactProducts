import styled from "styled-components";

function Footer() {
    return(
        <Footer1>
            <Headline>Footer</Headline>
        </Footer1>
    )
}

export default Footer

const Footer1 = styled.footer`
  background-color: black;
  padding: 40px;
`;

const Headline = styled.h1`
  color: white;
`;
