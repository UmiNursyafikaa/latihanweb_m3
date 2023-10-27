import React from "react";
import { Link } from "react-router-dom";
import "D:/Kuliah/Semester 5/Pem.web/Praktikum/modul3/latihan/kegiatan1/src/style/style.css";

function Navbar() {
  return (
    <nav>
      <h3>Navbar</h3>
      <ul>
        <li>
          <Link to="/" className="nav-button">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-button">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-button">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;