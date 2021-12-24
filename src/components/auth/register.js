import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Formik } from "formik";

import logoName from "../../resources/images/Requirements-02.png";
import logoImg from "../../resources/images/Requirements-03.png";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Register = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Register | Henry Golden Cinema";
    });

    return (
        <section className="register-route">
            <div className="reg-log-wrapper display-flex">
                <Box
                    className="home-link display-flex flex-row"
                    onClick={() => navigate("/")}
                >
                    <img src={logoImg} className="logo-img" alt="logo-img" />
                    <img src={logoName} className="logo-name" alt="logo-name" />
                </Box>

                <Typography variant="h3" component="div">
                    <b>Register</b>
                </Typography>

                <Formik
                    initialValues={{
                        email: "",
                        username: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validate={(values) => {
                        const errors = {};

                        // Email Validation
                        if (!values.email) {
                            errors.email = "Required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = "Invalid email address.";
                        }

                        // Username Validation
                        const usernameRegex = /^[a-zA-Z0-9]+$/;
                        if (!values.username) {
                            errors.username = "Required";
                        } else if (usernameRegex.test(values.username)) {
                            errors.username = "Invalid username.";
                        }

                        // Password Validation
                        const passwordRegex = /(?=.*[0-9])/;
                        if (!values.password) {
                            errors.password = "Required";
                        } else if (values.password.length < 8) {
                            errors.password =
                                "Password must be 8 characters long.";
                        } else if (!passwordRegex.test(values.password)) {
                            errors.password =
                                "Password Must contain one number.";
                        }

                        // Confirm Password Validation
                        if (values.password && values.confirmPassword) {
                            if (values.password !== values.confirmPassword) {
                                errors.confirmPassword =
                                    "Password not matched.";
                            }
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form
                            onSubmit={handleSubmit}
                            className="reg-log-form display-flex"
                        >
                            <input
                                placeholder="Username"
                                autoComplete="off"
                                type="text"
                                name="username"
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                            />
                            <span>
                                {errors.username &&
                                    touched.username &&
                                    errors.username}
                            </span>

                            <input
                                placeholder="Email"
                                autoComplete="off"
                                type="text"
                                name="email"
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <span>
                                {errors.email && touched.email && errors.email}
                            </span>

                            <input
                                placeholder="Password"
                                autoComplete="off"
                                name="password"
                                required
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <span>
                                {errors.password &&
                                    touched.password &&
                                    errors.password}
                            </span>

                            <input
                                placeholder="Confirm Password"
                                autoComplete="off"
                                name="confirmPassword"
                                required
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                            />
                            <span>
                                {errors.confirmPassword &&
                                    touched.confirmPassword &&
                                    errors.confirmPassword}
                            </span>

                            <button
                                className="btn-1"
                                href="underDev.com"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Register
                            </button>
                        </form>
                    )}
                </Formik>

                <div className="reg-login-link">
                    <Typography variant="h7" component="div">
                        <b>Have account?</b>
                    </Typography>
                    <button
                        className="btn-1"
                        onClick={() => navigate("/login")}
                    >
                        Log in now!
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Register;
