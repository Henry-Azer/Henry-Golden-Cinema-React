import React from "react";

import logoName from "../../resources/images/Requirements-02.png";

import Typography from "@mui/material/Typography";

import {
    FaGithub,
    FaLinkedinIn,
    FaFacebookF,
    FaWhatsapp,
    FaEnvelopeOpenText,
    FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
    return (
        <section className="footer-section">
            <div className="footer-wrapper display-flex">
                <div className="social-wrapper display-flex flex-row">
                    <img src={logoName} alt="logo-name" />

                    <div className="social-container">
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
                                window.open("tel:+201207885279", "_blank")
                            }
                        />
                    </div>
                </div>

                <div className="policies-wrapper display-flex flex-row">
                    <Typography variant="h7" component="span">
                        About
                    </Typography>
                    <Typography variant="h7" component="span">
                        Terms & Conditions
                    </Typography>
                    <Typography variant="h7" component="span">
                        Privacy policy
                    </Typography>
                    <Typography variant="h7" component="span">
                        Cookies policy
                    </Typography>
                    <Typography variant="h7" component="span">
                        Copyrights
                    </Typography>
                </div>

                <div className="copyright-wrapper display-flex">
                    <Typography variant="h7" component="span">
                        Copyright ©2021 All rights reserved
                    </Typography>
                    <Typography variant="h7" component="span">
                        Developed by: Henry Azer | Designed by: Bavly Ashraf
                    </Typography>
                </div>
            </div>
        </section>
    );
};

export default Footer;
