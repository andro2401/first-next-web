import React from 'react';
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
    return (
        <div className="blog-card">
            <div className="top-part">
                <div className="img-wrap">
                    <Image
                        src="/noavatar.png"
                        alt="blog"
                        fill
                        className="card-image"
                    />
                </div>
                <time>Nov 04 2023</time>
            </div>
            <div className="text-part">
                <h2>title</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <Link href={`/blog`} className="blog-link">READ MORE</Link>
            </div>
        </div>
    );
};

export default BlogCard;
