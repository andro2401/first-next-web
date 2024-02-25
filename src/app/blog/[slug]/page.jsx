import React from 'react';

const Singleblog = ({params}) => {
    return (
        <div>
            This is a single blog page and this is the blog title: "{params.slug}"
        </div>
    );
};

export default Singleblog;
