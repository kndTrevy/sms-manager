import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { axiosInstance as axios } from "../../helpers/axios";
import { login } from '../../actions';
import welcomeImage from "../../default.jpg";
import signinSVG from "../../assets/img/illustrations/signin.svg"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState('');

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    if (auth.authenticate) {
        return <Redirect to="/" />
    }

    const submitForm = (e) => {
        e.preventDefault();

        const form = {
            password, email
        };

        dispatch(login(form)).then(result => {
            toast.success("Logged in")
        }).catch(error => {
            toast.error(error.message);
        });
    }
    return (
        <main>
            <ToastContainer />
            <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
                <div className="container">
                    <p className="text-center">
                        <a href="../dashboard/dashboard.html" className="text-gray-700"><i className="fas fa-angle-left me-2" /> Back to homepage
                        </a>
                    </p>
                    <div className="row justify-content-center form-bg-image" data-background-lg={signinSVG}>
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                <div className="text-center text-md-center mb-4 mt-md-0">
                                    <h1 className="mb-0 h3">Sign in to our platform</h1>
                                </div>
                                <form onSubmit={submitForm} className="mt-4">
                                    <div className="form-group mb-4">
                                        <label htmlFor="email">Your Email</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <span className="fas fa-envelope" />
                                            </span>
                                            <input type="email" value={email}
                                                className="form-control"
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="example@company.com" id="email" autoFocus required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group mb-4">
                                            <label htmlFor="password">Your Password</label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon2">
                                                    <span className="fas fa-unlock-alt" />
                                                </span>
                                                <input type="password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="form-control" id="password" required />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-top mb-4">
                                            <div className="form-check">
                                                <input className="form-check-input"
                                                    value={remember}
                                                    onChange={(e) => setRemember(e.target.value)}
                                                    type="checkbox" id="remember" />
                                                <label className="form-check-label mb-0" htmlFor="remember">Remember me</label>
                                            </div>
                                            <div>
                                                <a href="forgot-password.html" className="small text-right">Lost password?</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-dark">Sign in</button>
                                    </div>
                                </form>
                                <div className="d-flex justify-content-center align-items-center mt-4">
                                    <span className="fw-normal">Not registered?
                                        <a href="sign-up.html" className="fw-bold">Create account</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>


    )
}

export default Login
