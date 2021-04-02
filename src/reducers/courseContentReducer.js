import { courseContentConstants } from '../actions/constants';

const initialState = {
    courseContents: [],
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case courseContentConstants.ADD_COURSE_CONTENT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case courseContentConstants.ADD_COURSE_CONTENT_SUCCESS:
            state = {
                ...state,
                loading: false,
                // course: action.payload.course
            }
            break;
        case courseContentConstants.ADD_COURSE_CONTENT_FAILURE:
            state = {
                ...state,
                error: action.payload.error
            }
            break;
        case courseContentConstants.GET_ALL_COURSE_CONTENT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case courseContentConstants.GET_ALL_COURSE_CONTENT_SUCCESS:
            state = {
                ...initialState,
                courseContents: [action.payload.courseContent],
                loading: false
            }
            break;
        case courseContentConstants.GET_ALL_COURSE_CONTENT_FAILURE:
            state = {
                ...state,
                loading: false
            }
            break;
    }

    return state;
}