import {
    brandImageConstants,
    homeHeaderConstants,
    topSubjectConstants,
    topSubjectTitleConstants,
    whyLearnConstants,
    whyLearnIntroConstants,
    whyTeachConstants,
    whyTeachIntroConstants,
    coursTitleConstants,
    blogTitleConstants,
    sponsorsTitleConstants,
    profsTitleConstants
} from '../actions/constants';

const initialState = {
    homeHeader: [],
    topSubjects: [],
    topSubjectTitle: [],
    whyLearn: [],
    whyLearnIntro: [],
    whyTeach: [],
    whyTeachIntro: [],
    coursTitle: [],
    blogTitle: [],
    profsTitle : [],
    sponsorsTitle : [],
    loading: false,
    error: false,
    message: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case homeHeaderConstants.UPDATE_HOME_HEADER_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case homeHeaderConstants.UPDATE_HOME_HEADER_SUCCESS:
            state = {
                ...state,
                loading:false
            }
            break;
        case homeHeaderConstants.UPDATE_HOME_HEADER_SUCCESS_FAILURE:
            state = {
                ...state,
                loading:false,
                message : action.payload.error
            }
            break;
        case homeHeaderConstants.GET_HOME_HEADER_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case homeHeaderConstants.GET_HOME_HEADER_SUCCESS:
            state = {
                ...state,
                homeHeader: [...action.payload.homeHeader],
                loading:false
            }
            break;
        case homeHeaderConstants.GET_HOME_HEADER_SUCCESS_FAILURE:
            state = {
                ...state,
                loading:false,
                message : action.payload.error
            }
            break;
        case topSubjectTitleConstants.UPDATE_TOP_SUBJECT_TITLE_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case topSubjectTitleConstants.UPDATE_TOP_SUBJECT_TITLE_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case topSubjectTitleConstants.UPDATE_TOP_SUBJECT_TITLE_FAILURE:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
            break;
        case topSubjectTitleConstants.GET_TOP_SUBJECT_TITLE_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case topSubjectTitleConstants.GET_TOP_SUBJECT_TITLE_SUCCESS:
            state = {
                ...state,
                topSubjectTitle: [...action.payload.topSubjectTitle],
                loading: false
            }
            break;
        case topSubjectTitleConstants.GET_TOP_SUBJECT_TITLE_FAILURE:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
            break;
        case sponsorsTitleConstants.UPDATE_SPONSORS_TITLE_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case sponsorsTitleConstants.UPDATE_SPONSORS_TITLE_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case sponsorsTitleConstants.UPDATE_SPONSORS_TITLE_FAILURE:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
            break;
        case sponsorsTitleConstants.GET_SPONSORS_TITLE_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case sponsorsTitleConstants.GET_SPONSORS_TITLE_SUCCESS:
            state = {
                ...state,
                sponsorsTitle: [...action.payload.sponsorsTitle],
                loading: false
            }
            break;
        case sponsorsTitleConstants.GET_SPONSORS_TITLE_FAILURE:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
            break;
        case profsTitleConstants.UPDATE_PROFS_TITLE_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case profsTitleConstants.UPDATE_PROFS_TITLE_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case profsTitleConstants.UPDATE_PROFS_TITLE_FAILURE:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
            break;
        case profsTitleConstants.GET_PROFS_TITLE_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case profsTitleConstants.GET_PROFS_TITLE_SUCCESS:
            state = {
                ...state,
                profsTitle: [...action.payload.profsTitle],
                loading: false
            }
            break;
        case profsTitleConstants.GET_PROFS_TITLE_FAILURE:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
            break;
        case whyLearnConstants.UPDATE_WHY_LEARN_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case whyLearnConstants.UPDATE_WHY_LEARN_SUCCESS:
            state = {
                ...state,
                loading:false
            }
            break;
        case whyLearnConstants.UPDATE_WHY_LEARN_FAILURE:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
            break;
        case whyLearnConstants.GET_WHY_LEARN_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case whyLearnConstants.GET_WHY_LEARN_SUCCESS:
            state = {
                ...state,
                whyLearn: [...action.payload.whyLearn],
                loading:false
            }
            break;
        case whyLearnConstants.GET_WHY_LEARN_FAILURE:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
            break;
        case whyLearnIntroConstants.UPDATE_WHY_LEARN_INTRO_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case whyLearnIntroConstants.UPDATE_WHY_LEARN_INTRO_SUCCESS:
            state = {
                ...state,
                loading: true
            }
            break;
        case whyLearnIntroConstants.UPDATE_WHY_LEARN_INTRO_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case whyLearnIntroConstants.GET_WHY_LEARN_INTRO_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case whyLearnIntroConstants.GET_WHY_LEARN_INTRO_SUCCESS:
            state = {
                ...state,
                whyLearnIntro: [...action.payload.whyLearnIntro],
                loading: true
            }
            break;
        case whyLearnIntroConstants.GET_WHY_LEARN_INTRO_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case whyTeachConstants.UPDATE_WHY_TEACH_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case whyTeachConstants.UPDATE_WHY_TEACH_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case whyTeachConstants.UPDATE_WHY_TEACH_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case whyTeachConstants.GET_WHY_TEACH_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case whyTeachConstants.GET_WHY_TEACH_SUCCESS:
            state = {
                ...state,
                whyTeach: [...action.payload.whyTeach],
                loading: false
            }
            break;
        case whyTeachConstants.GET_WHY_TEACH_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case whyTeachIntroConstants.UPDATE_WHY_TEACH_INTRO_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case whyTeachIntroConstants.UPDATE_WHY_TEACH_INTRO_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case whyTeachIntroConstants.UPDATE_WHY_TEACH_INTRO_FAILURE:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
            break;
        case whyTeachIntroConstants.GET_WHY_TEACH_INTRO_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case whyTeachIntroConstants.GET_WHY_TEACH_INTRO_SUCCESS:
            state = {
                ...state,
                whyTeachIntro: [...action.payload.whyTeachIntro],
                loading: false
            }
            break;
        case whyTeachIntroConstants.GET_WHY_TEACH_INTRO_FAILURE:
            state = {
                ...state,
                loading:false,
                message: action.payload.error
            }
            break;
        case coursTitleConstants.UPDATE_COURS_TITLE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case coursTitleConstants.UPDATE_COURS_TITLE_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case coursTitleConstants.UPDATE_COURS_TITLE_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case coursTitleConstants.GET_COURS_TITLE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case coursTitleConstants.GET_COURS_TITLE_SUCCESS:
            state = {
                ...state,
                coursTitle: [...action.payload.coursTitle],
                loading: false
            }
            break;
        case coursTitleConstants.GET_COURS_TITLE_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case blogTitleConstants.UPDATE_BLOG_TITLE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case blogTitleConstants.UPDATE_BLOG_TITLE_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case blogTitleConstants.UPDATE_BLOG_TITLE_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case blogTitleConstants.GET_BLOG_TITLE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case blogTitleConstants.GET_BLOG_TITLE_SUCCESS:
            state = {
                ...state,
                blogTitle: [...action.payload.blogTitle],
                loading: false
            }
            break;
        case blogTitleConstants.GET_BLOG_TITLE_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
    }

    return state;
}