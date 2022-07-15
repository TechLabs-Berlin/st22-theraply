import React from 'react';
import './LoginBtn.css';
import { useHistory } from "react-router-dom";

function LoginBtn() {
    const history = useHistory();
    const Login = () => {
        history.push("/login");
    }
    return (
        <div>
        <button onClick={Login} className='logbtn'>Login</button>
        </div>
    )
}

export default LoginBtn;