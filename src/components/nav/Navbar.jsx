import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`

    width: 100%;
    display: flex;
    background-color: #161b22;

    padding: 0 -20px;
    justify-content: space-between;
    .logo {
      padding: 15px 0;
    }
  
  

`



const Navbar = () => {
    return (
        <Nav>
       
            <Burger />
        </Nav>
    )
}

export default Navbar