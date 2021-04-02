import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getContact, updateContact } from "../../../actions/contact.action";

const ContactSection = () => {

    const contact = useSelector(state => state.contact);
    const dispatch = useDispatch();

    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [titlePage, setTitlePage] = useState('');
    const [descriptionPage, setDescriptionPage] = useState('');
    const [facebook, setFacebook] = useState('');
    const [twiter, setTwiter] = useState('')
    const [linkedIn, setLinkedInd] = useState('')
    const [insta, setInsta] = useState('');
    const [id, setId] = useState('');

    // contact.addressContact.length > 0 && contact.addressContact.map((contact) => {
    //     setAddress(contact.address);
    //     setPhoneNumber(contact.phoneNumber);
    //     setEmailAddress(contact.emailAddress);
    //     setTitlePage(contact.title);
    //     setDescriptionPage(contact.description);
    // })

    React.useEffect(() => {
        contact.addressContact.length > 0 && contact.addressContact.map((contact) => {
            setAddress(contact.address);
            setPhoneNumber(contact.phoneNumber);
            setEmailAddress(contact.emailAddress);
            setTitlePage(contact.title);
            setDescriptionPage(contact.description);
            setFacebook(contact.facebook && contact.facebook);
            setTwiter(contact.twiter && contact.twiter);
            setLinkedInd(contact.linkedIn && contact.linkedIn);
            setInsta(contact.insta && contact.insta);
            setId(contact._id);
        })
    }, []);

    const saveChanges = (e) => {
        e.preventDefault();

        const forms = {
            address,
            phoneNumber,
            title: titlePage,
            emailAddress,
            description: descriptionPage,
            facebook,
            twiter,
            insta,
            linkedIn,
            _id: id
        }

        dispatch(updateContact(forms)).then(result => {
            toast.success("Updated");
            dispatch(getContact());
        }).catch(error => {
            toast.error(error.message);
        });
    }


    return (
        <>
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">Update Contact Stuffs</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form className="form-horizontal">
                    <div className="card-body">
                        <div className="form-group row">
                            <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                            <div className="col-sm-10">
                                <input type="address" value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="form-control" id="address"
                                    placeholder="Address" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">Phone Number</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    id="phoneNumber" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="emailAddress" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                    value={emailAddress}
                                    onChange={(e) => setEmailAddress(e.target.value)}
                                    id="emailAddress" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="titlePage" className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                    value={titlePage}
                                    onChange={(e) => setTitlePage(e.target.value)}
                                    id="titlePage" placeholder="Title" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="descriptionPage" className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-10">
                                <textarea type="text" value={descriptionPage} className="form-control"
                                    onChange={(e) => setDescriptionPage(e.target.value)}
                                    id="descriptionPage" placeholder="Description" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="facebook" className="col-sm-2 col-form-label">Address</label>
                            <div className="col-sm-10">
                                <input type="text" value={facebook}
                                    onChange={(e) => setFacebook(e.target.value)}
                                    className="form-control" id="facebook"
                                    placeholder="facebook" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="twiter" className="col-sm-2 col-form-label">Twiter</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                    value={twiter}
                                    onChange={(e) => setTwiter(e.target.value)}
                                    id="twiter" placeholder="twiter" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="insta" className="col-sm-2 col-form-label">Instagram</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                    value={insta}
                                    onChange={(e) => setInsta(e.target.value)}
                                    id="insta" placeholder="insta" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="linkedIn" className="col-sm-2 col-form-label">LinkedIn</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                    value={linkedIn}
                                    onChange={(e) => setLinkedInd(e.target.value)}
                                    id="linkedIn" placeholder="Image" />
                            </div>
                        </div>

                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                        <button type="submit" onClick={saveChanges} className="btn btn-info">Save Changes</button>
                    </div>
                    {/* /.card-footer */}
                </form>
            </div>
        </>
    )
}

export default ContactSection
