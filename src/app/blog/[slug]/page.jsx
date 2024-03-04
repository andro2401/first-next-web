import React from 'react';
import Image from "next/image";

const Singleblog = ({params}) => {
    return (
        <div className="blog-preview">
            <div className="img-wrap">
                <Image src="/apstract.jpg"
                       alt="blog preview picture"
                       fill
                />
            </div>
            <div className="text-wrap">
                <h1>Title of the single blog post preview</h1>
                <div className="blog-details">
                    <div className="avatar-img">
                        <Image src="/noavatar.png"
                               alt="blog preview picture"
                               fill
                        />
                    </div>
                    <div className="author-wrap">
                        <span>Author</span>
                        <p>Terry Hefferson</p>
                    </div>
                    <div className="published-wrap">
                        <span>Published</span>
                        <p>-11-04T09:30</p>
                    </div>
                </div>
                <p>Desc</p>
            </div>
        </div>
    );
};

export default Singleblog;
