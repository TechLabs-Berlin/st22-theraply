import React from "react";


const validation = (values) =>{

    let errors={};
    
    if(!values.firstname){
        errors.firstname="First name is required"
    };
    if(!values.lastname){
        errors.lastname="Last name is required"
    };
    if(!values.mail){
        errors.mail="Email address is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.mail="Email is invalid"
    };
    if(!values.password){
        errors.password="Password is required"
    } else if(values.password.length < 5){
        errors.password="Password must be more than five characters"
    };

    if(!values.repeat){
        errors.repeat="Repeat password is required"
    };

    return errors
};

export default validation;