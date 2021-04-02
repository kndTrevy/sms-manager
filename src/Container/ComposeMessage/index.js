import React from 'react';
import { Link } from "react-router-dom";

const ComposeMessage = () => {
    return (
        <div className="row justify-content-center mt-3">
            <div className="col-12 d-flex justify-content-between flex-column flex-sm-row">
                <Link className="fw-bold text-dark hover:underline mb-2 mb-lg-0" to="/message">
                    <span className="fas fa-inbox me-2" />Back to messages
                </Link>
                <p className="text-muted fw-normal small">All Messages</p>
            </div>
            <div className="col-12">
                <div className="card shadow-sm p-4 mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="font-small">
                            <a href="#">
                                <img className="avatar-sm img-fluid rounded-circle me-2" src="../assets/img/team/profile-picture-1.jpg" alt="avatar" />
                                <span className="fw-bold">Neil Sims</span>
                            </a>
                            <span className="ms-2">March 26, 19:25</span>
                        </span>
                        <div className="d-none d-sm-block">
                            <span className="fas fa-mobile-alt" aria-label="phone" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Sent from the phone" data-original-title="Sent from the phone" />
                        </div>
                    </div>
                    <p className="m-0">Hi Chris! Thanks a lot for this very useful template. Saved me a lot of time and searches on the internet.</p>
                </div>
                <div className="card bg-white shadow-sm p-4 mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="font-small">
                            <a href="#">
                                <img className="avatar-sm img-fluid rounded-circle me-2" src="../assets/img/team/profile-picture-1.jpg" alt="avatar" />
                                <span className="fw-bold">Neil Sims</span>
                            </a>
                            <span className="ms-2">March 26, 19:25</span>
                        </span>
                        <div className="d-none d-sm-block">
                            500<span className="fas fa-mobile-alt ml-3" aria-label="phone" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Sent to 500 phones" data-original-title="Sent to 500 phones" />
                        </div>
                    </div>
                    <p className="m-0">Hi Chris! Thanks a lot for this very useful template. Saved me a lot of time and searches on the internet.</p>
                </div>
                <form action="#" className="mt-4">
                    <textarea className="form-control border border-gray-400 shadow-sm mb-4" id="message" placeholder="Your Message" rows={6} maxLength={1000} required defaultValue={""} />
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-secondary text-dark"><span className="fas fa-paper-plane me-2" />Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ComposeMessage
