import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import LoginForm from '../components/LoginForm';
import UserCard from '../components/UserCard';
import PrefillForm from '../components/PrefillForm';

function Login() {
  const testUser = {
    email: "andrea@rossi.com",
    password: "test1234"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.email == testUser.email && details.password == testUser.password) {
      console.log('logged in');
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log('wrong details')
      setError(alert("Email or Password incorrect! Please try again!"))
    }
  }

  const Logout = () => {
    console.log('logoout');
    setUser({ name: "", email: "" });
  }

  const history = useHistory();
  const Profile = () => {
    history.push("/profile");
  }

  return (
    <div className='Login'>
      {(user.email !== '') ? (
        <div className='profilePage'>
          <div className='Welcome'>
            <h2>Hello<span>{user.name}</span> Andrea!</h2>
            <p>You joined in 2022</p>
          </div>
          <div className='profilePageBtns'>
            <button onClick={Logout}>Logout</button>
          </div>
          <UserCard />
          <PrefillForm />
        </div >
      ) : (
        <LoginForm Login={Login} error={error} />
      )
      }
    </div >
  );
}

export default Login;
