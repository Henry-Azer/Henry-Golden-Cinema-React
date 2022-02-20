import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { submitMessage } from "../store/actions";

import Header from "./global/header";
import Footer from "./global/footer";
import ChatBot from "./global/chatbot";
import { RequestLoader, RequestSucceeded } from "./global/form-loader";

import HenryImg from "../resources/images/Requirements-09.jpg";
import BavlyImg from "../resources/images/Requirements-08.jpg";

import {
    FaGithub,
    FaPhoneAlt,
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaCaretRight,
    FaLinkedinIn,
    FaEnvelopeOpenText,
} from "react-icons/fa";

import { Formik } from "formik";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const AboutUs = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const locationState = location.state;

    const reviewRequest = useSelector((state) => state.reviews.reviewRequest);
    const reviewSucceeded = useSelector(
        (state) => state.reviews.reviewSucceeded
    );

    useEffect(() => {
        document.title = "About Us | Henry Golden Cinema";

        if (locationState !== null)
            document
                .getElementById(locationState.elementScroll)
                .scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
    }, [locationState]);

    return (
        <section className="about-us-route">
            <Header />
            <ChatBot />
            <div className="about-us-wrapper content-fit">
                <div
                    className="heading-wrapper display-flex flex-row"
                    id="about-us-scroll"
                >
                    <FaCaretRight className="heading-icon" />
                    <Typography
                        className="heading-title"
                        variant="h4"
                        component="div"
                    >
                        Contact us
                    </Typography>
                </div>

                <div className="contact-container">
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            subject: "",
                            message: "",
                        }}
                        validate={(values) => {
                            const errors = {};

                            // Name Validation
                            if (!values.name) errors.name = "Required";

                            // Subject Validation
                            if (!values.subject) errors.subject = "Required";

                            // Message Validation
                            if (!values.message) errors.message = "Required";

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

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            dispatch(submitMessage(values));

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
                                <div className="form-wrapper display-flex flex-row">
                                    <div className="form-data display-flex">
                                        <input
                                            placeholder="Name"
                                            autoComplete="off"
                                            type="text"
                                            name="name"
                                            required
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                        <span>
                                            {errors.name &&
                                                touched.name &&
                                                errors.name}
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
                                            {errors.email &&
                                                touched.email &&
                                                errors.email}
                                        </span>

                                        <input
                                            placeholder="Subject"
                                            autoComplete="off"
                                            type="text"
                                            name="subject"
                                            required
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.subject}
                                        />
                                        <span>
                                            {errors.subject &&
                                                touched.subject &&
                                                errors.subject}
                                        </span>
                                    </div>

                                    <div className="form-message display-flex">
                                        <textarea
                                            placeholder="Message"
                                            autoComplete="off"
                                            type="text"
                                            name="message"
                                            required
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.message}
                                        />
                                        <span>
                                            {errors.message &&
                                                touched.message &&
                                                errors.message}
                                        </span>
                                    </div>
                                </div>

                                <div className="form-submission display-flex">
                                    {reviewRequest ? <RequestLoader /> : null}

                                    {reviewSucceeded &&
                                    reviewRequest === false ? (
                                        <RequestSucceeded />
                                    ) : null}

                                    <button
                                        className="btn-1"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
                <div className="heading-wrapper display-flex flex-row">
                    <FaCaretRight className="heading-icon" />
                    <Typography
                        className="heading-title"
                        variant="h4"
                        component="div"
                    >
                        About us
                    </Typography>
                </div>

                <div className="profiles-container display-flex">
                    <Card
                        className="profile display-flex flex-row"
                        id="henry-profile"
                    >
                        <CardContent>
                            <img
                                src={HenryImg}
                                className="profile-img"
                                alt="henry-azer"
                            />
                        </CardContent>
                        <CardContent className="profile-content">
                            <Typography variant="h5" component="div">
                                Henry Azer
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                gutterBottom
                            >
                                Full Stack Spring/React Developer
                            </Typography>
                            <Typography
                                variant="h7"
                                component="div"
                                gutterBottom
                            >
                                Skilled Full Stack Java/React Developer, 3+
                                years of self-studying. Quick learner, working
                                hard as self-teaching and looking forward to
                                keeping pace with the times.
                            </Typography>
                            <CardActions>
                                <div className="social-container display-flex flex-row">
                                    <FaFacebookF
                                        className="social-icon"
                                        onClick={() =>
                                            window.open(
                                                "https://www.facebook.com/HeNaRyAzEr",
                                                "_blank"
                                            )
                                        }
                                    />
                                    <FaWhatsapp
                                        className="social-icon"
                                        onClick={() =>
                                            window.open(
                                                "https://wa.me/201207885279",
                                                "_blank"
                                            )
                                        }
                                    />
                                    <FaGithub
                                        className="social-icon"
                                        onClick={() =>
                                            window.open(
                                                "https://github.com/Henry-Azer",
                                                "_blank"
                                            )
                                        }
                                    />
                                    <FaLinkedinIn
                                        className="social-icon"
                                        onClick={() =>
                                            window.open(
                                                "https://www.linkedin.com/in/henry-azer-1220121a7",
                                                "_blank"
                                            )
                                        }
                                    />
                                    <FaEnvelopeOpenText
                                        className="social-icon"
                                        onClick={() =>
                                            window.open(
                                                "mailto:henryazer@outlook.com",
                                                "_blank"
                                            )
                                        }
                                    />
                                    <FaPhoneAlt
                                        className="social-icon"
                                        onClick={() =>
                                            window.open(
                                                "tel:+201207885279",
                                                "_blank"
                                            )
                                        }
                                    />
                                </div>
                            </CardActions>
                        </CardContent>
                    </Card>
                    <Card
                        className="profile display-flex flex-row"
                        id="bavly-profile"
                    >
                        <CardContent>
                            <img
                                src={BavlyImg}
                                className="profile-img"
                                alt="henry-azer"
                            />
                        </CardContent>
                        <CardContent className="profile-content">
                            <Typography variant="h5" component="div">
                                Bavly Ashraf
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                gutterBottom
                            >
                                Web Developer & UI Designer
                            </Typography>
                            <Typography
                                variant="h7"
                                component="div"
                                gutterBottom
                            >
                                Skilled Full Stack Java/React Developer, 3+
                                years of self-studying. Quick learner, working
                                hard as self-teaching and looking forward to
                                keeping pace with the times.
                            </Typography>
                            <CardActions>
                                <div className="social-container display-flex flex-row">
                                    <FaFacebookF
                                        className="social-icon"
                                        onClick={() =>
                                            window.open(
                                                "https://www.facebook.com/bavly.ashraf.7",
                                                "_blank"
                                            )
                                        }
                                    />
                                    <FaWhatsapp
                                        className="social-icon"
                                        onClick={() =>
                                            window.open(
                                                "https://wa.me/201271931937",
                                                "_blank"
                                            )
                                        }
                                    />
                                    <FaGithub
                                        className="social-icon"
                                        onClick={() =>
                                            window.open(
                                                "https://github.com/Bavly001",
                                                "_blank"
                                            )
                                        }
                                    />
                                    <FaInstagram
                                        className="social-icon"
                                        onClick={() =>
                                            window.open(
                                                "https://www.instagram.com/a.bavly",
                                                "_blank"
                                            )
                                        }
                                    />
                                    <FaEnvelopeOpenText
                                        className="social-icon"
                                        onClick={() =>
                                            window.open(
                                                "mailto:220190354@fa-hists.edu.eg",
                                                "_blank"
                                            )
                                        }
                                    />
                                    <FaPhoneAlt
                                        className="social-icon"
                                        onClick={() =>
                                            window.open(
                                                "tel:+201271931937",
                                                "_blank"
                                            )
                                        }
                                    />
                                </div>
                            </CardActions>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default AboutUs;
