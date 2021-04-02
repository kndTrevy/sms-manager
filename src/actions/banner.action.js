import { bannerConstants } from './constants';
import { axiosInstance as axios } from '../helpers/axios';

export const updateBanner = (data) => {
    return async dispatch => {
        dispatch({ type: bannerConstants.UPDATE_BANNERS_REQUEST })

        const res = await axios.post('/banner/update', data);


        if (res.status === 201) {
            dispatch({ type: bannerConstants.UPDATE_BANNERS_SUCCESS })
        }

        if (res.status === 400) {
            dispatch({ type: bannerConstants.UPDATE_BANNERS_FAILURE })
        }

    }
}

export const getBanner = () => {
    return async dispatch => {
        dispatch({ type: bannerConstants.GET_BANNERS_REQUEST });

        const res = await axios.get('banner/get');

        if (res.status === 200) {
            dispatch({
                type: bannerConstants.GET_BANNERS_SUCCESS, payload:{
                    banners: res.data.banner
                }
            })
        }

        if (res.status === 400) {
            dispatch({ type: bannerConstants.GET_BANNERS_FAILURE });
        }


    }
}