import React from 'react';
import { useState, useEffect } from 'react';
// import UserForm from '../components/UserForm';
import UserCard from '../components/UserCard';

// const URL = "https://randomuser.me/api/?results=1";
// const requestData = () => fetch(URL).then(res => res.json());

// function Profile() {

//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     requestData().then(users => setUsers(users));
//   }, []);

//   return (
//     <div className="Profile">
//       Profile
//       <br /><br />
//       {[users].map(users => (
//         <div key={users.id}> {users.name} </div>
//       ))
//       }
//     </div >
//   )
// }

function Profile() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch('https://randomuser.me/api/?results=1');
        const userData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        userData = [];
      }

      setUsers(userData);
    })();
  }, []);

  return (
    <div className="Profile">
      <h1>Profile</h1>
      <div className="card-containter">
        {[users].map((user, index) => (
          <UserCard userData={user} key={index} />
        ))}
      </div>
      {/* <UserForm /> */}
    </div>
  );
};

export default Profile;