import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AOS from "aos";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Divide as Hamburger } from "hamburger-react";

import logoName from "../../resources/images/Requirements-02.png";
import logoImg from "../../resources/images/Requirements-03.png";

const Header = () => {
    const [isHamburgerOpen, setHamburgerOpen] = useState(false);

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        AOS.init();
    });

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleHamburger = (toggled) => {
        var header = document.getElementById("header-section");
        var user = document.getElementById("user-wrapper");
        var routes = document.getElementById("routes-wrapper");

        if (toggled) {
            header.classList.add("header-toggle");
            user.classList.add("user-wrapper-toggle");
            routes.classList.add("routes-wrapper-toggle");
        } else {
            header.classList.remove("header-toggle");
            user.classList.remove("user-wrapper-toggle");
            routes.classList.remove("routes-wrapper-toggle");
        }
    };

    return (
        <section className="header-section" id="header-section">
            <Hamburger
                size={28}
                toggled={isHamburgerOpen}
                toggle={setHamburgerOpen}
                onToggle={toggleHamburger}
            />

            <div className="header-wrapper display-flex flex-row">
                <Box
                    className="logo-wrapper display-flex flex-row"
                    onClick={() => navigate("/")}
                >
                    <img src={logoImg} className="logo-img" alt="logo-img" />
                    <img src={logoName} className="logo-name" alt="logo-name" />
                </Box>

                <div
                    className="routes-wrapper display-flex flex-row"
                    id="routes-wrapper"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos="fade-up"
                >
                    <Typography
                        variant="h6"
                        component="span"
                        onClick={() => navigate("/movies")}
                    >
                        Movies
                    </Typography>
                    <Typography
                        variant="h6"
                        component="span"
                        onClick={() => navigate("/bookings")}
                    >
                        Bookings
                    </Typography>
                    <Typography
                        variant="h6"
                        component="span"
                        onClick={() => navigate("/about-us")}
                    >
                        About us
                    </Typography>
                </div>

                <div
                    className="user-wrapper display-flex flex-row"
                    id="user-wrapper"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos="fade-up"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/848/848006.png"
                        alt="user-icon"
                    />

                    <Typography
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        variant="h6"
                        component="span"
                    >
                        Welcome, Guest!
                    </Typography>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        <MenuItem onClick={() => navigate("/login")}>
                            Log in
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/register")}>
                            Register
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </section>
    );
};

export default Header;
