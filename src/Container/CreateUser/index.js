import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { axiosInstance as axios } from "../../helpers/axios";
import { toast, ToastContainer } from "react-toastify";
import avatar from "../../assets/img/team/profile-picture-3.jpg";

const CreateUser = (props) => {

    const auth = useSelector(state => state.auth);

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [role, setRole] = React.useState('');
    const [profilePicture, setProfilePicture] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [contactNumber, setContactNumber] = React.useState(null);
    const [password, setPassword] = React.useState("");
    const [retypePass, setRetypePass] = React.useState("");

    const submitUser = (e) => {
        e.preventDefault();

        const form = new FormData();

        const company = auth.user.company;

        console.log(company);

        firstName && form.append("firstName", firstName)
        lastName && form.append("lastName", lastName)
        email && form.append("email", email)
        role && form.append("role", role)
        username && form.append("username", username)
        profilePicture && form.append("profilePicture", profilePicture)
        title && form.append("title", title)
        description && form.append("description", description)
        contactNumber && form.append("contactNumber", contactNumber);
        form.append("company", company);
        form.append('password', password)

        if (props.location.search.split("?")[1].split("=")[1] === "client") {
            axios.post('/create/client', form).then(result => {
                toast.sucess(result.Message)
            }).catch(error => {
                toast.error(error.message)
            })
        } else {
            axios.post(`/user/signup?role=${props.location.search.split("?")[1].split("=")[1]}`, form).then(result => {
                toast.sucess(result.Message)
            }).catch(error => {
                toast.error(error.message)
            })
        }

    }
    return (
        <div className="row">
            <ToastContainer />
            <div className="col-12 col-xl-8">
                <div className="card card-body shadow-sm mb-4">
                    <h2 className="h5 mb-4">General information</h2>
                    <form onSubmit={submitUser}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label htmlFor="first_name">First Name</label>
                                    <input className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        id="first_name" type="text"
                                        placeholder="Enter your first name" required />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label htmlFor="last_name">Last Name</label>
                                    <input className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        id="last_name" type="text" placeholder="Also your last name" required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input className="form-control" id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@company.com" required />
                                </div>
                            </div>
                            {

                                props.location.search.split("?")[1].split("=")[1] === "client" ? (
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input className="form-control"
                                                value={contactNumber}
                                                onChange={(e) => setContactNumber(e.target.value)}
                                                id="phone" type="number" placeholder="+12-345 678 910" />
                                        </div>
                                    </div>

                                ) : (
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                id="phone" type="number" placeholder="Your password here" />
                                        </div>
                                    </div>
                                )
                            }



                        </div>
                        <h2 className="h5 my-4">Location</h2>
                        <div className="row">
                            <div className="col-sm-3 mb-3">
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input className="form-control"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        id="title" type="text" placeholder="Enter your post" />
                                </div>
                            </div>
                            <div className="col-sm-9 mb-3">
                                <div className="form-group">
                                    <label htmlFor="description">Desscription</label>
                                    <textarea className="form-control" id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Je suis developpeur web et mobile" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <label htmlFor="role">Role</label>
                                <select className="form-select w-100 mb-0" id="role"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    name="role" aria-label="State select example">
                                    <option selected="selected">Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="customer">Customer</option>
                                </select>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input className="form-control"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        id="username" type="text" placeholder="Username" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <button type="submit" className="btn btn-dark">Save All</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-12 col-xl-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-body shadow-sm mb-4">
                            <h2 className="h5 mb-4">Select profile photo</h2>
                            <div className="d-flex align-items-center">
                                <div className="me-3">
                                    <div className="user-avatar xl-avatar">
                                        <img className="rounded" src={avatar} alt="change avatar" />
                                    </div>
                                </div>
                                <div className="file-field">
                                    <div className="d-flex justify-content-xl-center ms-xl-3">
                                        <div className="d-flex">
                                            <span className="icon icon-md">
                                                <span className="fas fa-paperclip me-3" />
                                            </span>
                                            <input type="file" value={profilePicture} onChange={(e) => setProfilePicture(e.target.files[0])} />
                                            <div className="d-md-block text-left">
                                                <div className="fw-normal text-dark mb-1">Choose Image</div>
                                                <div className="text-gray small">JPG, GIF or PNG. Max size of 800K</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateUser
