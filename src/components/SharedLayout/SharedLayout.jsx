import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";

import css from "./SharedLayout.module.css"

const headerItems = [
    { to: "/", title: "Home" },
    { to: "movies", title: "Movies" },
];

function SharedLayout() {
    return (
        <>   
        <header>
            <nav>
                <ul>
                    {headerItems.map((headerItem) => (
                    <li
                        key={headerItem.title}
                        >
                            <NavLink
                            className={({ isActiv }) => (isActiv ? css.nav_activ: null)}
                            to={headerItem.to}
                            >{headerItem.title}
                        </NavLink> 
                    </li>
                    ))}
                </ul>
            </nav>
        </header>  
        <Suspense fallback={<div>Loading...</div>}>
            <main className={css.main}>
                <Outlet />
            </main>
        </Suspense>   
        </>     
    )
}

export default SharedLayout;