import {
    blogConstants
} from '../actions/constants';

const initialState = {
    totalPage:null,
    blogs: [],
    blogDetail: {},
    loading: false,
    error: false,
    message: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case blogConstants.ADD_BLOG_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case blogConstants.ADD_BLOG_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case blogConstants.ADD_BLOG_FAILURE:
            state = {
                ...state,
                laoding: false,
                error: true,
                message: action.payload.message
            }
            break;

        case blogConstants.UPDATE_BLOG_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case blogConstants.UPDATE_BLOG_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case blogConstants.UPDATE_BLOG_FAILURE:
            state = {
                ...state,
                laoding: false,
                error: true,
                message: action.payload.message
            }
            break;

        case blogConstants.DELETE_BLOG_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case blogConstants.DELETE_BLOG_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case blogConstants.DELETE_BLOG_FAILURE:
            state = {
                ...state,
                laoding: false,
                error: true,
                message: action.payload.message
            }
            break;

        case blogConstants.GET_BLOG_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case blogConstants.GET_BLOG_SUCCESS:
            state = {
                ...state,
                blogs: [...action.payload.blog],
                totalPage: action.payload.totalPage,
                loading: false
            }
            break;
        case blogConstants.GET_BLOG_FAILURE:
            state = {
                ...state,
                laoding: false,
                error: true,
                message: action.payload.message
            }
            break;
        case blogConstants.GET_BLOG_DETAIL_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case blogConstants.GET_BLOG_DETAIL_SUCCESS:
            state = {
                ...state,
                blogDetail: action.payload.blogDetail,
                loading: false
            }
            break;
        case blogConstants.GET_BLOG_DETAIL_FAILURE:
            state = {
                ...state,
                laoding: false,
                error: true,
                message: action.payload.message
            }
            break;

    }

    return state;
}