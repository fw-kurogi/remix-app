import {Link} from "@remix-run/react";

const Home = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="posts">Posts</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
