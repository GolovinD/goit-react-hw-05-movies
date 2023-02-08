import { Outlet, NavLink } from "react-router-dom";

import css from "./SharedLayout.module.css"

const headerItems = [
    { to: "/", title: "Home" },
    { to: "/movies", title: "Movies" },
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
    <Outlet />   
    </>     
    )
}

export default SharedLayout;

//  <header className={css.header}>
//       <nav>
//         <NavLink to="/" className={css.navLink}>Home</NavLink>
//         <NavLink to="/movies" className={css.navLink}>Movies</NavLink>
//       </nav>
//     </header>