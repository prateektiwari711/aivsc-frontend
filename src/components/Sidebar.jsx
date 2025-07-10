import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{
        width: "280px",
        height: "100vh",
        backgroundImage: "linear-gradient(to bottom, #00b4db, #0083b0)",
      }}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <span className="fs-4 fw-bold text-white">AIVSC Journey</span>
      </Link>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto color-white">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active text-warning" : "text-white"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin-login"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active text-warning" : "text-white"}`
            }
          >
            Admin Panel
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/developer"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active text-warning" : "text-white"}`
            }
          >
            Developer
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
