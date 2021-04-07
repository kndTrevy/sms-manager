import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { axiosInstance as axios } from "../../helpers/axios";
import { toast, ToastContainer } from "react-toastify"
import moment from "moment";

const Dashboard = () => {


    const auth = useSelector(state => state.auth);

    const [messages, setMessages] = React.useState(null);
    const [companies, setCompanies] = React.useState(null);
    const [users, setUsers] = React.useState(null);
    const [specificUsers, setSpecificUsers] = React.useState(null);
    const [clients, setClients] = React.useState(null);

    React.useEffect(() => {

        const form = {
            company: auth.user.company
        }
        axios.post("/initialdata", form).then(res => {
            setMessages(res.data.messages);
            setCompanies(res.data.companies);
            setUsers(res.data.users);
            setClients(res.data.clients);
            setSpecificUsers(res.data.specificClients)
            const { specificClients } = res.data;
            localStorage.setItem("Clients", JSON.stringify(specificClients));


        }).catch(error => {
            toast.error(error.message)
        });
    }, [])

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="btn-toolbar dropdown">
                    <button className="btn btn-dark btn-sm me-2 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="fas fa-plus me-2" />New Task
                </button>
                    <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-0">
                        <Link className="dropdown-item fw-normal rounded-top" to="message"><span className="fas fa-inbox" />New Message</Link>
                        <Link className="dropdown-item fw-normal" to="/create/user?action=client"><span className="fas fa-user" />New client</Link>
                        <Link className="dropdown-item fw-normal" to="/create/user?action=customer"><span className="fas fa-cloud-upload-alt" />New Customer</Link>
                        <div role="separator" className="dropdown-divider my-0" />
                        <Link className="dropdown-item fw-normal rounded-bottom" to="/create/user?action=admin"><span className="fas fa-user-shield text-danger" />New User</Link>
                    </div>
                </div>
            </div>

            {
                auth.user.role === "admin" ? (
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-sm-6 col-xl-4 mb-4">
                            <div className="card border-light shadow-sm">
                                <div className="card-body">
                                    <div className="row d-block d-xl-flex align-items-center">
                                        <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                            <div className="icon icon-shape icon-md icon-shape-primary rounded me-4 me-sm-0"><span className="fas fa-chart-line" />
                                            </div>
                                            <div className="d-sm-none">
                                                <h2 className="h5">Companies</h2>
                                                <h3 className="mb-1">{companies && companies.length}</h3>
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-7 px-xl-0">
                                            <div className="d-none d-sm-block">
                                                <h2 className="h5">Companies</h2>
                                                <h3 className="mb-1">{companies && companies.length}</h3>
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
                                                <h2 className="h5">Clients</h2>
                                                <h3 className="mb-1">{clients && clients.length}</h3>
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-7 px-xl-0">
                                            <div className="d-none d-sm-block">
                                                <h2 className="h5">Clients</h2>
                                                <h3 className="mb-1">{clients && clients.length}</h3>
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
                                                <h2 className="h5">Messages</h2>
                                                <h3 className="mb-1">{messages && messages.length}</h3>
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-7 px-xl-0">
                                            <div className="d-none d-sm-block">
                                                <h2 className="h5">Messages</h2>
                                                <h3 className="mb-1">{messages && messages.length}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-sm-6 col-xl-4 mb-4">
                            <div className="card border-light shadow-sm">
                                <div className="card-body">
                                    <div className="row d-block d-xl-flex align-items-center">
                                        <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                            <div className="icon icon-shape icon-md icon-shape-primary rounded me-4 me-sm-0"><span className="fas fa-chart-line" />
                                            </div>
                                            <div className="d-sm-none">
                                                <h2 className="h5">Clients</h2>
                                                <h3 className="mb-1">{specificUsers && specificUsers.length}</h3>
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-7 px-xl-0">
                                            <div className="d-none d-sm-block">
                                                <h2 className="h5">Clients</h2>
                                                <h3 className="mb-1">{specificUsers && specificUsers.length}</h3>
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
                                                <h2 className="h5">Messages</h2>
                                                <h3 className="mb-1">{messages && messages.filter(message => message.from._id === auth.user.company).length}</h3>
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-7 px-xl-0">
                                            <div className="d-none d-sm-block">
                                                <h2 className="h5">Messages</h2>
                                                <h3 className="mb-1">{messages && messages.filter(message => message.from._id === auth.user.company).length}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }


            <div className="row">
                <div className="col-12 col-xl-12 mb-4">
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
                                    {
                                        auth.user.role === "admin" ? (
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
                                                    {messages && messages.map(message => (
                                                        <tr key={message._id}>
                                                            <th scope="row">{moment(message.createdAt.createdAt).format("LLLL")}</th>
                                                            <td>{message.from.company}</td>
                                                            <td>{message.message}</td>
                                                            <td>{JSON.parse(message.clients).length}</td>
                                                        </tr>
                                                    ))}

                                                </tbody>
                                            </table>
                                        ) : (
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
                                                    {messages && messages.filter(sms => sms.from._id === auth.user.company).map(message => (
                                                        <tr key={message._id}>
                                                            <th scope="row">{moment(message.createdAt.createdAt).format("LLLL")}</th>
                                                            <td>{message.from.company}</td>
                                                            <td>{message.message}</td>
                                                            <td>{JSON.parse(message.clients).length}</td>
                                                        </tr>
                                                    ))}

                                                </tbody>
                                            </table>
                                        )
                                    }

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
