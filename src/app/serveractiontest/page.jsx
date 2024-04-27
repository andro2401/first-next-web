import React from 'react';
import {addPost} from "@/lib/action";

const ServerAction = () => {
    return (
        <div>
            <form action={addPost}>
                <input type="text" name="title" placeholder="title"/>
                <input type="text" name="desc" placeholder="desc"/>
                <input type="text" name="slug" placeholder="slug"/>
                <input type="text" name="userId" placeholder="userId"/>
                <button>Create</button>
            </form>
        </div>
    );
};
export default ServerAction;