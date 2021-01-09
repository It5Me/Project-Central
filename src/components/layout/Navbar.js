import React from 'react';
import {Link} from 'react-router-dom'
import SignInLinks from './SignInLinks'; 
import SignOutLinks from './SignOutLinks';

const Navbar = () =>{
    return(
        <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <Link to='/' className="brand-logo">MarioPlan</Link>
            <SignInLinks></SignInLinks>
            <SignOutLinks></SignOutLinks>
        </div>
        </nav>
    )
}
export default Navbar