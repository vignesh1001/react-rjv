import React from "react";
import { Link } from "@reach/router";
import style from "./MainNav.module.css";

const baseUrl = `${process.env.PUBLIC_URL || ""}`;

const routes = [
  { to: `${baseUrl}/`, label: "Home" },
  { to: `${baseUrl}/accounts`, label: "Accounts" },
  { to: `${baseUrl}/transactions`, label: "Transactions" },
  { to: `${baseUrl}/reports`, label: "Reports" },
  { to: `${baseUrl}/file-cabinet`, label: "File Cabinet" },
  { to: `${baseUrl}/administration`, label: "Administration" }
];

const MainNav = props => {
  const activeClass = window.location.pathname.toUpperCase();
  return (
    <nav className={style.MainNav} aria-label={props.title}>
      <ul className={style.MainNavList}>
        {routes.map(({ to, label }, key) => (
          <li key={key} className={style.MainNavItem}>
            <Link
              className={
                activeClass === to.toUpperCase()
                  ? style.ActiveMainNavLink
                  : style.MainNavLink
              }
              key={key}
              to={to}
              onClick={props.handleMainMenuClick}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

MainNav.defaultProps = {
  title: "site"
};

export default MainNav;
