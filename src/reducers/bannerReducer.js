import {
    bannerConstants
} from '../actions/constants';

const initialState = {
    banners: [],
    loading: false,
    error: false,
    message: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case bannerConstants.GET_BANNERS_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case bannerConstants.GET_BANNERS_SUCCESS:
            state = {
                ...state,
                banners: action.payload.banners,
                loading: false
            }
            break;
        case bannerConstants.GET_BANNERS_FAILURE:
            state = {
                ...state,
                loading:false,
                message : action.payload.error
            }
            break;
    }

    return state;
}