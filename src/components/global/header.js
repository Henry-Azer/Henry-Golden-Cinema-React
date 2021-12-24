import React from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import logoName from "../../resources/images/Requirements-02.png";
import logoImg from "../../resources/images/Requirements-03.png";

const Header = () => {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <section className="header-section">
            <div className="header-wrapper display-flex flex-row">
                <Box
                    className="logo-wrapper display-flex flex-row"
                    onClick={() => navigate("/")}
                >
                    <img src={logoImg} className="logo-img" alt="logo-img" />
                    <img src={logoName} className="logo-name" alt="logo-name" />
                </Box>

                <div className="routes-wrapper display-flex flex-row">
                    <Typography
                        variant="h6"
                        component="span"
                        onClick={() => navigate("/chatbot")}
                    >
                        ChatBot
                    </Typography>
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

                <div className="user-wrapper display-flex flex-row">
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
                        <MenuItem onClick={handleClose}>Log in</MenuItem>
                        <MenuItem onClick={handleClose}>Register</MenuItem>
                    </Menu>
                </div>
            </div>
        </section>
    );
};

export default Header;
