import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { axiosInstance as axios } from "../../helpers/axios";

const Users = () => {

    const auth = useSelector(state => state.auth);

    const [users, setUsers] = React.useState(null);

    React.useEffect(() => {
        axios.get("/get/users").then(res => {
            setUsers(res.data.users);
            console.log(res.data.users);
        }).catch(error => {
            console.log(error.message);
        });
    }, [])

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <nav aria-label="breadcrumb" className="d-none d-md-inline-block"><ol className="breadcrumb breadcrumb-dark breadcrumb-transparent"><li className="breadcrumb-item"><a href="#"><span className="fas fa-home" /></a></li><li className="breadcrumb-item"><a href="#">Volt</a></li><li className="breadcrumb-item active" aria-current="page">Users List</li></ol>
                    </nav>
                    <h2 className="h4">Users List</h2><p className="mb-0">Your web analytics dashboard template.</p>
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <a href="#" className="btn btn-sm btn-dark">
                        <span className="fas fa-plus me-2" /> New User
                    </a>
                    <div className="btn-group ms-2 ms-lg-3">
                        <button type="button" className="btn btn-sm btn-outline-primary">Share</button>
                        <button type="button" className="btn btn-sm btn-outline-primary">Export</button>
                    </div>
                </div>
            </div>
            <div className="table-settings mb-4">
                <div className="row justify-content-between align-items-center">
                    <div className="col-9 col-lg-4 d-flex">
                        <div className="input-group me-2 me-lg-3">
                            <span className="input-group-text">
                                <span className="fas fa-search" />
                            </span>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        <select className="form-select w-25" aria-label="Message select example 2">
                            <option selected="selected">All</option>
                            <option value={1}>Active</option>
                            <option value={2}>Inactive</option>
                            <option value={3}>Pending</option>
                            <option value={3}>Canceled</option>
                        </select>
                    </div>
                    <div className="col-3 col-lg-8 text-right">
                        <div className="btn-group me-1">
                            <button className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="icon icon-sm icon-gray pt-1">
                                    <span className="fas fa-sliders-h" />
                                </span>
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end pb-0">
                                <span className="small ps-3 fw-bold text-dark">Show</span>
                                <a className="dropdown-item d-flex fw-bold" href="#">10
                                        <span className="icon icon-small ms-auto">
                                        <span className="fas fa-check" />
                                    </span>
                                </a>
                                <a className="dropdown-item fw-bold" href="#">20</a>
                                <a className="dropdown-item fw-bold rounded-bottom" href="#">30</a>
                            </div>
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="icon icon-sm icon-gray pt-1"><span className="fas fa-cog" /> </span><span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end pb-0">
                                <span className="small ps-3 fw-bold text-dark">Show</span>
                                <a className="dropdown-item d-flex fw-bold" href="#">10
                                        <span className="icon icon-small ms-auto">
                                        <span className="fas fa-check" />
                                    </span>
                                </a>
                                <a className="dropdown-item fw-bold" href="#">20</a>
                                <a className="dropdown-item fw-bold rounded-bottom" href="#">30</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-body shadow-sm table-wrapper table-responsive">
                <div className="d-flex mb-3">
                    <select className="form-select fmxw-150" aria-label="Message select example">
                        <option selected="selected">Bulk Action</option>
                        <option value={1}>Send Email</option>
                        <option value={2}>Change Group</option>
                        <option value={3}>Delete User</option></select>
                    <button className="btn btn-sm px-3 btn-secondary ms-3">Apply</button>
                </div>
                <table className="table user-table table-hover align-items-center">
                    <thead>
                        <tr>
                            <th className="border-bottom">
                                <div className="form-check dashboard-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="userCheck55" />
                                    <label className="form-check-label" htmlFor="userCheck55" />
                                </div>
                            </th>
                            <th className="border-bottom">Name</th>
                            <th className="border-bottom">Date Created</th><th className="border-bottom">Verified</th><th className="border-bottom">Status</th>
                            <th className="border-bottom">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map(user => (
                                <tr>
                                    <td>
                                        <div className="form-check dashboard-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="userCheck1" />
                                            <label className="form-check-label" htmlFor="userCheck1" />
                                        </div>
                                    </td>
                                    <td>
                                        <a href="#" className="d-flex align-items-center">
                                            <img src={user.profilePicture} className="user-avatar rounded-circle me-3" alt="Avatar" />
                                            <div className="d-block">
                                                <span className="fw-bold">{user.firstName} {user.lastName}</span>
                                                <div className="small text-gray">
                                                    <span className="__cf_email__" data-cfemail="c5acaba3aa85a0bda4a8b5a9a0eba6aaa8">[email&nbsp;protected]</span>
                                                </div>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="fw-normal">{user.createdAt}</span>
                                    </td>
                                    <td>
                                        <span className="fw-normal">
                                            <span className="fas fa-check-circle text-success me-2" />{user.role}
                                    </span>
                                    </td>
                                    <td>
                                        <span className="fw-normal text-success">Active</span>
                                    </td>
                                    <td>
                                        <div className="btn-group">
                                            <button className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon icon-sm pt-1">
                                                    <span className="fas fa-ellipsis-h icon-dark" />
                                                </span>
                                                <span className="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div className="dropdown-menu py-0">
                                                <a className="dropdown-item rounded-top" href="#">
                                                    <span className="fas fa-user-shield me-2" /> Reset Pass
                                        </a>
                                                <a className="dropdown-item" href="#">
                                                    <span className="fas fa-eye me-2" />View Details
                                        </a>
                                                <a className="dropdown-item text-danger rounded-bottom" href="#">
                                                    <span className="fas fa-user-times me-2" />Suspend
                                        </a>
                                            </div>
                                        </div>
                                        <span className="fas fa-times-circle text-danger ms-2" title="Delete" data-bs-toggle="tooltip" />
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
                <div className="card-footer px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-between">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination mb-0">
                            <li className="page-item">
                                <a className="page-link" href="#">Previous</a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                    <div className="fw-normal small mt-4 mt-lg-0">Showing <b>5</b> out of <b>25</b> entries</div>
                </div>
            </div>
        </>

    )
}

export default Users
