import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <ul>
        <li>
          <Link to="/Book">Book</Link>
        </li>
        <li>
          <Link to="/Categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </header>
);
export default Navbar;
