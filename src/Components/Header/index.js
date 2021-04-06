import React from 'react';
import { Link } from "react-router-dom";
import { signOut } from '../../actions/auth.action';
import { useSelector, useDispatch } from 'react-redux';


const Header = () => {
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const logOut = (e) => {

    e.preventDefault();
    dispatch(signOut());
  }

  return (
    <>
      <nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
        <div className="container-fluid px-0">
          <div className="d-flex justify-content-between w-100" id="navbarSupportedContent">
            <div className="d-flex align-items-center">
              <button id="sidebar-toggle" className="sidebar-toggle me-3 btn btn-icon-only btn-lg btn-circle d-none "><span className="fas fa-bars" />
              </button>
              <form className="navbar-search form-inline" id="navbar-search-main">
                <div className="input-group input-group-merge search-bar"><span className="input-group-text" id="topbar-addon"><span className="fas fa-search" /></span>
                  <input type="text" className="form-control" id="topbarInputIconLeft" placeholder="Search" aria-label="Search" aria-describedby="topbar-addon" />
                </div>
              </form>
            </div>
            <ul className="navbar-nav align-items-center">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle pt-1 px-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <div className="media d-flex align-items-center">
                    <img className="user-avatar md-avatar rounded-circle" alt="Image placeholder" src={auth.user.profilePicture} />
                    <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                      <span className="mb-0 font-small fw-bold">{auth.user.firstName} {auth.user.lastName}</span>
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-0">
                  <Link className="dropdown-item rounded-top fw-bold" to={`profile/${auth.user._id}`}>
                    <span className="far fa-user-circle" />My Profile</Link>
                  <Link className="dropdown-item fw-bold" to="/message"><span className="fas fa-envelope-open-text" />Messages</Link>
                  <div role="separator" className="dropdown-divider my-0" />
                  <a className="dropdown-item rounded-bottom fw-bold" onClick={logOut} href="#">
                    <span className="fas fa-sign-out-alt text-danger" />
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}

export default Header;
