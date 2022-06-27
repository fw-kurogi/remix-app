import {json} from "@remix-run/node";
import {Link, useLoaderData} from "@remix-run/react";

import { Post, getPosts } from "~/models/post.server";

type LoaderData = {
    posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader = async () => {
    return json<LoaderData>({
        posts: await getPosts(),
    });
};

const Posts = () => {
    const { posts } = useLoaderData()  as LoaderData;
    return (
        <>
            <h2>Posts</h2>
            <ul>
                {posts.map((post: Post) => (
                    <li key={post.id}>
                        <Link
                            to={String(post.id)}
                            className="text-blue-600 underline"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Posts;
