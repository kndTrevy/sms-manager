import {
    aboutIntroConstants,
    sponsorConstants,
    testimonialConstants,
    donationConstants,
    actionConstants,
    actionContentConstants,
    historyAboutConstants
} from '../actions/constants';

const initialState = {
    aboutIntro: [],
    actions: [],
    testimonials: [],
    historyAbout: [],
    actionContent: [],
    donation: [],
    sponsors: [],
    loading: false,
    error: false,
    message: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case aboutIntroConstants.GET_ABOUT_INTRO_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case aboutIntroConstants.GET_ABOUT_INTRO_SUCCESS:
            state = {
                ...state,
                aboutIntro: [...action.payload.aboutIntro],
                loading: false
            }
            break;
        case aboutIntroConstants.GET_ABOUT_INTRO_FAILURE:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
            break;
        // case actionConstants.GET_ACTION_SUCCESS:
        //     state = {
        //         ...state,
        //         actions: [...action.payload.action]
        //     }
        //     break;
        // case testimonialConstants.GET_TESTIMONIAL_SUCCESS:
        //     state = {
        //         ...state,
        //         testimonials: [...action.payload.testimonials]
        //     }
        //     break;
        // case historyAboutConstants.GET_HISTORY_ABOUT_SUCCESS:
        //     state = {
        //         ...state,
        //         historyAbout: [...action.payload.historyAbout]
        //     }
        //     break;
        case actionContentConstants.GET_ACTION_CONTENT_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case actionContentConstants.GET_ACTION_CONTENT_SUCCESS:
            state = {
                ...state,
                actionContent: [...action.payload.actionContent],
                loading:false
            }
            break;
        case actionContentConstants.GET_ACTION_CONTENT_FAILURE:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
            break;
        case sponsorConstants.GET_SPONSOR_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case sponsorConstants.GET_SPONSOR_SUCCESS:
            state = {
                ...state,
                sponsors: [...action.payload.sponsors],
                loading:false
            }
            break;
        case sponsorConstants.GET_SPONSOR_FAILURE:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
            break;
        case sponsorConstants.ADD_SPONSOR_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case sponsorConstants.ADD_SPONSOR_SUCCESS:
            state = {
                ...state,
                loading:false
            }
            break;
        case sponsorConstants.ADD_SPONSOR_FAILURE:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
            break;
         case sponsorConstants.UPDATE_SPONSOR_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case sponsorConstants.UPDATE_SPONSOR_SUCCESS:
            state = {
                ...state,
                loading:false
            }
            break;
        case sponsorConstants.UPDATE_SPONSOR_FAILURE:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
            break;
        case sponsorConstants.DELETE_SPONSOR_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case sponsorConstants.DELETE_SPONSOR_SUCCESS:
            state = {
                ...state,
                loading:false
            }
            break;
        case sponsorConstants.DELETE_SPONSOR_FAILURE:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
            break;
        // case donationConstants.GET_DONATION_SUCCESS:
        //     state = {
        //         ...state,
        //         donation: [...action.payload.donation]
        //     }
        //     break;

    }

    return state;
}