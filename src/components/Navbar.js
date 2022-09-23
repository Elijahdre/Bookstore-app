import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>
// const links = [
//   {
//     id: 1,
//     path: '/',
//     text: 'Books',
//   },
//   {
//     id: 2,
//     path: '/categories',
//     text: 'Categories',
//   },
// ];

  (
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
