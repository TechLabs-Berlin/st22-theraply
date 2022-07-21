import React from 'react';
import './UserCard.css';
import ProgressBarApp from "./ProgressBarApp";

function userCard() {
    return (
        <div className="userCard">
            <div className="card-header">
                <button>Edit</button>
            </div>
            <div className="card-title">
                <div className="card-image">
                    <img className="profileImage" src="images/rachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg" alt="" />
                </div>
                <div className="userName">
                    Andrea Rossi
                </div>
            </div>
            <div className="card-body">
                <div className="userConact">
                    <h3>Contact Details</h3>
                    <div className="userPhone">
                        <p>+491763030303</p>
                    </div>
                    <div className="userMail">
                        <p>andrea@rossi.com</p>
                    </div>
                </div>
                <div className="userProgress">
                    <h3>Progress Level</h3>
                    <div className="progressBar">
                        <ProgressBarApp />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default userCard;