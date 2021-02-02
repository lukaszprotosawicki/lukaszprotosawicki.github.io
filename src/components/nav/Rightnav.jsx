import React from 'react'
import styled from 'styled-components';
import Aboutme from "../Aboutme";
import Projects from "../Projects";
import Contact from "../Contact";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

// App.js

const Rightnav = ({open}) => {
    return (
      <Router>
        <UL open={open}>
            <li><Route path="/aboutme" component={Aboutme} />About Me</li>
            <li><Route path="projects" component={Projects} />Projects</li>
            <li><Route path="contact" component={Contact} />Contact</li>
        </UL>
      </Router>
    )
}

export default Rightnav


