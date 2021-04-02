import { logoAndDescConstants } from "../actions/constants";

const initialState = {
    logoAndDesc: [],
    error: null,
    loading: false,
    message: ""
}

export default (state = initialState, action) => {

    switch (action.type) {
        case logoAndDescConstants.GET_LOGO_AND_DESC_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case logoAndDescConstants.GET_LOGO_AND_DESC_SUCCESS:
            state = {
                ...state,
                logoAndDesc: action.payload.logoAndDescription,
                loading: false
            }
            break;
        case logoAndDescConstants.GET_LOGO_AND_DESC_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case logoAndDescConstants.UPDATE_LOGO_AND_DESC_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case logoAndDescConstants.UPDATE_LOGO_AND_DESC_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case logoAndDescConstants.UPDATE_LOGO_AND_DESC_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
    }
    return state;
}