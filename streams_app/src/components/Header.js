import React from 'react'
import { Link } from 'react-router-dom'

import GoogleAuth from './GoogleAuth'

const Header = () => (
  <nav>
    <div className="nav-wrapper teal">
      <Link to="/" className="brand-logo">
        Streamy
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/">All Streams</Link>
        </li>
        <li>
          {/* <a href="badges.html">Components</a> */}
          <GoogleAuth />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
