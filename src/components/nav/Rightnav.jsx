import React from 'react';
import { useContext } from "react";
import styled from 'styled-components';
import Projects from "../Projects";
import Contact from "../Contact";
import Aboutme from "../Aboutme";
import Login from "../server/Login";
import SignUp from "../server/SignUp";
import Weather from "../weather/Weather";
import {BrowserRouter as HashRouter, Switch, Route, Link } from "react-router-dom";
import firebase from "../server/Firebase";
import { AuthProvider } from "../server/AuthProvider";


const UL = styled.ul `
    list-style: none;
    display: flex;
    height: 40px;
    flex-flow: row nowrap;
    padding-left: 140px;
    z-index: 1;
    
    nav {
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
      nav {
        display: block;
        margin: 5px 0 10px 50px;
      }
      li {
        margin-left: -10px;
      }
    }
`;

const Rightnav = ({open}) => {
  const user = useContext(AuthProvider);
  const handleOnSignOutClick = () => {
    firebase.auth().signOut();
  };
    return (
      <AuthProvider>
      <HashRouter >
         <UL open={open} >
        <nav>
          <li><Link to={"/"}>About Me</Link></li>
            <li><Link to={"/projects"} >Projects</Link></li>
            <li> <Link to={"/contact"} >Contact</Link></li>
            <li> <Link to={"/weather"} >Weather</Link></li>
            <li> {!user && ( <Link to={"/login"} >Login</Link>)}</li>
            <li className="button-register">{user && ( <Link to={"/signup"} >Sign Up</Link>)}</li>
            <li> {!user && (<Link onClick={handleOnSignOutClick}  to={"/"}  > Sign Out</Link>)}</li>
            </nav>
            </UL>
            <br />
          <Switch>
              <Route exact path="/" component={Aboutme} />
              <Route path="/projects" component={Projects}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/weather" component={Weather}/>
               <Route path="/login" component={Login}/>
               <Route path="/signup" component={SignUp}/>
        </Switch>
      </HashRouter >
      </AuthProvider>
    )

}

export default Rightnav

