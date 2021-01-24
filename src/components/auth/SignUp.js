import React, {useState} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import {signUp} from '../../store/actions/authActions'

const SignUp =(props)=> {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const handleChange = (e) =>{
        switch(e.target.id){
            case 'email' :
                setEmail(e.target.value)
                return;
            case 'password':
                setPassword(e.target.value)
                return;
            case 'firstname':
                setFirstName(e.target.value)
                return;
            case 'lastname':
                setLastName(e.target.value)
                return;    
            default:
                return;
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.signUp({email,password,firstName,lastName})
    }
    const {auth} = props
    if(auth.uid) return <Redirect to ='/'/>
    return (
        <div className="container">
        {auth.isLoaded &&<form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" onChange={handleChange} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastname">Last Naem</label>
                    <input type="text" id="lastname" onChange={handleChange} required/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form> }
            
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}
const mapDispatchToProps =(dispatch) =>{
    return{
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
