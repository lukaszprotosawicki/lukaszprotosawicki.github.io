import React from 'react'
import Rightbar from './Rightnav'
import Burger from './Burger'



const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo">
                App
            </div>
            <Burger/>
            <Rightbar/>
        </div>
    )
}

export default Navbar