import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3"
      style={{
        width: "280px",
        height: "100vh",
        backgroundColor: "#DDE6ED",
      }}
    >
      <span>
        <NavLink
          to="/"
          className="nav-link px-3 py-2"
          style={{ fontSize: "26px", fontWeight: "600" }}
        >
          AIVSC JOURNEY
        </NavLink>
      </span>
      <ul className="nav nav-pills flex-column mb-auto color-white">
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link px-3 py-2 rounded"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: "#27374D", color: "white" }
                : { color: "#27374D" }
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin-login"
            className="nav-link px-3 py-2 rounded"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: "#27374D", color: "white" }
                : { color: "#27374D" }
            }
          >
            Admin Panel
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/developer"
            className="nav-link px-3 py-2 rounded"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: "#27374D", color: "white" }
                : { color: "#27374D" }
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
