export type Post = {
    id: number;
    title: string;
};

const example = [
    {
        id: 1,
        title: "My First Post",
    },
    {
        id: 2,
        title: "A Mixtape I Made Just For You",
    },
]

export const getPosts = async ():Promise<Array<Post>> => {
    return example
}

export const getPost = async (id: number) => {
    return example.find(element => element.id === id)
}

