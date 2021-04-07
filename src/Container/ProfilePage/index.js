import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { axiosInstance as axios } from "../../helpers/axios";
import background from "../../assets/img/profile-cover.jpg";
import { toast, ToastContainer } from "react-toastify";
import avatar from "../../assets/img/team/profile-picture-3.jpg";

const ProfilePage = (props) => {
    const auth = useSelector(state => state.auth);
    const [profile, setProfile] = React.useState(null)

    const { _id } = props.match.params;

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [role, setRole] = React.useState('');
    const [profilePicture, setProfilePicture] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [contactNumber, setContactNumber] = React.useState(null);
    const [currentPass, setCurrentPass] = React.useState('');
    const [newPass, setNewPass] = React.useState('');
    const [newPassAgain, setNewPassAgain] = React.useState('');

    const onSubmitChange = (e) => {
        e.preventDefault();
        const form = new FormData();
        firstName && form.append("firstName", firstName)
        lastName && form.append("lastName", lastName)
        email && form.append("email", email)
        role && form.append("role", role)
        username && form.append("username", username)
        profilePicture && form.append("profilePicture", profilePicture)
        title && form.append("title", title)
        description && form.append("description", description)
        contactNumber && form.append("contactNumber", contactNumber)

        axios.post('/user/updateProfile', form).then(res => {
            toast.success(res.data.message)
            setProfile(res.data.updatedValues)
        }).catch(err => {
            toast.error(err.message)
        })
    }

    const changePassword = (e) => {
        e.preventDefault();
        const form = {
            password: newPass, email
        }

        axios.post('/user/updateProfile', form).then(res => {
            toast.success(res.data.message);
            setProfile(res.data.updatedValues)
        }).catch(err => {
            toast.error(err.message)
        })
    }

    React.useEffect(() => {
        axios.get(`/get/user/${_id}`).then(result => {

            setFirstName("");
            setLastName("");
            setEmail("");
            setRole("");
            setUsername("");
            setProfilePicture(null);
            setDescription("");
            setContactNumber("");

            setProfile(result.data.user)
        }).catch(error => {
            toast.error(error.message)
        })
    }, [])

    return (
        <div className="row">
            <ToastContainer />
            <div className="col-12 col-xl-8">
                <div className="card card-body shadow-sm mb-4">
                    <h2 className="h5 mb-4">General information</h2>
                    <form onSubmit={onSubmitChange}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label htmlFor="first_name">First Name</label>
                                    <input className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        id="first_name" type="text"
                                        placeholder={`${profile && profile.firstName}`} />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label htmlFor="last_name">Last Name</label>
                                    <input className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        id="last_name" type="text"
                                        placeholder={`${profile && profile.lastName}`} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input className="form-control" id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" placeholder={`${profile && profile.email}`} />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3"><div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input className="form-control"
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                    id="phone" type="number"
                                    placeholder={`${profile && profile.contactNumber}`} />
                            </div>
                            </div>
                        </div>

                        <h2 className="h5 my-4">Optional</h2>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="profile">Profile Picture</label>
                                    <input type="file" id="profile"
                                        className="form-control"
                                        value={profilePicture}
                                        onChange={(e) => setProfilePicture(e.target.files[0])} />

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 mb-3">
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input className="form-control"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        id="title" type="text" placeholder={`${profile && profile.title}`} />
                                </div>
                            </div>
                            <div className="col-sm-9 mb-3">
                                <div className="form-group">
                                    <label htmlFor="description">Desscription</label>
                                    <textarea className="form-control" id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder={`${profile && profile.description}`} />
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
                                        id="username" type="text" placeholder={`${profile && profile.username}`} />
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <button type="submit" className="btn btn-dark">Save All</button>
                        </div>
                    </form>
                </div>
                <div className="card card-body shadow-sm mb-4 mb-lg-0">
                    <h2 className="h5 mb-4">Alerts &amp; Notifications</h2>
                    <form onSubmit={changePassword}>
                        <div className="row">

                            <div className="col-md-6 mb-3">
                                <div className="form-group">
                                    <label htmlFor="email-pass">Email</label>
                                    <input className="form-control" id="email-pass"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" placeholder={`${profile && profile.email}`} />
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <div className="form-group">
                                    <label htmlFor="currentPass">Current Password</label>
                                    <input className="form-control"
                                        value={currentPass}
                                        onChange={(e) => setCurrentPass(e.target.value)}
                                        id="currentPass" type="password"
                                        placeholder="Enter your current Password" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="form-group">
                                    <label htmlFor="currentPass">New Password</label>
                                    <input className="form-control"
                                        value={newPass}
                                        onChange={(e) => setNewPass(e.target.value)}
                                        id="currentPass" type="password"
                                        placeholder="Enter your new Password" />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-group">
                                    <label htmlFor="currentPass">Retype New Password</label>
                                    <input className="form-control"
                                        value={newPassAgain}
                                        onChange={(e) => setNewPassAgain(e.target.value)}
                                        id="currentPass" type="password"
                                        placeholder="Repeat your new Password" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex align-items-center justify-content-between px-0 border-bottom">
                            <div>
                                <h3 className="h6 mb-1">Company Info</h3>
                                <p className="small pe-4">{profile && profile.company.company}</p>
                            </div>
                            <div>
                                <span className="fas fa-check-circle text-success me-2" />
                            </div>
                        </li>
                        <li className="list-group-item d-flex align-items-center justify-content-between px-0 border-bottom">
                            <div>
                                <h3 className="h6 mb-1">First Name and Last Name</h3>
                                <p className="small pe-4">{profile && profile.firstName} {profile && profile.lastName}</p>
                            </div>
                        </li>
                        <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                            <div>
                                <h3 className="h6 mb-1">Email</h3>
                                <p className="small pe-4">{profile && profile.email} </p>
                            </div>
                        </li>
                        <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                            <div>
                                <h3 className="h6 mb-1">Username</h3>
                                <p className="small pe-4">{profile && profile.username} </p>
                            </div>
                        </li>
                        <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                            <div>
                                <h3 className="h6 mb-1">Description</h3>
                                <p className="small pe-4">{profile && profile.description} </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-12 col-xl-4">
                <div className="row">
                    <div className="col-12 mb-4">
                        <div className="card shadow-sm text-center p-0">
                            <div className="profile-cover rounded-top" data-background={background} />
                            <div className="card-body pb-5">
                                <img src={profile && profile.profilePicture} className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4" alt="Neil Portrait" />
                                <h4 className="h3">{profile && profile.firstName} {profile && profile.lastName}</h4>
                                <h5 className="fw-normal">{profile && profile.title}</h5>
                                <p className="text-gray mb-4">{profile && profile.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProfilePage
