import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux';
import handlecart from './../redux/reducer/handlecart';
// import Login from './../Accunts/Login';
export default function Navbar() {
    const state = useSelector((state)=> state.handlecart)
  

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">LA COLLECTION</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/Products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/About">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to='/Contact'>Contact</NavLink>
                        </li>
                    </ul>
                    </div>
                    <button type="button"  className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <NavLink to='/account' >
                                <i className='fa fa-sign-in me-1'>Login</i>
                            </NavLink>
                            </button>
                            
                            <NavLink to='/Registery' className='btn btn-outline-dark ms-2'>
                                <i className='fa fa-user-plus me-1'>Registery</i>
                            </NavLink>
                            <NavLink to='/Cart' className='btn btn-outline-dark ms-2' >
                                <i className='fa fa-shopping-cart me-1'>Cart({state.length})</i>
                            </NavLink>
                </div>
                </nav>
        </div>
    )
}
