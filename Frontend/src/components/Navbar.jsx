import { NavLink } from "react-router-dom";
import logo from "../assets/TaskManager.png";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            <img src={logo} width={110}/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto nav-underline">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Theme
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item">Auto</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Light</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Dark</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  To-Do
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/my-todos">
                  My-ToDos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/completed">
                  Completed
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/deleted">
                  Deleted
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
