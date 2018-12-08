import React from 'react'

const Navbar = ()=>
{
    return (
    <nav className = "nav-wrapper red darken-3">
    <div className = "container">
    <a className = "brand-logo">HIRATION_TECH</a>
    <ul className = "right">
    <li><a href ="/Post" >Posts</a></li>
    <li><a href ="/Postform" >Postform</a></li>
    </ul>
    </div>
    </nav>
    );
}
export default Navbar