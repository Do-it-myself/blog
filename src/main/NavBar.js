import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
        <div>Do it Myself</div>
        <div className="links">
            <Link to="/blog">Home </Link>
            <Link to="/blog/hardware">Hardware </Link>
            <Link to="/blog/software">Software </Link>
        </div>
    </nav>
  )
}
