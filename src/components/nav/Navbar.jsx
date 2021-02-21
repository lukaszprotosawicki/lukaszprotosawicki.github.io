import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`

    width: 100%;
    display: block;
    background-color: rgb(5 9 14);
    height: 47px;
    border-bottom: 1px solid #6d6d6d;
    border-top: 1px solid #191818;
    padding: 0 -20px;
    justify-content: space-between;
    .logo {
      padding: 15px 0;
    }
    @media (max-width: 700px) {
        height: 0;
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