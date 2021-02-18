import React from 'react';
import { useContext } from "react";
import styled from 'styled-components';
import Projects from "../Projects";
import Contact from "../Contact";
import Aboutme from "../Aboutme";
import Login from "../server/Login";
import SignUp from "../server/SignUp";
import Weather from "../weather/Weather";
import {BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import firebase from "../server/Firebase";
import  {AuthContext}   from "../server/Auth";
import  PrivateRoute   from "../server/PrivateRoute";


const UL = styled.ul `
    list-style: none;
    display: flex;
    height: 40px;
    flex-flow: row nowrap;
    padding-left: 140px;
    z-index: 1;
    
    div {
      display: flex;
    }
    
    li {
      padding: 10px 1px;
      font-size: 19px;
      cursor: pointer;
      margin: 0 1.5vw;
      text-align: center;
      a {
        color: rgb(138,136,136);
      }
      }
      li a:hover {
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
      background-color: rgb(5 9 14);
      position: fixed;
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
      top: 0;
      height: min-content;
      border-radius: 0 56px 46px;
      left: 0;
      width: 180px;
      z-index: 1;
      padding-top: 3.5rem;
      transition: transform 0.6s ease-in-out;
      div {
        display: block;
        margin: 5px 0 10px 50px;
      }
      li {
        margin-left: -10px;
      }
    }
`;

const Rightnav = ({open}) => {
  const currentUser = useContext(AuthContext);
  
  const handleOnSignOutClick = () => {
    firebase.auth().signOut();
  };
    return (
      
        <Router >
         <UL open={open} >
            <div>
              <li><NavLink  to={"/"}>About Me</NavLink></li>
              <li><NavLink activeClassName="active-link" to={"/projects"} >Projects</NavLink></li>
              <li> <NavLink activeClassName="active-link" to={"/contact"} >Contact</NavLink></li>
              <li> <NavLink activeClassName="active-link" to={"/weather"} >Weather</NavLink></li>
               {!currentUser && ( <li><NavLink activeClassName="active-link" to={"/login"} >Login</NavLink></li>)}
             {!currentUser && (  <li className="button-register"><NavLink activeClassName="active-link" to={"/signup"} >Sign Up</NavLink></li>)}
             {currentUser && ( <li> <NavLink onClick={handleOnSignOutClick}  to={"/"}  > Sign Out</NavLink></li>)}
            </div>
          </UL>
          <br />
          <Switch>
              <Route exact path="/" component={Aboutme} />
              <PrivateRoute path="/projects" component={Projects}/>
              <Route path="/contact" component={Contact}/>
              <PrivateRoute path="/weather" component={Weather}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={SignUp}/>
          </Switch>
        </Router >
      
    )

}

export default Rightnav

