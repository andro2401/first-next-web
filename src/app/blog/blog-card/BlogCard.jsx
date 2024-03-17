import React from 'react';
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({post}) => {
    return (
        <div className="blog-card">
            <div className="top-part">
                {
                    post.img ? (
                        <div className="img-wrap">
                            <Image
                                src={post.img}
                                alt="blog"
                                fill
                                className="card-image"
                            />
                        </div>
                    ) : (
                        <div className="img-wrap">
                            <Image
                                src="/apstract.jpg"
                                alt="blog"
                                fill
                                className="card-image"
                            />
                        </div>
                    )
                }
                <time>Nov 04 2023</time>
            </div>
            <div className="text-part">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="blog-link">READ MORE</Link>
            </div>
        </div>
    );
};

export default BlogCard;
