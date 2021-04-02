import React from 'react'
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="btn-toolbar dropdown">
                    <button className="btn btn-dark btn-sm me-2 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="fas fa-plus me-2" />New Task
                </button>
                    <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-0">
                        <Link className="dropdown-item fw-normal rounded-top" to="message"><span className="fas fa-inbox" />New Message</Link>
                        <a className="dropdown-item fw-normal" href="#"><span className="fas fa-user" />New client</a>
                        <a className="dropdown-item fw-normal" href="#"><span className="fas fa-cloud-upload-alt" />New Customer</a>
                        <div role="separator" className="dropdown-divider my-0" />
                        <a className="dropdown-item fw-normal rounded-bottom" href="#"><span className="fas fa--user-shield text-danger" />New User</a>
                    </div>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-primary">Share</button>
                    <button type="button" className="btn btn-sm btn-outline-primary">Export</button>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-12 col-sm-6 col-xl-4 mb-4">
                    <div className="card border-light shadow-sm">
                        <div className="card-body">
                            <div className="row d-block d-xl-flex align-items-center">
                                <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                    <div className="icon icon-shape icon-md icon-shape-primary rounded me-4 me-sm-0"><span className="fas fa-chart-line" />
                                    </div>
                                    <div className="d-sm-none">
                                        <h2 className="h5">Customers</h2>
                                        <h3 className="mb-1">345,678</h3>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-7 px-xl-0">
                                    <div className="d-none d-sm-block">
                                        <h2 className="h5">Customers</h2>
                                        <h3 className="mb-1">345k</h3>
                                    </div>
                                    <small>Feb 1 - Apr 1, <span className="icon icon-small"><span className="fas fa-globe-europe" /></span> WorldWide</small>
                                    <div className="small mt-2">
                                        <span className="fas fa-angle-up text-success" /> <span className="text-success fw-bold">18.2%</span> Since last month
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-4 mb-4">
                    <div className="card border-light shadow-sm">
                        <div className="card-body">
                            <div className="row d-block d-xl-flex align-items-center">
                                <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                    <div className="icon icon-shape icon-md icon-shape-secondary rounded me-4">
                                        <span className="fas fa-cash-register" />
                                    </div>
                                    <div className="d-sm-none">
                                        <h2 className="h5">Revenue</h2>
                                        <h3 className="mb-1">$43,594</h3>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-7 px-xl-0">
                                    <div className="d-none d-sm-block">
                                        <h2 className="h5">Revenue</h2>
                                        <h3 className="mb-1">$43,594</h3>
                                    </div>
                                    <small>
                                        Feb 1 - Apr 1, <span className="icon icon-small"><span className="fas fa-globe-europe" />
                                        </span> Worldwide
                                    </small>
                                    <div className="small mt-2">
                                        <span className="fas fa-angle-up text-success" />
                                        <span className="text-success fw-bold">28.2%</span> Since last month
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xl-8 mb-4">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <div className="card border-light shadow-sm">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col"><h2 className="h5">Messages</h2></div>
                                        <div className="col text-right">
                                            <a href="traffic-sources.html" className="btn btn-sm btn-secondary">See all</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center table-flush">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">Day</th>
                                                <th scope="col">Company</th>
                                                <th scope="col">Message</th>
                                                <th scope="col">N° Clients</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">jeudi 26 mars</th>
                                                <td>UPDEV</td>
                                                <td>Tu as vraiment envie de savoir?</td>
                                                <td> 500</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-4">
                            <div className="card border-light shadow-sm">
                                <div className="card-header border-bottom border-light d-flex justify-content-between">
                                    <h2 className="h5 mb-0">Team members</h2><a href="../users.html" className="btn btn-sm btn-secondary">See all</a>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush list my--3">
                                        <li className="list-group-item px-0">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <a href="#" className="user-avatar">
                                                        <img className="rounded-circle" alt="Image placeholder" src="../../assets/img/team/profile-picture-1.jpg" />
                                                    </a>
                                                </div>
                                                <div className="col-auto ms--2">
                                                    <h4 className="h6 mb-0"><a href="#!">Chris Wood</a></h4><span className="text-success">●</span> <small>Online</small>
                                                </div>
                                                <div className="col text-right">
                                                    <a href="../calendar.html" className="btn btn-sm btn-tertiary"><i className="fas fa-calendar-check me-1" /> Invite</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="card border-light shadow-sm"><div className="card-header border-bottom border-light"><h2 className="h5 mb-0">Events</h2></div><div className="card-body"><div className="row align-items-center d-block d-sm-flex border-bottom border-light pb-4 mb-4"><div className="col-auto mb-3 mb-sm-0"><div className="calendar d-flex"><span className="calendar-month">Aug</span><span className="calendar-day">10</span></div></div><div className="col"><a href="../calendar.html"><h3 className="h5">Newmarket Nights</h3></a><span>Organized by <a href="#!" className="text-700">University of Oxford</a></span><div className="small fw-bold mt-1">Time: 6:00AM</div><span className="small fw-bold">Place: Cambridge Boat Club, Cambridge</span></div></div><div className="row align-items-center d-block d-sm-flex border-bottom border-light pb-4 mb-4"><div className="col-auto mb-3 mb-sm-0"><div className="calendar d-flex"><span className="calendar-month">Sep</span><span className="calendar-day">12</span></div></div><div className="col"><a href="../calendar.html"><h3 className="h5 mb-0">Noco Hemp Expo</h3></a><span>Organized by <a href="#!" className="text-700">University of Oxford</a></span><div className="small fw-bold mt-1">Thu, 12 Sep - Sat, 18 Sep 2020</div><span className="small fw-bold">Place: Denver Expo Club, USA</span></div></div><div className="row d-block d-sm-flex align-items-center"><div className="col-auto mb-3 mb-sm-0"><div className="calendar d-flex"><span className="calendar-month">Sep</span><span className="calendar-day">20</span></div></div><div className="col"><a href="../calendar.html"><h3 className="h5 mb-0">Canadian National Exhibition (CNE)</h3></a><span>Organized by <a href="#!" className="text-700">University of Oxford</a></span><div className="small fw-bold mt-1">Fri, 20 Sep - Mon, 07 Oct 2020</div><span className="small fw-bold">Place: Toronto , Canada</span></div></div></div><div className="card-footer border-top border-light text-center"><a className="fw-bold text-primary" href="../calendar.html">See all</a></div></div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-4 mb-4">
                    <div className="col-12 px-0 mb-4">
                        <div className="card border-light shadow-sm">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between border-bottom border-light pb-3"><div>
                                    <h6 className="mb-0"><span className="icon icon-xs me-3"><span className="fas fa-globe-europe" /></span>Global Rank</h6>
                                </div>
                                    <div>
                                        <a href="#" className="text-primary fw-bold">#755<span className="fas fa-chart-line ms-2" /></a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between border-bottom border-light py-3">
                                    <div>
                                        <h6 className="mb-0"><span className="icon icon-xs me-3"><span className="fas fa-flag-usa" /></span>Country Rank</h6>
                                        <div className="small card-stats">United States<span className="icon icon-xs text-success ms-2"><span className="fas fa-angle-up" /></span></div>
                                    </div>
                                    <div>
                                        <a href="#" className="text-primary fw-bold">#32<span className="fas fa-chart-line ms-2" /></a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between pt-3">
                                    <div>
                                        <h6 className="mb-0"><span className="icon icon-xs me-3"><span className="fas fa-folder-open" /></span>Category Rank</h6>
                                        <a href="#" className="small card-stats">Travel &gt; Accomodation</a>
                                    </div>
                                    <div>
                                        <a href="#" className="text-primary fw-bold">#16<span className="fas fa-chart-line ms-2" /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 px-0 mb-4">
                        <div className="card border-light shadow-sm">
                            <div className="card-body">
                                <h2 className="h5">Acquisition</h2>
                                <p>Tells you where your visitors originated from, such as search engines, social networks or website referrals.</p>
                                <div className="d-block">
                                    <div className="d-flex align-items-center pt-3 me-5">
                                        <div className="icon icon-shape icon-sm icon-shape-danger rounded me-3">
                                            <span className="fas fa-chart-bar" />
                                        </div>
                                        <div className="d-block">
                                            <label className="mb-0">Bounce Rate</label>
                                            <h4 className="mb-0">33.50%</h4>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center pt-3">
                                        <div className="icon icon-shape icon-sm icon-shape-quaternary rounded me-3">
                                            <span className="fas fa-chart-area" />
                                        </div>
                                        <div className="d-block">
                                            <label className="mb-0">Sessions</label>
                                            <h4 className="mb-0">9,567</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>


    )
}

export default Dashboard
