import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


function Navbar({ isAuthed }) {
    console.log('isAuthed', isAuthed)
  return (
   <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark w-100">
                <ul className="ml-auto navbar-nav">

                    <li className="nav-item">
                        <NavLink to="/" exact={true} className={window.location.pathname === "/" ? "nav-link activeClassName" : "nav-link"}>Home
                             </NavLink>
                    </li>

                   {!isAuthed ? <li className="nav-item">
                        <NavLink to="/login" className={window.location.pathname === "/login" ? "nav-link activeClassName" : "nav-link"}>Login
                             </NavLink>
                    </li> : null}
                    <li className="nav-item">
                        <NavLink to="/profile" className={window.location.pathname === "/profile" ? "nav-link activeClassName" : "nav-link"}>Profile
                             </NavLink>
                    </li>
                </ul>
      </nav>
      </>
      )
  }
 export default Navbar

