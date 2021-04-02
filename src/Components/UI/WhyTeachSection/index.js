import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    updateWhyTeachIntro as updatesWhyTeachIntro,
    updateWhyTeach as updatesWhyTeach,
    getWhyTeachIntro,
    getWhyTeach
} from '../../../actions/home.action';
import Modal from '../Modal';
import { Row, Col, Form } from 'react-bootstrap';
import { toast } from "react-toastify";

const WhyTeachSection = () => {

    const home = useSelector(state => state.home);
    const dispatch = useDispatch();

    const [whyTeachUpdate, setWhyTeachUpdate] = useState(null);
    const [whyTeachIntroTitle, setWhyTeachIntroTitle] = useState('');
    const [whyTeachIntroSubtitle, setWhyTeachIntroSubtitle] = useState('');
    const [whyTeachIntroId, setWhyTeachIntroId] = useState('');
    const [whyTeachTitle, setWhyTeachTitle] = useState(home.whyTeachIntro.length > 0 && home.whyTeachIntro[0].title);
    const [whyTeachSubtitle, setWhyTeachSubtitle] = useState(home.whyTeachIntro.length > 0 && home.whyTeachIntro[0].subtitle);
    const [whyTeachId, setWhyTeachId] = useState(home.whyTeachIntro.length > 0 && home.whyTeachIntro[0]._id);
    const [whyTeachIntroDescription, setWhyTeachIntroDescription] = useState(home.whyTeachIntro.length > 0 && home.whyTeachIntro[0].description);
    const [whyTeachIntroImg, setWhyTeachIntroImg] = useState("");
    const [showUpdateWhyTeachModal, setShowUpdateWhyTeachModal] = useState(false);



    const handleWhyTeachUpdateModalShow = (whyTeach) => {
        setWhyTeachUpdate(whyTeach);
        setWhyTeachIntroTitle(whyTeach.title);
        setWhyTeachIntroSubtitle(whyTeach.subtitle);
        setWhyTeachIntroId(whyTeach._id);
        setShowUpdateWhyTeachModal(true);
    }

    const handleWhyTeachUpdateModalClose = () => {
        setShowUpdateWhyTeachModal(false)
    }

    const updateWhyTeachIntro = (e) => {
        e.preventDefault();

        const form = {
            title: whyTeachTitle,
            subtitle: whyTeachSubtitle,
            description: whyTeachIntroDescription,
            _id: whyTeachId
        }

        dispatch(updatesWhyTeachIntro(form)).then(result => {
            toast.success("Updated");
            dispatch(getWhyTeachIntro());
        });
    }

    const updateWhyTeach = () => {
        const form = new FormData();

        form.append('title', whyTeachIntroTitle);
        form.append('subtitle', whyTeachIntroSubtitle);
        form.append('image', whyTeachIntroImg);
        form.append('_id', whyTeachIntroId);

        dispatch(updatesWhyTeach(form)).then(result => {
            toast.success("Updated");
            dispatch(getWhyTeach());
        });

        setWhyTeachUpdate("");
        setWhyTeachIntroTitle("");
        setWhyTeachIntroSubtitle("");
        setWhyTeachIntroId("");
        setWhyTeachIntroImg("");
        setShowUpdateWhyTeachModal(false);
    }


    const renderWhyTeachUpdateModal = () => {

        if (!whyTeachUpdate) {
            return null;
        }

        return (

            <Modal
                show={showUpdateWhyTeachModal}
                handleClose={handleWhyTeachUpdateModalClose}
                modalTitle={'Update Why Teach'}
                buttonTtile={'Save Changes'}
                onSubmit={updateWhyTeach}
            >
                <Row>

                    <Col>
                        <Form.Group>
                            <Form.Label >Title</Form.Label>
                            <Form.Control className="form-control-sm" type="text" placeholder="Enter category name" value={whyTeachIntroTitle} onChange={(e) => setWhyTeachIntroTitle(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label >Subtitle</Form.Label>
                            <Form.Control className="form-control-sm" type="text" placeholder="Enter category name" value={whyTeachIntroSubtitle} onChange={(e) => setWhyTeachIntroSubtitle(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="form-group">
                            <input className="form-control-sm" type="file" name="categoryImg" onChange={(e) => setWhyTeachIntroImg(e.target.files[0])} />
                        </div>
                    </Col>
                </Row>

            </Modal>

        );

    }


    return (
        <>
            <div className="row" >
                <div className="col-12" >
                    <div className="row" >
                        <div className="col-md-8 mx-auto" >
                            <form className="form-horizontal" >
                                <div className="card-body">
                                    <div className="form-group row">
                                        <label htmlFor="inputsv" className="col-sm-2 col-form-label">Title</label>
                                        <div className="col-sm-10">
                                            <input type="text"
                                                value={whyTeachTitle}
                                                onChange={(e) => setWhyTeachTitle(e.target.value)}
                                                className="form-control" id="whyTeachTitle"
                                                placeholder="Why Teach Title" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputsSubtitle" className="col-sm-2 col-form-label">Subtitle</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control"
                                                value={whyTeachSubtitle}
                                                onChange={(e) => setWhyTeachSubtitle(e.target.value)}
                                                id="Why TeachSubtitle" placeholder="Subtitle" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="whyTeachIntroDescription" className="col-sm-2 col-form-label">Description</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control"
                                                value={whyTeachIntroDescription}
                                                onChange={(e) => setWhyTeachIntroDescription(e.target.value)}
                                                id="whyTeachIntroDescription" placeholder="Why Teach Intro Description" />
                                        </div>
                                    </div>
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <button
                                        onClick={updateWhyTeachIntro}
                                        className="btn btn-info">Save Changes</button>
                                </div>
                                {/* /.card-footer */}
                            </form>
                        </div>
                    </div>
                    <div className="row mt-5" >
                        <div className="col-12">
                            <div className="row" >
                                {
                                    home.whyTeach.length > 0 && home.whyTeach.map((teach) =>

                                    (
                                        <div className=" col-md-12 col-xl-4" key={teach._id}>
                                            <div className="row" >
                                                <div className="col-12 text-center">
                                                    <img src={teach.image} alt="images" className="img-fluid" />
                                                </div>

                                            </div>

                                            <div className="row" >
                                                <div className="col-12 " style={{ justifyContent: "center" }} >
                                                    <form className="form-horizontal">
                                                        <div className="card-body">
                                                            <div className="form-group row">
                                                                <div className="col-sm-10">
                                                                    <input type="text"
                                                                        defaultValue={teach.title}
                                                                        name="title"
                                                                        className="form-control" id="inputTitle"
                                                                        placeholder="Title" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-10">
                                                                    <textarea className="form-control"
                                                                        defaultValue={teach.subtitle}
                                                                        name="subtitle"
                                                                        id="inputSubtitle" placeholder="Subtitle" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* /.card-body */}
                                                        <div className="card-footer">
                                                            <button onClick={(e) => {
                                                                e.preventDefault();
                                                                handleWhyTeachUpdateModalShow(teach)
                                                            }
                                                            } className="btn btn-info">Update</button>
                                                        </div>
                                                        {/* /.card-footer */}
                                                    </form>
                                                </div></div>

                                        </div>
                                    )
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {renderWhyTeachUpdateModal()}
        </>
    )
}

export default WhyTeachSection
