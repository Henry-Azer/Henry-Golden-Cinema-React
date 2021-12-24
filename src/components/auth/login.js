import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Formik } from "formik";

import logoName from "../../resources/images/Requirements-02.png";
import logoImg from "../../resources/images/Requirements-03.png";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();

    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    useEffect(() => {
        document.title = "Login | Henry Golden Cinema";
    });

    return (
        <section className="login-route">
            <div className="reg-log-wrapper display-flex">
                <Box
                    className="logo-wrapper display-flex flex-row"
                    onClick={() => navigate("/")}
                >
                    <img src={logoImg} className="logo-img" alt="logo-img" />
                    <img src={logoName} className="logo-name" alt="logo-name" />
                </Box>

                <Typography variant="h3" component="div">
                    <b>Log In</b>
                </Typography>

                <Formik
                    initialValues={{ email: "", password: "" }}
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

                            <div className="keep-logged display-flex flex-row">
                                <Checkbox {...label} />
                                <Typography
                                    variant="h7"
                                    gutterBottom
                                    component="span"
                                >
                                    <b>Keep me Logged in</b>
                                </Typography>
                            </div>

                            <button
                                className="btn-1"
                                href="underDev.com"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Log In
                            </button>
                        </form>
                    )}
                </Formik>

                <div className="login-contact-us display-flex">
                    <Typography variant="h7" component="div">
                        <b>Contact us in</b>
                    </Typography>

                    <div className="social-container">
                        <Button className="social-btn">
                            <FaGithub
                                className="social-icon"
                                onClick={() =>
                                    window.open(
                                        "https://github.com/Henry-Azer",
                                        "_blank"
                                    )
                                }
                            />
                        </Button>
                        <Button className="social-btn">
                            <FaLinkedinIn
                                className="social-icon"
                                onClick={() =>
                                    window.open(
                                        "https://www.linkedin.com/in/henry-azer-1220121a7",
                                        "_blank"
                                    )
                                }
                            />
                        </Button>
                        <Button className="social-btn">
                            <FaFacebookF
                                className="social-icon"
                                onClick={() =>
                                    window.open(
                                        "https://www.facebook.com/HeNaRyAzEr",
                                        "_blank"
                                    )
                                }
                            />
                        </Button>
                    </div>
                </div>

                <div className="reg-login-link">
                    <Typography variant="h7" component="div">
                        <b>Don't have account?</b>
                    </Typography>
                    <button
                        className="btn-1"
                        onClick={() => navigate("/register")}
                    >
                        Join us now!
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Login;
