import React, {useState} from 'react'

const SignUp =()=> {
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
        console.log(email,password,firstName,lastName)
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastname">Last Naem</label>
                    <input type="text" id="lastname" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
