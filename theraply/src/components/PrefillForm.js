import React from 'react';
import './PrefillForm.css';

function prefillForm() {
    return (
        <div className='pFContainer'>
            <div className="prefillForm">
                <div className="formTitle">
                    <h3>Prefill Contact form</h3>
                    <p>The doctor name will automatically be filled.</p>
                </div>
                <form>
                    <div className='formField'>
                        <label htmlFor="name"></label>
                        <input type="text" name="textfield" id="textfield" placeholder="type your contact message here" />
                    </div>
                </form>
                <button className="saveBtn" type="submit">Save</button>
            </div>
            <div className="csTContainer">
                <div className="selected">
                    <p>You selected X therapists</p>
                </div>
                <div className="contacted">
                    <p>You contacted X therapists</p>
                </div>
            </div>
        </div>
    );
}

export default prefillForm;