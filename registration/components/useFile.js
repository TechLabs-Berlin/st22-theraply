import React, { useEffect, useState } from "react";
import useFile from "./useFile";

const SignUpForm = ({submitForm}) => {

const {handleChange, handleFormSubmit, values, errors} = useFile(
    submitForm
);

    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Registration</h2>
                </div>
                <form className="form-wrapper">

                    <div className="name">
                        <label className="label">
                            First Name
                        </label>
                        <input
                            className="input"
                            type="text"
                            name="firstname"
                            value={values.firstname}
                            onChange={handleChange}
                        />
                        {errors.firstname && <p className="error">{errors.firstname}</p>}
                    </div>

                    <div className="name">
                        <label className="label">
                            Last Name
                        </label>
                        <input
                            className="input"
                            type="text"
                            name="lastname"
                            value={values.lastname}
                            onChange={handleChange}
                        />
                        {errors.lastname && <p className="error">{errors.lastname}</p>}
                    </div>

                    <div className="telephone">
                        <label className="label">
                            Telephone Number (optional)
                        </label>
                        <input
                            className="input"
                            type="text"
                            name="telephone"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mail">
                        <label className="label">
                            Email address
                        </label>
                        <input
                            className="input"
                            type="text"
                            name="mail"
                            value={values.mail}
                            onChange={handleChange}
                        />
                        {errors.mail && <p className="error">{errors.mail}</p>}
                    </div>

                    <div className="password">
                        <label className="label">
                            Create password
                        </label>
                        <input
                            className="input"
                            type="text"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>

                    <div className="password">
                        <label className="label">
                            Repeat Password
                        </label>
                        <input
                            className="input"
                            type="text"
                            name="repeat"
                            value={values.repeat}
                            onChange={handleChange}
                        />
                        {errors.repeat && <p className="error">{errors.repeat}</p>}
                    </div>

                    <div>
                        <button className="register" omClick={handleFormSubmit}>
                            Register
                        </button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default useFile;