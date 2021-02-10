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
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: "",
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCitySubmit = (e) => {
    e.preventDefault();
    console.log("pot");

    const API = `api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid={d87bca49d8aa56fa19f37ba4eacc359a}`;

    fetch(API)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Nav>
        <Content />
        <div className="readme">
          <div className="weather">
            <Form
              value={this.state.value}
              change={this.handleInputChange}
              submit={this.handleCitySubmit}
            />
            <Result />
          </div>
        </div>
      </Nav>
    );
  }
}

export default Weather;
