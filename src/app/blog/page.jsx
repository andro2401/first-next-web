import React from 'react';
import BlogCard from "@/app/blog/blog-card/BlogCard";

const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate: 3600}});
    if (!response.ok){
        throw new Error("Something went wrong");
    }
    return response.json();
}

const Blog = async () => {
    const posts = await getData();

    return (
        <div className="blog-page">
            {posts.map((post) =>(
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Blog;
