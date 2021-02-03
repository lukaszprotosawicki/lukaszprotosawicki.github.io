import React from "react";
import styled from "styled-components";
import Content from "../components/Content";

import Readme from "./Readme";

const Nav = styled.nav`
  display: flex;
`;
const Projects = () => {
  return (
    <Nav>
      <Content />
      <Readme />
    </Nav>
  );
};

export default Projects;
