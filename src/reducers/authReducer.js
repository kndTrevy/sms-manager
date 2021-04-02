import { authConstants, profsConstants } from '../actions/constants';

const initialState = {
    token: null,
    user: {},
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                authenticate: true,
                authenticating: false
            }
            break;

        case authConstants.LOGIN_FAILURE:
            state = {
                ...state
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initialState
            }
            break;
        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case profsConstants.ACTIVE_PROFS_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case profsConstants.ACTIVE_PROFS_SUCCESS:
            state = {
                ...state,
                loading: false,
            }
            break;
        case profsConstants.ACTIVE_PROFS_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case authConstants.REJECT_PROFS_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstants.REJECT_PROFS_SUCCESS:
            state = {
                ...state,
                loading: false,
            }
            break;
        case authConstants.REJECT_PROFS_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
    }

    return state;

}