import React from 'react';
import './UserCard.css';
import placeholderImg from '../placeholder-image.png';

function UserCard() {
  return (
    <div className="container">
      <div className="card-head">
        <button className="editbtn">Edit</button>
      </div>
      <div className="card-img">
        <img src={placeholderImg} className="profileimg" alt="profilepic" />
      </div>
      <div className="card-body">
        <h5 className="user-name">USER X</h5>
        <h5 className="user-contact">Contact Data</h5>
        <h6>Phone</h6>
        <h6>E-Mail</h6>
      </div>
      <div className="process">
        <h5>Process Level</h5>
        <div className="process-bar"></div>
      </div>
    </div>
  )
};

export default UserCard;