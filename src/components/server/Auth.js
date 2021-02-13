import { useContext } from "react";
import { AuthProvider } from "../server/AuthProvider";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  h1 {
    text-align: center;
  }
`;

export const Auth = (props) => {
  const user = useContext(AuthProvider);
  return user ? (
    props.children
  ) : (
    <Nav>
      <h1>Please log in!!!</h1>
    </Nav>
  );
};
export default Auth;
