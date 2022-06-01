import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { NavbarBrand } from "./styledComponent";
import { useKeycloak } from "@react-keycloak/web";
import CartIcon from "../CartIcon";
const Navbar = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        {" "}
        <NavbarBrand src={"/lo.webp"} alt="Logo"></NavbarBrand>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/list">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <CartIcon />
          </li>
          <li className="nav-item dropdown">
            {keycloak.authenticated && (
              <button
                className="btn btn-outline-none my-2 my-sm-0"
                type="button"
                onClick={() => keycloak.logout()}
              >
                Logout
              </button>
            )}
          </li>
          <li className="nav-item dropdown">
            <button className="btn btn-outline-none my-2 my-sm-0" type="submit">
              {keycloak.tokenParsed?.name}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
