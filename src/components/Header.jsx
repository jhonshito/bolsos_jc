import React from 'react'
import Logo from "../assets/logoJc.png";

const Header = () => {
    return (
        <nav className="navbar fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand p-0" href="/">
                    <img src={Logo} alt="Logo" width="45" height="45" className="p-0" />
                </a>
            </div>
        </nav>
    )
}

export default Header
