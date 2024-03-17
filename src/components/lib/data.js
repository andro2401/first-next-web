import {Post, User} from "@/components/lib/models";
import {connectToDb} from "@/components/lib/utils";
import {unstable_noStore} from "next/cache";

//TEMPORARY DATA
// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Jane'},
// ]
// const posts = [
//     {
//         id:1,
//         title: 'Post 1',
//         body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi atque doloremque esse eum, ipsum, iste maiores molestiae nemo nisi placeat quasi quibusdam similique tempore ullam voluptates! Alias dignissimos est eum eveniet id illum necessitatibus perspiciatis rerum? Animi, aspernatur eligendi eos harum nemo nobis perferendis porro qui quos totam.',
//         userId: 1
//     },
//     {
//         id:2,
//         title: 'Post 2',
//         body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi atque doloremque esse eum, ipsum, iste maiores molestiae nemo nisi placeat quasi quibusdam similique tempore ullam voluptates! Alias dignissimos est eum eveniet id illum necessitatibus perspiciatis rerum?',
//         userId: 2
//     },
//     {
//         id:3,
//         title: 'Post 3',
//         body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi atque doloremque esse eum, ipsum, iste maiores molestiae nemo nisi placeat quasi quibusdam similique tempore ullam voluptates!',
//         userId: 3
//     },
//     {
//         id:4,
//         title: 'Post 4',
//         body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi atque doloremque esse eum, ipsum, iste maiores molestiae nemo nisi placeat quasi quibusdam similique tempore ullam voluptates! Alias dignissimos est eum eveniet id illum necessitatibus perspiciatis rerum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi atque doloremque esse eum, ipsum, iste maiores molestiae nemo nisi placeat quasi quibusdam similique tempore ullam voluptates! Alias dignissimos est eum eveniet id illum necessitatibus perspiciatis rerum?',
//         userId: 4
//     },
// ]


export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (e) {
        console.log(e);
        throw new Error("Failed to fetch Posts!");
    }
}

export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return post;
    } catch (e) {
        console.log(e);
        throw new Error("Failed to fetch Post!");
    }
}

export const getUser = async (id) => {
    unstable_noStore();
    try {
        connectToDb();
        const user = await User.findById({id});
        return user;
    } catch (e) {
        console.log(e);
        throw new Error("Failed to fetch User!");
    }
}

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (e) {
        console.log(e);
        throw new Error("Failed to fetch Users!");
    }
}
