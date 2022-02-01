import React, { useEffect } from "react";

const ErrorPage = () => {
    useEffect(() => {
        document.title = "Error | Henry Golden Cinema";
    });
    return <section className="error-section"></section>;
};

export default ErrorPage;
