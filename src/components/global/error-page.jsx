import React, { useEffect } from "react";

const ErrorPage = () => {
    useEffect(() => {
        document.title = "Error | Henry Golden Cinema";
    });
    return <section className="error-section">Error</section>;
};

export default ErrorPage;
