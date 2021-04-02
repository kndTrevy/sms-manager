import { actionContentConstants, sponsorConstants, aboutIntroConstants } from './constants';
import { axiosInstance as axios } from '../helpers/axios';

export const updateAboutSite = (form) => {
    return async dispatch => {
        dispatch({ type: aboutIntroConstants.UPDATE_ABOUT_INTRO_REQUEST });

        const res = await axios.post('/update/aboutInto', form);

        if (res.status === 201) {
            dispatch({ type: aboutIntroConstants.UPDATE_ABOUT_INTRO_SUCCESS });
        }

        if (res.status === 400) {
            dispatch({ type: aboutIntroConstants.UPDATE_ABOUT_INTRO_FAILURE });
        }
    }
}

export const getAboutSite = () => {
    return async dispatch => {
        dispatch({ type: aboutIntroConstants.GET_ABOUT_INTRO_REQUEST });

        const res = await axios.get('/get/aboutInto');

        if (res.status === 200) {
            const { aboutIntro } = res.data;
            dispatch({ type: aboutIntroConstants.GET_ABOUT_INTRO_SUCCESS, payload: { aboutIntro } });
        }

        if (res.status === 400) {
            dispatch({ type: aboutIntroConstants.GET_ABOUT_INTRO_FAILURE });
        }
    }
}

export const updateAboutTitle = (form) => {
    return async dispatch => {
        dispatch({ type: actionContentConstants.UPDATE_ACTION_CONTENT_REQUEST });

        const res = await axios.post('/update/actionContent', form);

        if (res.status === 201) {
            dispatch({ type: actionContentConstants.UPDATE_ACTION_CONTENT_SUCCESS });
        }

        if (res.status === 400) {
            dispatch({ type: actionContentConstants.UPDATE_ACTION_CONTENT_FAILURE });
        }
    }
}

export const getAboutTitle = () => {
    return async dispatch => {
        dispatch({ type: actionContentConstants.GET_ACTION_CONTENT_REQUEST });

        const res = await axios.get('/get/actionContent');

        if (res.status === 200) {
            const { actionContent } = res.data;
            dispatch({ type: actionContentConstants.GET_ACTION_CONTENT_SUCCESS, payload: { actionContent } });
        }

        if (res.status === 400) {
            dispatch({ type: actionContentConstants.GET_ACTION_CONTENT_FAILURE });
        }
    }
}

export const updateSponsor = (form) => {
    return async dispatch => {
        dispatch({ type: sponsorConstants.UPDATE_SPONSOR_REQUEST });

        const res = await axios.post('/update/sponsor', form);

        if (res.status === 201) {
            dispatch({ type: sponsorConstants.UPDATE_SPONSOR_SUCCESS });
        }

        if (res.status === 400) {
            dispatch({ type: sponsorConstants.UPDATE_SPONSOR_FAILURE });
        }
    }
}

export const addSponsor = (form) => {
    return async dispatch => {
        dispatch({ type: sponsorConstants.ADD_SPONSOR_REQUEST });

        const res = await axios.post('/create/sponsor', form);

        if (res.status === 201) {
            dispatch({ type: sponsorConstants.ADD_SPONSOR_SUCCESS });
        }

        if (res.status === 400) {
            dispatch({ type: sponsorConstants.ADD_SPONSOR_FAILURE });
        }
    }
}

export const deleteSponsor = (form) => {
    return async dispatch => {
        dispatch({ type: sponsorConstants.DELETE_SPONSOR_REQUEST });

        const res = await axios.post('/delete/sponsor', form);

        if (res.status === 201) {
            dispatch({ type: sponsorConstants.DELETE_SPONSOR_SUCCESS });
        }

        if (res.status === 400) {
            dispatch({ type: sponsorConstants.DELETE_SPONSOR_FAILURE });
        }
    }
}

export const getSponsor = () => {
    return async dispatch => {
        dispatch({ type: sponsorConstants.GET_SPONSOR_REQUEST });

        const res = await axios.get('/get/sponsor');

        if (res.status === 200) {
            dispatch({
                type: sponsorConstants.GET_SPONSOR_SUCCESS, payload: {
                    sponsors: res.data.sponsors
                }
            });
        }

        if (res.status === 400) {
            dispatch({ type: sponsorConstants.GET_SPONSOR_FAILURE });
        }
    }
}


