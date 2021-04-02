import {
    brandImageConstants,
    homeHeaderConstants,
    whyTeachConstants,
    whyTeachIntroConstants,
    topSubjectTitleConstants,
    whyLearnConstants,
    whyLearnIntroConstants,
    coursTitleConstants,
    profsTitleConstants,
    sponsorsTitleConstants
} from './constants';
import { axiosInstance as axios } from '../helpers/axios';

export const updateHomeHeader = (form) => {
    return async (dispatch) => {
        dispatch({ type: homeHeaderConstants.UPDATE_HOME_HEADER_REQUEST })
        const res = await axios.post('/update/homeHeader', form);


        if (res.status === 201) {
            dispatch({ type: homeHeaderConstants.UPDATE_HOME_HEADER_SUCCESS })
        }
        if (res.status === 400) {
            dispatch({ type: homeHeaderConstants.UPDATE_HOME_HEADER_FAILURE })
        }
    }
}

export const getHomeHeader = () => {
    return async dispatch => {
        dispatch({ type: homeHeaderConstants.GET_HOME_HEADER_REQUEST });
        const res = await axios.get('/get/homeHeader');

        if (res.status === 200) {

            const { homeHeader } = res.data

            dispatch({ type: homeHeaderConstants.GET_HOME_HEADER_SUCCESS, payload: { homeHeader } });
        }
        if (res.status === 400) {
            dispatch({ type: homeHeaderConstants.GET_HOME_HEADER_FAILURE });
        }
    }
}


export const updateTopSubjectIntro = (data) => {
    return async (dispatch) => {
        dispatch({ type: topSubjectTitleConstants.UPDATE_TOP_SUBJECT_TITLE_REQUEST });

        const res = await axios.post('/update/topSubjectTitle', { ...data });

        if (res.status === 201) {
            dispatch({ type: topSubjectTitleConstants.UPDATE_TOP_SUBJECT_TITLE_SUCCESS });
        }

        if (res.status === 400) {
            dispatch({ type: topSubjectTitleConstants.UPDATE_TOP_SUBJECT_TITLE_FAILURE });
        }
    }
}

export const getTopSubjectIntro = () => {
    return async dispatch => {
        dispatch({ type: topSubjectTitleConstants.GET_TOP_SUBJECT_TITLE_REQUEST });

        const res = await axios.get('/get/topSubjectTitle');

        if (res.status === 200) {
            const { topSubjectTitle } = res.data;
            dispatch({ type: topSubjectTitleConstants.GET_TOP_SUBJECT_TITLE_SUCCESS, payload: { topSubjectTitle } })
        }
        if (res.status === 400) {
            dispatch({ type: topSubjectTitleConstants.GET_TOP_SUBJECT_TITLE_FAILURE });
        }

    }
}

export const updateProfsTitle = (data) => {
    return async (dispatch) => {
        dispatch({ type: profsTitleConstants.UPDATE_PROFS_TITLE_REQUEST });

        const res = await axios.post('/update/profsTitle', { ...data });

        if (res.status === 201) {
            dispatch({ type: profsTitleConstants.UPDATE_PROFS_TITLE_SUCCESS });
        }

        if (res.status === 400) {
            dispatch({ type: profsTitleConstants.UPDATE_PROFS_TITLE_FAILURE });
        }
    }
}

export const getProfsTitle = () => {
    return async dispatch => {
        dispatch({ type: profsTitleConstants.GET_PROFS_TITLE_REQUEST });

        const res = await axios.get('/get/profsTitle');

        if (res.status === 200) {
            const { profsTitle } = res.data;
            dispatch({ type: profsTitleConstants.GET_PROFS_TITLE_SUCCESS, payload: { profsTitle } })
        }
        if (res.status === 400) {
            dispatch({ type: profsTitleConstants.GET_PROFS_TITLE_FAILURE });
        }

    }
}

export const updateSponsorsTitle = (data) => {
    return async (dispatch) => {
        dispatch({ type: sponsorsTitleConstants.UPDATE_SPONSORS_TITLE_REQUEST });

        const res = await axios.post('/update/sponsorsTitle', { ...data });

        if (res.status === 201) {
            dispatch({ type: sponsorsTitleConstants.UPDATE_SPONSORS_TITLE_SUCCESS });
        }

        if (res.status === 400) {
            dispatch({ type: sponsorsTitleConstants.UPDATE_SPONSORS_TITLE_FAILURE });
        }
    }
}

export const getSponsorsTitle = () => {
    return async dispatch => {
        dispatch({ type: sponsorsTitleConstants.GET_SPONSORS_TITLE_REQUEST });

        const res = await axios.get('/get/sponsorsTitle');

        if (res.status === 200) {
            const { sponsorsTitle } = res.data;
            dispatch({ type: sponsorsTitleConstants.GET_SPONSORS_TITLE_SUCCESS, payload: { sponsorsTitle } })
        }
        if (res.status === 400) {
            dispatch({ type: sponsorsTitleConstants.GET_SPONSORS_TITLE_FAILURE });
        }

    }
}


export const updateCourseTitle = (data) => {
    return async (dispatch) => {
        dispatch({ type: coursTitleConstants.UPDATE_COURS_TITLE_REQUEST });

        const res = await axios.post('/update/coursTitle', data);

        if (res.status === 201) {
            dispatch({ type: coursTitleConstants.UPDATE_COURS_TITLE_SUCCESS });
        }

        if (res.status === 400) {
            dispatch({ type: coursTitleConstants.UPDATE_COURS_TITLE_FAILURE });
        }
    }
}

export const getCourseTitle = () => {
    return async dispatch => {
        dispatch({ type: coursTitleConstants.GET_COURS_TITLE_REQUEST });

        const res = await axios.get('/get/coursTitle');

        if (res.status === 200) {
            const { coursTitle } = res.data;
            dispatch({ type: coursTitleConstants.GET_COURS_TITLE_SUCCESS, payload: { coursTitle } })
        }
        if (res.status === 400) {
            dispatch({ type: coursTitleConstants.GET_COURS_TITLE_FAILURE });
        }

    }
}

export const updateWhyLearnIntro = (data) => {
    return async (dispatch) => {
        dispatch({ type: whyLearnIntroConstants.UPDATE_WHY_LEARN_INTRO_REQUEST });

        const res = await axios.post('/update/whyLearnIntro', {...data});

        if (res.status === 201) {
            dispatch({ type: whyLearnIntroConstants.UPDATE_WHY_LEARN_INTRO_SUCCESS });
        }

        if (res.status === 400) {
            dispatch({ type: whyLearnIntroConstants.UPDATE_WHY_LEARN_INTRO_FAILURE });
        }
    }
}

export const getWhyLearnIntro = () => {
    return async dispatch => {
        dispatch({ type: whyLearnIntroConstants.GET_WHY_LEARN_INTRO_REQUEST });

        const res = await axios.get('/get/whyLearnIntro');

        if (res.status === 200) {
            const { whyLearnIntro } = res.data
            dispatch({ type: whyLearnIntroConstants.GET_WHY_LEARN_INTRO_SUCCESS, payload: { whyLearnIntro } });
        }

        if (res.status === 400) {
            dispatch({ type: whyLearnIntroConstants.GET_WHY_LEARN_INTRO_FAILURE })
        }

    }
}

export const updateWhyLearn = (data) => {
    return async (dispatch) => {
        dispatch({ type: whyLearnConstants.UPDATE_WHY_LEARN_REQUEST });


        const res = await axios.post('/update/whyLearn', data);


        if (res.status === 201) {
            dispatch({ type: whyLearnConstants.UPDATE_WHY_LEARN_SUCCESS });
        }

        if (res.status === 400) {
            dispatch({ type: whyLearnConstants.UPDATE_WHY_LEARN_FAILURE });
        }
    }
}

export const getWhyLearn = () => {
    return async dispatch => {
        dispatch({ type: whyLearnConstants.GET_WHY_LEARN_REQUEST });

        const res = await axios.get('/get/whyLearn');

        if (res.status === 200) {
            const { whyLearn } = res.data
            dispatch({ type: whyLearnConstants.GET_WHY_LEARN_SUCCESS, payload: { whyLearn } });
        }

        if (res.status === 400) {
            dispatch({ type: whyLearnConstants.GET_WHY_LEARN_FAILURE })
        }

    }
}

export const updateWhyTeachIntro = (data) => {
    return async (dispatch) => {
        dispatch({ type: whyTeachIntroConstants.UPDATE_WHY_TEACH_INTRO_REQUEST });

        const res = await axios.post('/update/whyTeachIntro', {...data});

        if (res.status === 201) {
            dispatch({ type: whyTeachIntroConstants.UPDATE_WHY_TEACH_INTRO_SUCCESS });
        }

        if (res.status === 400) {
            dispatch({ type: whyTeachIntroConstants.UPDATE_WHY_TEACH_INTRO_FAILURE });
        }
    }
}

export const getWhyTeachIntro = () => {
    return async dispatch => {
        dispatch({ type: whyTeachIntroConstants.GET_WHY_TEACH_INTRO_REQUEST });

        const res = await axios.get('/get/whyTeachIntro');

        if (res.status === 200) {
            const { whyTeachIntro } = res.data
            dispatch({ type: whyTeachIntroConstants.GET_WHY_TEACH_INTRO_SUCCESS, payload: { whyTeachIntro } });
        }

        if (res.status === 400) {
            dispatch({ type: whyTeachIntroConstants.GET_WHY_TEACH_INTRO_FAILURE })
        }

    }
}

export const updateWhyTeach = (data) => {
    return async (dispatch) => {
        dispatch({ type: whyTeachConstants.UPDATE_WHY_TEACH_REQUEST });


        const res = await axios.post('/update/whyTeach', data);

        if (res.status === 201) {
            dispatch({ type: whyTeachConstants.UPDATE_WHY_TEACH_SUCCESS });
        }

        if (res.status === 400) {
            dispatch({ type: whyTeachConstants.UPDATE_WHY_TEACH_FAILURE });
        }
    }
}

export const getWhyTeach = () => {
    return async dispatch => {
        dispatch({ type: whyTeachConstants.GET_WHY_TEACH_REQUEST });

        const res = await axios.get('/get/whyTeach');

        if (res.status === 200) {
            const { whyTeach } = res.data
            dispatch({ type: whyTeachConstants.GET_WHY_TEACH_SUCCESS, payload: { whyTeach } });
        }

        if (res.status === 400) {
            dispatch({ type: whyTeachConstants.GET_WHY_TEACH_FAILURE })
        }

    }
}