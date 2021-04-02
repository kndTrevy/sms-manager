import { addressConstants } from './constants';
import { axiosInstance as axios } from '../helpers/axios';

export const updateContact = (form) => {
    return async dispatch => {
        dispatch({ type: addressConstants.UPDATE_CONTACT_REQUEST });

        const res = await axios.post("/contact/update", form);

        if (res.status === 201) {
            dispatch({ type: addressConstants.UPDATE_CONTACT_SUCCESS });
        }

        if (res.status === 400) {
            dispatch({ type: addressConstants.UPDATE_CONTACT_FAILURE })
        }
    }
}

export const getContact = () => {
    return async dispatch => {
        dispatch({ type: addressConstants.GET_ADDRESS_REQUEST });
        const res = await axios.get("/contact/get");
        if (res.status === 200) {
            dispatch({ type: addressConstants.GET_ADDRESS_SUCCESS, payload: res.data.addressContact});
        }
        if (res.status === 400) {
            dispatch({ type: addressConstants.GET_ADDRESS_FAILURE });
        }
    }
}