import { adminsConstants, profsConstants, updateUserConstants, profileConstants } from "./constants";
import { axiosInstance as axios } from '../helpers/axios';

export const activateProfAccount = (id) => {
    return async (dispatch) => {
        dispatch({ type: profsConstants.ACTIVE_PROFS_REQUEST });
        const res = await axios.post('/prof/activation', { id });

        if (res.status === 201) {
            dispatch({ type: profsConstants.ACTIVE_PROFS_SUCCESS });
        }

        if (res.status === 400) {
            dispatch({ type: profsConstants.ACTIVE_PROFS_FAILURE });
        }
    }
}

export const registerAdmin = (form) => {
    return async (dispatch) => {
        dispatch({ type: adminsConstants.ADD_ADMIN_REQUEST });

        const res = await axios.post("/admin/signup", form);

        if (res.status === 201) {
            dispatch({ type: adminsConstants.ADD_ADMIN_SUCCESS });
        }
        if (res.status === 400) {
            dispatch({
                type: adminsConstants.ADD_ADMIN_FAILURE, payload: {
                    message: res.data.message
                }
            })
        }
    }
}

export const getProfile = (_id) => {
    return async (dispatch) => {
        dispatch({ type: profileConstants.GET_PROFILE_REQUEST });
        const res = await axios.get(`/profile/${_id}`);

        if (res.status === 200) {
            dispatch({ type: profileConstants.GET_PROFILE_SUCCESS, payload:{
                profile:res.data.user, activity: res.data.activity, message:res.data.message
            } });
        }
        if (res.status === 400) {
            dispatch({ type: profileConstants.GET_PORIFLE_FAILURE });
        }
    }
}

export const getProfs = (pageNumber) => {
    return async (dispatch) => {
        dispatch({ type: profsConstants.GET_PROFS_REQUEST });
        const res = await axios.get(`/get/adminProfs?page=${pageNumber}`);

        if (res.status === 200) {
            dispatch({ type: profsConstants.GET_PROFS_SUCCESS, payload:{
                profs:res.data.profs, totalPage: res.data.totalPage
            } });
        }
        if (res.status === 400) {
            dispatch({ type: profsConstants.GET_PROFS_FAILURE });
        }
    }
}

export const getAdmins = (pageNumber) => {
    return async (dispatch) => {
        dispatch({ type: adminsConstants.GET_ADMIN_REQUEST });
        const res = await axios.get(`/get/admins?page=${pageNumber}`);

        if (res.status === 200) {
            dispatch({ type: adminsConstants.GET_ADMIN_SUCCESS, payload:{
                admins:res.data.admins,
                totalPage: res.data.totalPage
            } });
        }
        if (res.status === 400) {
            dispatch({ type: adminsConstants.GET_ADMIN_FAILURE });
        }
    }
}

export const updateProfile = (form) => {
    return async (dispatch) => {
        dispatch({ type: updateUserConstants.UPDATE_USER_REQUEST });

        const res = await axios.post("/admin/updateProfile", form);

        if (res.status === 201) {
            dispatch({ type: updateUserConstants.UPDATE_USER_SUCCESS });
        }
        if (res.status === 400) {
            dispatch({
                type: updateUserConstants.UPDATE_USER_FAILURE, payload: {
                    message: res.data.message
                }
            })
        }
    }
}