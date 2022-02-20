import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { authenticateUser } from "../../store/actions";

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

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SubmitLoaderImgURL = "https://s10.gifyu.com/images/loadereaee97066b222624.gif";

// const SubmitSucceededImgURL =
//     "https://i.postimg.cc/jqm5G62G/88-886120-png-file-button-arrow-right-png-clipart-removebg-preview.png";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.authRequest);
    // const authenticatedUser = useSelector((state) => state.auth.authenticatedUser);
    const isUserAuthenticated = useSelector(
        (state) => state.auth.isUserAuthenticated
    );

    useEffect(() => {
        document.title = "Login | Henry Golden Cinema";

        console.log(isUserAuthenticated);

        if (isUserAuthenticated)
            navigate("/", {
                state: {
                    elementScroll: "home-scroll",
                },
            });
    });

    return (
        <section className="login-route">
            <div className="reg-log-wrapper display-flex">
                <Box
                    className="logo-wrapper display-flex flex-row"
                    onClick={() =>
                        navigate("/", {
                            state: {
                                elementScroll: "home-scroll",
                            },
                        })
                    }
                >
                    <img src={logoImg} className="logo-img" alt="logo-img" />
                    <img src={logoName} className="logo-name" alt="logo-name" />
                </Box>

                <Typography
                    className="reg-log-header"
                    variant="h3"
                    component="div"
                >
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
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        dispatch(authenticateUser(values));

                        setTimeout(() => {
                            setSubmitting(false);
                            resetForm();
                        }, 2000);
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
                        <form onSubmit={handleSubmit} className="form-1">
                            <div className="form-wrapper display-flex">
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
                                    {errors.email &&
                                        touched.email &&
                                        errors.email}
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
                            </div>

                            <div className="form-submission display-flex">
                                {loading ? (
                                    <img
                                        className="result-img"
                                        src={SubmitLoaderImgURL}
                                        alt="saving-account"
                                    />
                                ) : null}

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
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Log In
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>

                <div className="login-contact-us display-flex">
                    <Typography variant="h7" component="div">
                        <b>Contact us in</b>
                    </Typography>

                    <div className="social-container">
                        <Button
                            className="social-btn"
                            onClick={() =>
                                window.open(
                                    "https://github.com/Henry-Azer",
                                    "_blank"
                                )
                            }
                        >
                            <FaGithub className="social-icon" />
                        </Button>
                        <Button
                            className="social-btn"
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/in/henry-azer-1220121a7",
                                    "_blank"
                                )
                            }
                        >
                            <FaLinkedinIn className="social-icon" />
                        </Button>
                        <Button
                            className="social-btn"
                            onClick={() =>
                                window.open(
                                    "https://www.facebook.com/HeNaRyAzEr",
                                    "_blank"
                                )
                            }
                        >
                            <FaFacebookF className="social-icon" />
                        </Button>
                    </div>
                </div>

                <div className="reg-log-navigation">
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
