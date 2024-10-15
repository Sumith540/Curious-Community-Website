import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="#section1" className="text-white">Section 1</a>
        </li>
        <li>
          <a href="#section2" className="text-white">Section 2</a>
        </li>
        <li>
          <a href="#section3" className="text-white">Section 3</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
