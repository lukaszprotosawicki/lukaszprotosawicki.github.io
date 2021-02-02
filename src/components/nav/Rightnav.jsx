import React from 'react'
import styled from 'styled-components';
import Projects from "../Projects";
import Contact from "../Contact";
import Aboutme from "../Aboutme";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const UL = styled.ul `
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        margin-left: 80px;
        padding: 10px 10px;
        color: rgb(138, 136, 136);
        font-size: 20px;
        cursor: pointer;
      }
      li:hover {
        color: rgb(224, 222, 222);
        transition: 0.5s;
      }

  
    @media (max-width: 700px) {
      flex-flow: column nowrap;
      background-color: #161b28;
      position: fixed;
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
      top: 0;
      left: 0;
      width: 200px;
      padding-top: 3.5rem;
      transition: transform 0.6s ease-in-out;
      li {
        margin-left: 10px;
      }
    
    }
  
`;

const Rightnav = ({open}) => {
    return (
      <Router>
        <Switch>
          <UL open={open}>
            <Link to="/aboutme">
            <li>  About Me<Route path="/aboutme" component={Aboutme} /></li>
            </Link>
            <Link to="/content">
            <li>Projects<Route path="/content" component={Projects} /></li>
            </Link>
            <Link to="/contact">
            <li>Contact<Route path="/contact" component={Contact} /></li>
            </Link>
          </UL>
        </Switch>
      </Router>
    )
}

export default Rightnav


