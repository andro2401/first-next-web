//TEMPORARY DATA
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
]
const posts = [
    {
        id:1,
        title: 'Post 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi atque doloremque esse eum, ipsum, iste maiores molestiae nemo nisi placeat quasi quibusdam similique tempore ullam voluptates! Alias dignissimos est eum eveniet id illum necessitatibus perspiciatis rerum? Animi, aspernatur eligendi eos harum nemo nobis perferendis porro qui quos totam.',
        userId: 1
    },
    {
        id:2,
        title: 'Post 2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi atque doloremque esse eum, ipsum, iste maiores molestiae nemo nisi placeat quasi quibusdam similique tempore ullam voluptates! Alias dignissimos est eum eveniet id illum necessitatibus perspiciatis rerum?',
        userId: 2
    },
    {
        id:3,
        title: 'Post 3',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi atque doloremque esse eum, ipsum, iste maiores molestiae nemo nisi placeat quasi quibusdam similique tempore ullam voluptates!',
        userId: 3
    },
    {
        id:4,
        title: 'Post 4',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi atque doloremque esse eum, ipsum, iste maiores molestiae nemo nisi placeat quasi quibusdam similique tempore ullam voluptates! Alias dignissimos est eum eveniet id illum necessitatibus perspiciatis rerum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi atque doloremque esse eum, ipsum, iste maiores molestiae nemo nisi placeat quasi quibusdam similique tempore ullam voluptates! Alias dignissimos est eum eveniet id illum necessitatibus perspiciatis rerum?',
        userId: 4
    },
]
export const getPosts = () => {
    return posts;
}

export const getPost = (id) => {
    return posts.find((post) => post.id === parseInt(id));
}

export const getUser = (id) => {
    return users.find((user)=> user.id === parseInt(id));
}
