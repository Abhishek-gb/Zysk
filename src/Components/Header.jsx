import React from "react";
import zysk from "./Images/zysk-logo.png";
import Dropdown from "./Images/Dropdown.png";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#" style={{ color: "#000" }}>
            <img
              src={zysk}
              alt="Boltshift Logo"
              style={{ width: "50px", height: "50px", objectFit: "contain" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "#000" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#000" }}
                >
                  Products
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#000" }}
                >
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "#000" }}>
                  Pricing
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <img
                src={Dropdown}
                alt="Candice Wu Avatar"
                className="rounded-circle"
                width="50"
                height="50"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
