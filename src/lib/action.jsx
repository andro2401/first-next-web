export const addPost = async (formData) => {
    "use server"
    /*Moze se ispisati ovako*/
    // const title = formData.get("title");
    // const desc = formData.get("desc");
    // const slug = formData.get("slug");
    // const userId = formData.get("userId");
    /*A mozemo napisati i ovako*/
    const {title, desc, slug, userId} = Object.fromEntries(formData);



    console.log(title, desc , slug , userId);
}