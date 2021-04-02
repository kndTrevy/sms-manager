import React from 'react'

const ProfilePage = () => {
    return (
        <div className="row">
            <div className="col-12 col-xl-8">
                <div className="card card-body shadow-sm mb-4">
                    <h2 className="h5 mb-4">General information</h2>
                    <form>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label htmlFor="first_name">First Name</label>
                                    <input className="form-control" id="first_name" type="text" placeholder="Enter your first name" required />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label htmlFor="last_name">Last Name</label>
                                    <input className="form-control" id="last_name" type="text" placeholder="Also your last name" required />
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="birthday">Birthday</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <span className="far fa-calendar-alt" />
                                    </span>
                                    <input data-datepicker className="form-control" id="birthday" type="text" placeholder="dd/mm/yyyy" required />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3"><label htmlFor="gender">Gender</label> <select className="form-select mb-0" id="gender" aria-label="Gender select example"><option selected="selected">Gender</option><option value={1}>Female</option><option value={2}>Male</option></select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3"><div className="form-group"><label htmlFor="email">Email</label> <input className="form-control" id="email" type="email" placeholder="name@company.com" required /></div>
                            </div>
                            <div className="col-md-6 mb-3"><div className="form-group"><label htmlFor="phone">Phone</label> <input className="form-control" id="phone" type="number" placeholder="+12-345 678 910" required /></div>
                            </div>
                        </div>
                        <h2 className="h5 my-4">Location</h2>
                        <div className="row">
                            <div className="col-sm-9 mb-3"><div className="form-group"><label htmlFor="address">Address</label> <input className="form-control" id="address" type="text" placeholder="Enter your home address" required /></div>
                            </div>
                            <div className="col-sm-3 mb-3"><div className="form-group"><label htmlFor="number">Number</label> <input className="form-control" id="number" type="number" placeholder="No." required /></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 mb-3"><div className="form-group"><label htmlFor="city">City</label> <input className="form-control" id="city" type="text" placeholder="City" required /></div>
                            </div>
                            <div className="col-sm-4 mb-3"><label htmlFor="state">State</label> <select className="form-select w-100 mb-0" id="state" name="state" aria-label="State select example"><option selected="selected">State</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District Of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option></select>
                            </div>
                            <div className="col-sm-4"><div className="form-group"><label htmlFor="zip">ZIP</label> <input className="form-control" id="zip" type="tel" placeholder="ZIP" required /></div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <button type="submit" className="btn btn-dark">Save All</button>
                        </div>
                    </form>
                </div>
                <div className="card card-body shadow-sm mb-4 mb-lg-0"><h2 className="h5 mb-4">Alerts &amp; Notifications</h2><ul className="list-group list-group-flush"><li className="list-group-item d-flex align-items-center justify-content-between px-0 border-bottom"><div><h3 className="h6 mb-1">Company News</h3><p className="small pe-4">Get Rocket news, announcements, and product updates</p></div><div><div className="form-check form-switch"><input className="form-check-input" type="checkbox" id="user-notification-1" /> <label className="form-check-label" htmlFor="user-notification-1" /></div></div></li><li className="list-group-item d-flex align-items-center justify-content-between px-0 border-bottom"><div><h3 className="h6 mb-1">Account Activity</h3><p className="small pe-4">Get important notifications about you or activity you've missed</p></div><div><div className="form-check form-switch"><input className="form-check-input" type="checkbox" id="user-notification-2" defaultChecked="checked" /> <label className="form-check-label" htmlFor="user-notification-2" /></div></div></li><li className="list-group-item d-flex align-items-center justify-content-between px-0"><div><h3 className="h6 mb-1">Meetups Near You</h3><p className="small pe-4">Get an email when a Dribbble Meetup is posted close to my location</p></div><div><div className="form-check form-switch"><input className="form-check-input" type="checkbox" id="user-notification-3" defaultChecked="checked" /> <label className="form-check-label" htmlFor="user-notification-3" /></div></div></li></ul>
                </div>
            </div>
            <div className="col-12 col-xl-4">
                <div className="row">
                    <div className="col-12 mb-4">
                        <div className="card shadow-sm text-center p-0">
                            <div className="profile-cover rounded-top" data-background="../assets/img/profile-cover.jpg" /><div className="card-body pb-5">
                                <img src="../assets/img/team/profile-picture-1.jpg" className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4" alt="Neil Portrait" />
                                <h4 className="h3">Neil Sims</h4>
                                <h5 className="fw-normal">Senior Software Engineer</h5>
                                <p className="text-gray mb-4">New York, USA</p>
                                <a className="btn btn-sm btn-dark me-2" href="#">
                                    <span className="fas fa-user-plus me-1" /> Connect
            </a>
                                <a className="btn btn-sm btn-secondary" href="#">Send Message</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12"><div className="card card-body shadow-sm mb-4"><h2 className="h5 mb-4">Select profile photo</h2><div className="d-flex align-items-center"><div className="me-3"><div className="user-avatar xl-avatar"><img className="rounded" src="../assets/img/team/profile-picture-3.jpg" alt="change avatar" /></div></div><div className="file-field"><div className="d-flex justify-content-xl-center ms-xl-3"><div className="d-flex"><span className="icon icon-md"><span className="fas fa-paperclip me-3" /></span> <input type="file" /><div className="d-md-block text-left"><div className="fw-normal text-dark mb-1">Choose Image</div><div className="text-gray small">JPG, GIF or PNG. Max size of 800K</div></div></div></div></div></div></div></div>
                    <div className="col-12 col-sm-6 col-xl-12"><form action="https://demo.themesberg.com/file-upload" className="dropzone rounded mb-4"><div className="fallback"><input name="file" type="file" multiple="multiple" /></div></form></div>
                    <div className="col-12 col-sm-6 col-xl-12"><div className="card card-body shadow-sm mb-4"><h2 className="h5 mb-4">Select cover photo</h2><div className="d-xl-flex align-items-center"><div><div className="user-avatar xl-avatar"><img className="rounded" src="../assets/img/profile-cover.jpg" alt="change cover photo" /></div></div><div className="file-field"><div className="d-flex justify-content-xl-center ms-xl-3"><div className="d-flex"><span className="icon icon-md"><span className="fas fa-paperclip me-3" /></span> <input type="file" /><div className="d-md-block text-left"><div className="fw-normal text-dark mb-1">Choose Image</div><div className="text-gray small">JPG, GIF or PNG. Max size of 800K</div></div></div></div></div></div></div></div>

                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <div class="card p-3 p-lg-4">
                                    <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="card-header border-0 text-center pb-0">
                                        <h2 class="mb-3 h5">Create Account</h2>
                                    </div>
                                    <div class="card-body p-0 pl-lg-3">
                                        <form action="#">
                                            <div class="form-group mb-4">
                                                <label for="email">Your Email</label>
                                                <div class="input-group">
                                                    <span class="input-group-text" id="basic-addon3">
                                                        <span class="fas fa-envelope"></span>
                                                    </span>
                                                    <input type="email" class="form-control" placeholder="example@company.com" id="email" required="" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="form-group mb-4">
                                                    <label for="password">Your Password</label>
                                                    <div class="input-group">
                                                        <span class="input-group-text" id="basic-addon4">
                                                            <span class="fas fa-unlock-alt"></span>
                                                        </span>
                                                        <input type="password" placeholder="Password" class="form-control" id="password" required="" />
                                                    </div>
                                                </div>
                                                <div class="form-group mb-4">
                                                    <label for="password_confirm">Confirm Password</label>
                                                    <div class="input-group">
                                                        <span class="input-group-text" id="basic-addon5">
                                                            <span class="fas fa-unlock-alt"></span>
                                                        </span>
                                                        <input type="password" placeholder="Confirm Password" class="form-control" id="password_confirm" required="" />
                                                    </div>
                                                </div>
                                                <div class="form-check mb-4">
                                                    <input class="form-check-input" type="checkbox" value="" id="terms" />
                                                    <label class="form-check-label mb-0" for="terms">I agree to the <a href="#">terms and conditions</a></label>
                                                </div>
                                            </div>
                                            <div class="d-grid">
                                                <button type="submit" class="btn btn-dark">Sign up</button>
                                            </div>
                                        </form>
                                        <div class="mt-3 mb-4 text-center">
                                            <span class="fw-normal">or</span>
                                        </div>
                                        <div class="d-flex justify-content-center my-4">
                                            <a href="#" class="btn btn-icon-only btn-pill btn-outline-light text-facebook me-2" type="button" aria-label="facebook button" title="facebook button">
                                                <span aria-hidden="true" class="fab fa-facebook-f"></span>
                                            </a>
                                            <a href="#" class="btn btn-icon-only btn-pill btn-outline-light text-twitter me-2" type="button" aria-label="twitter button" title="twitter button">
                                                <span aria-hidden="true" class="fab fa-twitter"></span>
                                            </a>
                                            <a href="#" class="btn btn-icon-only btn-pill btn-outline-light text-facebook" type="button" aria-label="github button" title="github button">
                                                <span aria-hidden="true" class="fab fa-github"></span>
                                            </a>
                                        </div>
                                        <div class="d-flex justify-content-center align-items-center mt-4">
                                            <span class="fw-normal">Already have an account? <a href="#" class="fw-bold">Login here</a></span>
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

export default ProfilePage
