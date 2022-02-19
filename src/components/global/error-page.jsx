import React, { useEffect } from "react";

const ErrorPage = () => {
    useEffect(() => {
        document.title = "Error | Henry Golden Cinema";
    });
    return (
        <section className="error-section" id="error-scroll">
            Error
        </section>
    );
};

export default ErrorPage;
