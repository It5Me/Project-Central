import React from 'react'
import {NavLink} from 'react-router-dom'

const SignOutLinks = () =>{
    return ( 
        <div>
        <ul className="right">
            <li><NavLink to='/'>Sign Up</NavLink></li>
            <li><NavLink to='/'>Sign In</NavLink></li>
        </ul>
        </div>
    )
}
export default SignOutLinks