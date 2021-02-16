import styled from "styled-components";
import Content from "../Content";
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../server/Firebase";
import { AuthContext } from "./Auth";

const Nav = styled.nav`
  display: flex;
`;

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const currentUser = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <Nav>
      <Content />
      <div className="readme">
        <form onSubmit={handleLogin} className="form">
          <p>
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              className="input-design"
            />
          </p>
          <p>
            <label htmlFor="password"></label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              className="input-design"
            />
          </p>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </Nav>
  );
};

export default withRouter(Login);
