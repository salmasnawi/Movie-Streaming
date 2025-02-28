import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark fw-bold text-light  mt-auto">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} Movie App. All rights reserved.</p>
        <div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
