import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    updateWhyLearnIntro as updatesWhyLearnIntro,
    updateWhyLearn as updatesWhyLearn,
    getWhyLearnIntro,
    getWhyLearn
} from '../../../actions/home.action';
import Modal from '../Modal';
import { Row, Col, Form } from 'react-bootstrap';
import { toast } from "react-toastify";

const WhyLearnSection = () => {

    const home = useSelector(state => state.home);
    const dispatch = useDispatch();

    const [whyLearnUpdate, setWhyLearnUpdate] = useState(null);
    const [whyLearnIntroTitle, setWhyLearnIntroTitle] = useState('');
    const [whyLearnIntroSubtitle, setWhyLearnIntroSubtitle] = useState('');
    const [whyLearnIntroId, setWhyLearnIntroId] = useState('');
    const [whyLearnTitle, setWhyLearnTitle] = useState(home.whyLearnIntro.length > 0 && home.whyLearnIntro[0].title);
    const [whyLearnSubtitle, setWhyLearnSubtitle] = useState(home.whyLearnIntro.length > 0 && home.whyLearnIntro[0].subtitle);
    const [whyLearnId, setWhyLearnId] = useState(home.whyLearnIntro.length > 0 && home.whyLearnIntro[0]._id);
    const [whyLearnIntroImg, setWhyLearnIntroImg] = useState('');
    const [showUpdateWhyLearnModal, setShowUpdateWhyLearnModal] = useState(false);



    const handleWhyLearnUpdateModalShow = (whyLearn) => {
        setWhyLearnUpdate(whyLearn);
        setWhyLearnIntroTitle(whyLearn.title);
        setWhyLearnIntroSubtitle(whyLearn.subtitle);
        setWhyLearnIntroId(whyLearn._id);
        setShowUpdateWhyLearnModal(true);
    }

    const handleWhyLearnUpdateModalClose = () => {
        setShowUpdateWhyLearnModal(false)
    }

    const updateWhyLearnIntro = (e) => {
        e.preventDefault();
        const form = {
            title: whyLearnTitle,
            subtitle: whyLearnSubtitle,
            _id: whyLearnId
        }

        dispatch(updatesWhyLearnIntro(form)).then(result => {
            toast.success("Updated");
            dispatch(getWhyLearnIntro());
        });
    }

    const updateWhyLearn = () => {
        const form = new FormData();

        form.append('title', whyLearnIntroTitle);
        form.append('subtitle', whyLearnIntroSubtitle);
        form.append('image', whyLearnIntroImg);
        form.append('_id', whyLearnIntroId);

        dispatch(updatesWhyLearn(form)).then(result => {
            toast.success("Updated")
            dispatch(getWhyLearn());
        });

        setWhyLearnUpdate("");
        setWhyLearnIntroTitle("");
        setWhyLearnIntroSubtitle("");
        setWhyLearnIntroId("");
        setShowUpdateWhyLearnModal(false);
    }


    const renderWhyLearnUpdateModal = () => {

        if (!whyLearnUpdate) {
            return null;
        }

        return (

            <Modal
                show={showUpdateWhyLearnModal}
                handleClose={handleWhyLearnUpdateModalClose}
                modalTitle={'Update Why Learn'}
                buttonTtile={'Save Changes'}
                onSubmit={updateWhyLearn}
            >
                <Row>

                    <Col>
                        <Form.Group>
                            <Form.Label >Title</Form.Label>
                            <Form.Control className="form-control-sm" type="text" placeholder="Enter category name" value={whyLearnIntroTitle} onChange={(e) => setWhyLearnIntroTitle(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label >Subtitle</Form.Label>
                            <Form.Control className="form-control-sm" type="text" placeholder="Enter category name" value={whyLearnIntroSubtitle} onChange={(e) => setWhyLearnIntroSubtitle(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="form-group">
                            <input className="form-control-sm" type="file" name="categoryImg" onChange={(e) => setWhyLearnIntroImg(e.target.files[0])} />
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
                        <div className="col-md-6 mx-auto" >
                            <form className="form-horizontal" >
                                <div className="card-body">
                                    <div className="form-group row">
                                        <label htmlFor="whyLearnTitle" className="col-sm-2 col-form-label">Title</label>
                                        <div className="col-sm-10">
                                            <input type="text"
                                                value={whyLearnTitle}
                                                onChange={(e) => setWhyLearnTitle(e.target.value)}
                                                className="form-control" id="whyLearnTitle"
                                                placeholder="why Learn Intro Title" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="whyLearnSubtitle" className="col-sm-2 col-form-label">Subtitle</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control"
                                                value={whyLearnSubtitle}
                                                onChange={(e) => setWhyLearnSubtitle(e.target.value)}
                                                id="whyLearnSubtitle" placeholder="why Learn Intro Subtitle" />
                                        </div>
                                    </div>
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <button
                                        onClick={updateWhyLearnIntro}
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
                                    home.whyLearn.length > 0 && home.whyLearn.map((learn) =>

                                    (
                                        <div className=" col-md-12 col-xl-4" key={learn._id}>
                                            <div className="row" >
                                                <div className="col-12 text-center">
                                                    <img src={learn.image} alt="images" className="img-fluid" />
                                                </div>

                                            </div>

                                            <div className="row" >
                                                <div className="col-12 " style={{ justifyContent: "center" }} >
                                                    <form className="form-horizontal">
                                                        <div className="card-body">
                                                            <div className="form-group row">
                                                                <div className="col-sm-10">
                                                                    <input type="text"
                                                                        defaultValue={learn.title}
                                                                        name="title"
                                                                        className="form-control"
                                                                        placeholder="Title" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-10">
                                                                    <textarea className="form-control"
                                                                        defaultValue={learn.subtitle}
                                                                        name="subtitle"
                                                                         placeholder="Subtitle" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* /.card-body */}
                                                        <div className="card-footer">
                                                            <button onClick={(e) => {
                                                                e.preventDefault();
                                                                handleWhyLearnUpdateModalShow(learn)
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

            {renderWhyLearnUpdateModal()}
        </>
    )
}

export default WhyLearnSection
