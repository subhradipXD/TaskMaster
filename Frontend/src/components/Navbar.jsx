import { Link, NavLink } from "react-router-dom";
import logo from "../assets/TaskManager.png";
import { LiaSignInAltSolid } from "react-icons/lia";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { useContext } from "react";
import { useCookies } from "react-cookie";
import { UserContext } from "../context/userContextProvider";

function Navbar() {
  // const [cookies, setCookies, removeCookie] = useCookies(["token"]);
  const { cookies, removeCookie } = useContext(UserContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            <img src={logo} width={110} />
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
                  className="nav-link dropdown-toggle mt-2"
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
                <NavLink className="nav-link mt-2" aria-current="page" to="/">
                  To-Do
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mt-2" to="/completed">
                  Completed
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mt-2" to="/deleted">
                  Deleted
                </NavLink>
              </li>
              {cookies.token ? (
                <li className="nav-item">
                  <button
                    className="btn"
                    onClick={() => {
                      removeCookie(cookies.token);
                      removeCookie("token");
                    }}
                  >
                    <Link className="nav-link" to="/login">
                      <small>LogOut</small>
                      <LiaSignOutAltSolid />
                    </Link>
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <button className="btn">
                    <Link className="nav-link" to="/login">
                      <small>LogIn</small>
                      <LiaSignInAltSolid />
                    </Link>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
