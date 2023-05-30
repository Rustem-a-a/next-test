"use client"
import React from 'react';

const ErrorWrapper = ({error}:{error:Error}) => {
    return (
        <h1>
            Error is {error.message}
        </h1>
    );
};

export default ErrorWrapper;
