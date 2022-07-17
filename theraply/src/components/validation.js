import React from 'react';

const validation = (values) => {

    let errors = {};

    if (!values.fullname) {
        errors.firstname = "Full Name is required."
    };
    if (!values.email) {
        errors.email = "Email address is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid."
    };
    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 5) {
        errors.password = "Password must be more than five characters."
    };

    if (!values.repeat) {
        errors.repeat = "Repeat password is required."
    };

    return errors
};

export default validation;