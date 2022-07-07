import React from 'react';
import './UserForm.css';

function UserForm() {
    return (
        <div className="userform">
            <form>
            <div className='form-group'>
                <label htmlFor="name"></label>
                <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className='form-group'>
                <label htmlFor="telephone"></label>
                <input type="telephone" name="telephone" id="telephone" placeholder="Telephone Number" />
            </div>
            <div className='form-group'>
                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" placeholder="Email Address"/>
            </div>
            </form>
        </div>
    )
}

export default UserForm;