import React from 'react';
import { Link, Router } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <Router>
    <div>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/Books">Books</Link>
          </li>
          <li>
            <Link to="/Categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
    </Router>
    </>
  );
}
export default Navbar;