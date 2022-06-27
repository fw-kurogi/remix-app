import {json, LoaderFunction, redirect} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {Post, getPost} from "~/models/post.server";

type LoaderData = { post: Post };

export const loader: LoaderFunction = async ({params}) => {
    if (!params?.post) {
        return redirect("dashboard");
    }
    const post = await getPost(Number(params.post));
    return json({ post: post });
};


const Post = () => {
    const { post } = useLoaderData() as LoaderData;
    return (
        <main>
            <h3>
                {post.title}
            </h3>
        </main>
    );
}

export default Post;
