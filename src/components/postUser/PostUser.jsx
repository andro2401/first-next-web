import React from 'react';
const getData = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store"});
    if (!response.ok){
        throw new Error("Something went wrong");
    }
    return response.json();
}
const PostUser = async ({userId}) => {
    const user = await getData(userId);
    return (
        <div className="author-wrap">
            <span>Author</span>
            <p>{user.username}</p>
        </div>
    );
};

export default PostUser;
