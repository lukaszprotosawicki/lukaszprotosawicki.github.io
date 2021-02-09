import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Content from "../Content";
import app from "../server/Firebase";

const Nav = styled.nav`
  display: flex;
`;

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
        alert("You have registered correctly");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <Nav>
      <Content />
      <div className="readme">
        <form onSubmit={handleSignUp} className="form">
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
            Sign Up
          </button>
        </form>
      </div>
    </Nav>
  );
};

export default withRouter(SignUp);
