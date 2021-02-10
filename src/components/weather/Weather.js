import React, { Component } from "react";
import styled from "styled-components";
import Content from "../../components/Content";
import Form from "./Form";
import Result from "./Result";

const Nav = styled.nav`
  display: flex;
`;
class Weather extends Component {
  state = {
    value: "",
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <Nav>
        <Content />
        <div className="readme">
          <Form value={this.state.value} change={this.handleInputChange} />
          <Result />
        </div>
      </Nav>
    );
  }
}

export default Weather;
