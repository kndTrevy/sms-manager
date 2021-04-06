import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../light.svg"
import logo1 from "../../assets/img/brand/dark.svg";
import { signOut } from '../../actions/auth.action';
import { useSelector, useDispatch } from 'react-redux';

const Sidebar = () => {

    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const logOut = (e) => {

        e.preventDefault();
        dispatch(signOut());
    }

    return (
        <>
            <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-md-none">
                <Link className="navbar-brand me-lg-5" to="/">
                    <img className="navbar-brand-dark" src={logo} alt="Volt logo" />
                    <img className="navbar-brand-light" src={logo1} alt="Volt logo" />
                </Link>
                <div className="d-flex align-items-center">
                    <button className="navbar-toggler d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
            </nav>
            <nav id="sidebarMenu" className="sidebar d-md-block bg-dark text-white collapse" data-simplebar>
                <div className="sidebar-inner px-4 pt-3">
                    <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                        <div className="d-flex align-items-center">
                            <div className="user-avatar lg-avatar me-4">
                                <img src={auth.user.profilePicture} className="card-img-top rounded-circle border-white" alt="Bonnie Green" />
                            </div>
                            <div className="d-block">
                                <h2 className="h6">Hi, {auth.user.firstName}</h2>
                                <a href="#" onClick={logOut} className="btn btn-secondary text-dark btn-xs">
                                    <span className="me-2"><span className="fas fa-sign-out-alt" /></span>Sign Out
                                </a>
                            </div>
                        </div>
                        <div className="collapse-close d-md-none">
                            <a href="#sidebarMenu" className="fas fa-times" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation" />
                        </div>
                    </div>
                    <ul className="nav flex-column pt-3 pt-md-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link d-flex align-items-center">
                                <span className="sidebar-icon">
                                    <img src={logo} height={20} width={20} alt="Updev Logo" />
                                </span>
                                <span className="mt-1 sidebar-text">SMS-MANAGER</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashbord" className="nav-link d-flex align-items-center justify-content-between">
                                <span>
                                    <span className="sidebar-icon">
                                        <span className="fas fa-chart-pie" />
                                    </span>
                                    <span className="sidebar-text">Dashboard</span>
                                </span>
                            </Link>
                        </li>
                        <div>
                            <li className="nav-item">
                                <Link to="/message" className="nav-link d-flex align-items-center justify-content-between">
                                    <span>
                                        <span className="sidebar-icon">
                                            <span className="fas fa-inbox" />
                                        </span>
                                        <span className="sidebar-text">Messages</span>
                                    </span>
                                    <span className="badge badge-md bg-danger badge-pill notification-count">99+</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/users" className="nav-link">
                                    <span className="sidebar-icon">
                                        <span className="fas fa-user-check" />
                                    </span>
                                    <span className="sidebar-text">Users List</span>
                                </Link>
                            </li>
                            {
                                auth.user.role === "admin" ? (
                                    <li className="nav-item">
                                        <Link to="/company" className="nav-link">
                                            <span className="sidebar-icon">
                                                <span className="fas fa-th" />
                                            </span>
                                            <span className="sidebar-text">Companies List</span>
                                        </Link>
                                    </li>
                                ) : null
                            }

                        </div>

                    </ul>
                </div>
            </nav>



        </>
    )
}

export default Sidebar;
