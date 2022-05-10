/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid w-100">
            <Link className="navbar-brand" to="/">Django React Auth JWT</Link>
            <button 
                className="navbar-toggler"
                type="button" 
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <div className="text-right">
                    <Link to='/login' className="btn btn-outline-light me-2">Login</Link>
                    <Link to='/register' className="btn btn-warning">Register</Link>
                </div>
            </div>
        </div>
        </nav>
  )
}

export default Navbar