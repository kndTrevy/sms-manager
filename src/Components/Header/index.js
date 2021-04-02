import React from 'react';
import { Link } from "react-router-dom";
import { signOut } from '../../actions/auth.action';
import { useSelector, useDispatch } from 'react-redux';


const Header = () => {
  const auth = useSelector(state => state.auth);
  const user = JSON.parse(localStorage.getItem('user'));

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
                <a className="nav-link text-dark me-lg-3 icon-notifications dropdown-toggle" data-unread-notifications="true" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="icon icon-sm"><span className="fas fa-bell bell-shake" /> <span className="icon-badge rounded-circle unread-notifications" /></span>
                </a>
                <div className="dropdown-menu dashboard-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                  <div className="list-group list-group-flush">
                    <a href="#" className="text-center text-primary fw-bold border-bottom border-light py-3">Notifications</a>
                    <a href="../calendar.html" className="list-group-item list-group-item-action border-bottom border-light">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <img alt="Image placeholder" src={auth.user.profilePicture} className="user-avatar lg-avatar rounded-circle" />
                        </div>
                        <div className="col ps-0 ms-2">
                          <div className="d-flex justify-content-between align-items-center">
                            <div><h4 className="h6 mb-0 text-small">Jose Leos</h4>
                            </div>
                            <div className="text-end"><small className="text-danger">a few moments ago</small></div>
                          </div>
                          <p className="font-small mt-1 mb-0">Added you to an event "Project stand-up" tomorrow at 12:30 AM.</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
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
                  <a className="dropdown-item rounded-top fw-bold" href="#">
                    <span className="far fa-user-circle" />My Profile</a>
                  <a className="dropdown-item fw-bold" href="#"><span className="fas fa-cog" />Settings</a>
                  <a className="dropdown-item fw-bold" href="#"><span className="fas fa-envelope-open-text" />Messages</a> 
                  <a className="dropdown-item fw-bold" href="#"><span className="fas fa-user-shield" />Support</a>
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
