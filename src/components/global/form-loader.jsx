import React from "react";

const SubmitLoaderImgURL =
    "https://s10.gifyu.com/images/loadereaee97066b222624.gif";

const SubmitSucceededImgURL =
    "https://i.postimg.cc/jqm5G62G/88-886120-png-file-button-arrow-right-png-clipart-removebg-preview.png";

export const RequestLoader = () => {
    return (
        <img
            className="process-img"
            src={SubmitLoaderImgURL}
            alt="loading-process"
        />
    );
};

export const RequestSucceeded = () => {
    return (
        <img
            className="process-img"
            src={SubmitSucceededImgURL}
            alt="succeeded-process"
        />
    );
};