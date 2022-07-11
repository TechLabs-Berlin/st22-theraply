import React, {useState} from 'react';
import './LoginForm.css';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name:"", email:"", password:""});
    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    };
    return (
        <div className="login-box">
            <div className="notregistered">Not registered?<a href="#">Create an account</a></div>
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2 className="h2log">Login</h2><h2 className="h2reg">Registration</h2>
                {/* <button>Login</button><button>Registration</button> */}
                {(error !=="") ? (<div className="error">{error}</div>) :""}
            </div>
            <div className='form-group'>
                <label htmlFor="name">Name </label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email </label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password </label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
            </div>
            <input type="submit" value="Login" />
            <div className="forgotpassword"><a href="#">Forgot Password?</a></div>
        </form>
        </div>
    )
}

export default LoginForm;