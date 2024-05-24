import "../App.css";

import { Outlet, NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <header>
        <nav className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/voting">Voting</NavLink>
          <NavLink to="/result">Result</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </nav>
      </header>
      <div>
        <h1> Page d' accueil</h1>

        <Outlet />
      </div>
    </>
  );
}
