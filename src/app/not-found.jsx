import React from 'react';
import Link from "next/link";

const NotFound = () => {
    return (
        <>
         <h1>404</h1>
         <h2>Page not found</h2>
            <p>Return to <Link href="/">Homepage</Link></p>
        </>
    );
};

export default NotFound;
