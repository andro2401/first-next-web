import React from 'react';
import BlogCard from "@/app/blog/blog-card/BlogCard";
import {getPosts} from "@/components/lib/data";


// TODO Fetch data with an API
// const getData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate: 3600}});
//     if (!response.ok){
//         throw new Error("Something went wrong");
//     }
//     return response.json();
// }

const Blog = async () => {
    // TODO get data that is fetched
    // const posts = await getData();

    //FETCHING DATA WITHOUT AN API
    const posts = await getPosts();

    return (
        <div className="blog-page">
            {posts.map((post) =>(
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Blog;
