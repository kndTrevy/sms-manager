import { logoAndDescConstants } from './constants';
import { axiosInstance as axios } from '../helpers/axios';

export const updateLogo = (form) => {
    return async dispatch => {
        dispatch({ type: logoAndDescConstants.UPDATE_LOGO_AND_DESC_REQUEST })

        const res = await axios.post('/logoDesc/update', form);

        if (res.status === 201) {
            dispatch({ type: logoAndDescConstants.UPDATE_LOGO_AND_DESC_SUCCESS })
        }

        if (res.status === 400) {
            dispatch({ type: logoAndDescConstants.UPDATE_LOGO_AND_DESC_FAILURE })
        }

    }
}

export const getLogo = () => {
    return async dispatch => {
        dispatch({ type: logoAndDescConstants.GET_LOGO_AND_DESC_REQUEST });

        const res = await axios.get('/logoDesc/get');

        if (res.status === 200) {
            dispatch({
                type: logoAndDescConstants.GET_LOGO_AND_DESC_SUCCESS, payload:
                {
                    logoAndDescription: res.data.logoAnDesc
                }
            })
        }

        if (res.status === 400) {
            dispatch({ type: logoAndDescConstants.GET_LOGO_AND_DESC_FAILURE });
        }


    }
}