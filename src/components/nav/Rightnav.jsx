import React from 'react';
import styled from 'styled-components';
import Projects from "../Projects";
import Contact from "../Contact";
import Aboutme from "../Aboutme";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const UL = styled.ul `
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    padding-left: 140px;
    z-index: 1;
  a {
    margin: 0px 30px;
    font-size: 20px;
    cursor: pointer;
    /* clear: both; */
    text-align: center;
    li {

      padding: 10px 5px;
      color: rgb(138,136,136);
      font-size: 20px;
      cursor: pointer;
      /* clear: both; */
      text-align: center;
      }
      li:hover {
        color: rgb(224, 222, 222);
        transition: 0.5s;
      }
    }
      @media all and (min-width: 700px)  {

        a{

          li {
            width: 100%;
           }
        }

      }

    @media (max-width: 700px) {
      padding-left: 0px;
      flex-flow: column nowrap;
      background-color: #161b28;
      position: fixed;
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
      top: 0;
      left: 0;
      width: 180px;
      z-index: 1;
      padding-top: 3.5rem;
      transition: transform 0.6s ease-in-out;
      li {
        margin-left: -10px;
      }
    }
`;

const Rightnav = ({open}) => {
    return (
      <Router>
        
          <UL open={open}>
            <Link to="/">
            <li >  About Me</li>
            </Link>
            <Link to="/projects" >
            <li>Projects</li>
            </Link>
            <Link to="/contact" >
            <li>Contact</li>
            </Link>
          </UL>
          <Switch>
          ````<Route exact path="/">
              <Aboutme/>
              </Route>
              <Route path="/projects">
               <Projects />
              </Route>
              <Route path="/contact">
              <Contact/>
              </Route>
        </Switch>
      </Router>

    )
}



export default Rightnav

