import React from "react";
import { Container, Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar-dark bg-black  fixed-top ">
      <Container>
        <Navbar.Brand as={Link} to="/" className=" fw-bold fs-4 text-warning">
          Netflix
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            <HashLink smooth to="/home#hero" className="nav-link-custom">Home</HashLink>
            <HashLink smooth to="/home#trending" className="nav-link-custom">trending</HashLink>
            <HashLink smooth to="/home#recentlyUpdated" className="nav-link-custom">recentlyUpdated</HashLink>
            <HashLink smooth to="/home#newRelease" className="nav-link-custom">newRelease</HashLink>
            <HashLink smooth to="/home#movieGallery" className="nav-link-custom">movieGallery</HashLink>
          </Nav>

          <div className="d-flex align-items-center">
            <Form className="search-bar d-none d-lg-flex">
              <FormControl type="search" placeholder="Search..." />
              <FaSearch className="search-icon" />
            </Form>
            <Nav.Link as={Link} to="/login" className="text-white ms-3">
              <FaUser className="user-icon" /> Login
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
