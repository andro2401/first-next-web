import React from 'react';
import BlogCard from "@/app/blog/blog-card/BlogCard";
import {getPosts} from "@/lib/data";


// TODO Fetch data with an API
// const getData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate: 3600}});
//     if (!response.ok){
//         throw new Error("Something went wrong");
//     }
//     return response.json();
// }

export const metadata = {
    title: 'Blog list',
    description: 'this is a list of all the blogs',
}

const Blog = async () => {
    // TODO get data that is fetched
    // const posts = await getData();

    //FETCHING DATA WITHOUT AN API
    const posts = await getPosts();
    console.log(posts)
    return (
        <div className="blog-page">
            {posts.map((post) =>(
                <BlogCard key={post.slug} post={post} />
            ))}
        </div>
    );
};

export default Blog;
