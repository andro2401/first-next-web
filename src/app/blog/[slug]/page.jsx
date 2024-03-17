import React, {Suspense} from 'react';
import Image from "next/image";
import PostUser from "@/components/postUser/PostUser";
import {getPost} from "@/components/lib/data";


// TODO Fetch data with an API
// const getData = async (slug) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//     if (!response.ok){
//         throw new Error("Something went wrong");
//     }
//     return response.json();
// }

const Singleblog = async ({params}) => {
    const {slug} = params;

    // TODO get data that is fetched
    // const post = await getData(slug);

    const post = await getPost(slug);
    return (
        <div className="blog-preview">
            {post.img && <div className="img-wrap">
                <Image src={post.img}
                       alt="blog preview picture"
                       fill
                />
            </div>}
            <div className="text-wrap">
                <h1>{post?.title}</h1>
                <div className="blog-details">

                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser userId={post.userId}/>
                        </Suspense>
                    )}
                    <div className="published-wrap">
                        <span>Published</span>
                        <p>{post.createdAt.toString().slice(4,16)}</p>
                    </div>
                </div>
                <p>{post?.body}</p>
            </div>
        </div>
    );
};

export default Singleblog;
