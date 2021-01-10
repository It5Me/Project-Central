import React from 'react'
import {NavLink} from 'react-router-dom'

const SignOutLinks = () =>{
    return ( 
        <div>
        <ul className="right">
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
            <li><NavLink to='/signin'>Sign In</NavLink></li>
        </ul>
        </div>
    )
}
export default SignOutLinks