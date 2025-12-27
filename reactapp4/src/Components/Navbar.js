import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div class="container-fluid sticky-top bg-white shadow-sm">
        <div class="container">
          <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <Link to="/" class="navbar-brand">
              <h1 class="m-0 text-uppercase text-primary">
                <i class="fa fa-clinic-medical me-2"></i>Medinova
              </h1>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav ms-auto py-0">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active nav-item nav-link" : "nav-item nav-link")}
                >Home</NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active nav-item nav-link" : "nav-item nav-link")}
                >About</NavLink>
              
                 <div class="nav-item dropdown">
                  <Link
                    to="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                  Blog
                  </Link>
                  <div class="dropdown-menu m-0">
                     <NavLink
                  to="/blog"
                  className={({ isActive }) => (isActive ? "dropdown-item" : "dropdown-item")}
                >All Blog</NavLink>
                      <NavLink
                  to="/blog/new"
                  className={({ isActive }) => (isActive ? "dropdown-item" : "dropdown-item")}
                >New Blog</NavLink>
                  
                   
                  </div>
                </div>
                <div class="nav-item dropdown">
                  <Link
                    to="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </Link>
                  <div class="dropdown-menu m-0">
                    <Link to="blog.html" class="dropdown-item">
                      Blog Grid
                    </Link>
                    <Link to="detail.html" class="dropdown-item">
                      Blog Detail
                    </Link>
                    <Link to="team.html" class="dropdown-item">
                      The Team
                    </Link>
                    <Link to="testimonial.html" class="dropdown-item">
                      Testimonial
                    </Link>
                    <Link to="appointment.html" class="dropdown-item">
                      Appointment
                    </Link>
                    <Link to="search.html" class="dropdown-item">
                      Search
                    </Link>
                  </div>
                </div>
               <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active nav-item nav-link" : "nav-item nav-link")}
                >Contact</NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
