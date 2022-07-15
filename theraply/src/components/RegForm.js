import React, { useState } from 'react';
import './RegForm.css';
import SignUpForm from './SignUpForm';
import SignUpFormSuccess from './SignUpFormSuccess';

const RegForm = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    };
    return (
        <div>
            {!formIsSubmitted ? (
                <SignUpForm submitForm={submitForm} />
            ) : (
                <SignUpFormSuccess />
            )}
        </div>
    );
};

export default RegForm;