import React from 'react'
import NavbarStyle from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () =>{
    return <nav className={NavbarStyle.nav}>
    <div>  
     
     <NavLink to="/profile" >Profile</NavLink>
        </div>
        <div>  
        <NavLink to="/dialogs" >Message</NavLink>
        </div>
        <div>  
     <a href="/news">News</a>   
        </div>
        <div>  
     <a href="/music">Music</a>   
        </div>
    
    
    
        </nav>
}

export default Navbar;