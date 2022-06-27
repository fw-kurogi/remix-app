import {Link, Outlet} from "@remix-run/react";

const Dashboard = () => {
    return (
        <div>
            <header></header>
            <main>
                <section>
                    <Outlet/>
                </section>
            </main>
            <footer>
                <div>
                    React Remix
                </div>
            </footer>
        </div>
    );
}

export default Dashboard;
