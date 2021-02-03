import React from "react";

import styled from "styled-components";
import Content from "../components/Content";

// import Readme from "./Readme";
import Textcontact from "./Textcontact";
const Nav = styled.nav`
  display: flex;
`;
function Contact() {
  return (
    <Nav>
      <Content />
      <Textcontact />
    </Nav>
  );
}

export default Contact;
