import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to={"/"} style={linkStyle()}>Home</Link> | <Link to={"/about"} style={linkStyle()}>About</Link>
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#333333',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: '2em',
    padding: '1em 2em'
}

const linkStyle = () => ({
    color: '#ffffff',
});

export default Header;