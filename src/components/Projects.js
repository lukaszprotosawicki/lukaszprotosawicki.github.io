import React from "react";
import styled from "styled-components";
import Content from "../components/Content";
import Textprojects from "./Textprojects";

const Nav = styled.nav`
  display: flex;
`;
function Projects() {
  return (
    <Nav>
      <Content />

      <Textprojects />
    </Nav>
  );
}

export default Projects;
