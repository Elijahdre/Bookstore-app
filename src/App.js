/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Book from './components/Book';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <div>
            <Routes>
              <Route path="/book" exact element={<Book />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </div>
        </div>

      </Router>
      ,
    </>
  );
}

export default App;
