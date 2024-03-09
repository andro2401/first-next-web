import React from 'react';
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({post}) => {
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
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <Link href={`/blog/${post.id}`} className="blog-link">READ MORE</Link>
            </div>
        </div>
    );
};

export default BlogCard;
