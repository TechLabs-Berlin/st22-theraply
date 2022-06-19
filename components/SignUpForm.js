import React, { useEffect, useState } from "react";
import validation from "./validation";

const SignUpForm = ({ submitForm }) => {

    const useFile = (submitForm) => {

    };

    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        mail: "",
        password: "",
        repeat: ","
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        };
    }, [errors]);

    return (
        <div className="container">

            <form className="form-wrapper">
                <button className="login" >Login</button>
                <button className="registration">Registration</button>

                <div className="name">
                    <input
                        className="input"
                        type="text"
                        name="firstname"
                        value={values.firstname}
                        onChange={handleChange}
                        id="firstname"
                        placeholder="First Name"
                    />
                    {errors.firstname && <p className="error">{errors.firstname}</p>}
                </div>

                <div className="name">
                    <input
                        className="input"
                        type="text"
                        name="lastname"
                        value={values.lastname}
                        onChange={handleChange}
                        id="lastname"
                        placeholder="Last Name"
                    />
                    {errors.lastname && <p className="error">{errors.lastname}</p>}
                </div>

                <div className="telephone">
                    <input
                        className="input"
                        type="text"
                        name="telephone"
                        onChange={handleChange}
                        id="telephone"
                        placeholder="Telephone (optional)"
                    />
                </div>

                <div className="mail">
                    <input
                        className="input"
                        type="text"
                        name="mail"
                        value={values.mail}
                        onChange={handleChange}
                        id="mail"
                        placeholder="E-Mail"
                    />
                    {errors.mail && <p className="error">{errors.mail}</p>}
                </div>

                <div className="password">
                    <input
                        className="input"
                        type="text"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        id="password"
                        placeholder="Password"
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <div className="repeat">
                    <input
                        className="input"
                        type="text"
                        name="repeat"
                        value={values.repeat}
                        onChange={handleChange}
                        id="repeat"
                        placeholder="Repeat Password"
                    />
                    {errors.repeat && <p className="error">{errors.repeat}</p>}
                </div>

                <div>
                    <button className="register" omClick={handleFormSubmit}>
                        <p className="registertext">Register</p>
                    </button>
                </div>

            </form>
        </div>


    );

    return { handleChange, handleFormSubmit, errors, values };
};

export default SignUpForm;