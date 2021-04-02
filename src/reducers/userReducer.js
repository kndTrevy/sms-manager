import { profsConstants, adminsConstants, profileConstants, updateUserConstants } from "../actions/constants";

const initialState = {
    totalPage: null,
    totalProfsPage: null,
    profs: [],
    profsNumber: null,
    adminsNumber: null, 
    admins: [],
    profile: {},
    activities:[],
    error: null,
    loading: false,
    message: ""
}

export default (state = initialState, action) => {

    switch (action.type) {
        case profsConstants.GET_PROFS_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case profsConstants.GET_PROFS_NUMBER_SUCCESS:
            state = {
                ...state,
                profsNumber:action.payload.profsNumber,
                loading: false
            }
            break;
        case profsConstants.GET_PROFS_SUCCESS:
            state = {
                ...state,
                profs: [...action.payload.profs],
                totalProfsPage: action.payload.totalPage,
                loading: false
            }
            break;
        case profsConstants.GET_PROFS_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case adminsConstants.GET_ADMIN_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case adminsConstants.GET_ADMIN_NUMBER_SUCCESS:
            state = {
                ...state,
                adminsNumber:action.payload.adminsNumber,
                loading: false
            }
            break;
        case adminsConstants.GET_ADMIN_SUCCESS:
            state = {
                ...state,
                admins: [...action.payload.admins],
                totalPage: action.payload.totalPage,
                loading: false
            }
            break;
        case adminsConstants.GET_ADMIN_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case profileConstants.GET_PROFILE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case profileConstants.GET_PROFILE_SUCCESS:
            state = {
                ...state,
                profile: action.payload.profile,
                activities : action.payload.activity,
                message: action.payload.message,
                loading: false
            }
            break;
        case profileConstants.GET_PROFILE_FAILURE:
            state = {
                ...state,
                loading: true,
                message: action.payload.message
            }
            break;
        case updateUserConstants.UPDATE_USER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case updateUserConstants.UPDATE_USER_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case updateUserConstants.UPDATE_USER_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
    }
    return state;
}