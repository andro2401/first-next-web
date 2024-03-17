import React from 'react';
import {getUser} from "@/components/lib/data";
import Image from "next/image";

// TODO GET DATA WITH AN API
// const getData = async (userId) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store"});
//     if (!response.ok){
//         throw new Error("Something went wrong");
//     }
//     return response.json();
// }
const PostUser = async ({userId}) => {
    // TODO get data that is fetched
    // const user = await getData(userId);

    // TODO GET datawithout an API
    const user = await getUser(userId);
    return (
        <>
            <div className="avatar-img">
                <Image src={user.img ? user.img : "/noavatar.png"}
                       alt="blog preview picture"
                       fill
                />
            </div>
            <div className="author-wrap">
                <span>Author</span>
                <p>{user.username}</p>
            </div>
        </>
)
    ;
};

export default PostUser;
