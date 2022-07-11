import React from 'react';
import './RegisterBtn.css';
import { useHistory } from "react-router-dom";

function RegisterBtn() {
    const history = useHistory();
    const Register = () => {
        history.push("/register");
    }
    return (
        <div>
        <button onClick={Register} className='regbtn'>Register</button>
        </div>
    )
}

export default RegisterBtn;