import React, {useState} from 'react';
import SignUpForm from './SignUpForm';
import SignUpFormSuccess from './SignUpFormSuccess';

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    
    const submitForm = () =>{
        setFormIsSubmitted(true);
    };
    return(
        !(formIsSubmitted) ? <SignUpForm submitForm={submitForm}/> : <SignUpFormSuccess/>
    );
};

export default Form;