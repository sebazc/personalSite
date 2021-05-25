import React from "react";
import Link from "next/link";
// import { Dropdown } from 'bootstrap';

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top px-5">
        <div className="container-fluid">
          <Link href="/" passHref>
            <a className="navbar-brand pb-2">sebazc</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sections
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link href="/science" passHref>
                      <a className="dropdown-item">Science</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/art" passHref>
                      <a className="dropdown-item">Art</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/programming" passHref>
                      <a className="dropdown-item">Programming</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/opinion" passHref>
                      <a className="dropdown-item">Opinion</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link href="/" passHref>
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" passHref>
                  <a className="nav-link">About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
