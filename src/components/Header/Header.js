import React from 'react'
import HeaderStyle from './Header.module.css'



function Header(){
    return <header className={HeaderStyle.header}>
    <img src="./logo.png" />
        </header>
}

export default Header;