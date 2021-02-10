import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Result from "./Result";

const Nav = styled.nav`
  display: flex;
`;
function Projects() {
  return (
    <Nav>
      <Form />
      <Result />
    </Nav>
  );
}

export default Projects;
