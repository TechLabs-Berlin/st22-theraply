import React, {useState} from 'react';
import LoginForm from './LoginForm';

function App() {
  const testUser = {
    email: "testUser@test.com",
    password: "test1234"
  }
  
  const [user, setUser] = useState({name:"", email:""});
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
    setUser({name:"", email:""});
  }

  return (
   <div className='App'>
     {(user.email !== '') ? (
       <div className='Welcome'>
         <h2>Welcome, <span>{user.name}</span></h2>
         <button onClick={Logout}>Logout</button>
       </div>
     ) : (
       <LoginForm Login={Login} error={error}/>
     )}
   </div>
  );
}

export default App;
