import { courseConstants } from '../actions/constants';

const initialState = {
    totalPage: null,
    numberOfCourses: null,
    courses: [],
    courseDetail: {},
    content:[],
    loading: false,
    error: null,
    message:""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case courseConstants.ADD_COURSE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case courseConstants.ADD_COURSE_SUCCESS:
            state = {
                ...state,
                loading: false,
                // course: action.payload.course
            }
            break;
        case courseConstants.ADD_COURSE_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
        case courseConstants.GET_ALL_COURSE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case courseConstants.GET_ALL_COURSE_SUCCESS:
            state = {
                ...state,
                courses: action.payload.courses,
                totalPage: action.payload.totalPage,
                loading: false
            }
            break;
        case courseConstants.GET_ALL_COURSE_NUMBER_SUCCESS:
            state = {
                ...state,
                numberOfCourses:action.payload.numberCourse,
                loading: false
            }
            break;
        case courseConstants.GET_ALL_COURSE_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
        case courseConstants.GET_COURSE_DETAIL_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case courseConstants.GET_COURSE_DETAIL_SUCCESS:
            state = {
                ...state,
                courseDetail: action.payload.courseDetail,
                content : action.payload.content,
                loading: false
            }
            break;
        case courseConstants.GET_COURSE_DETAIL_ERR_SUCCESS:
            state = {
                ...state,
                courseDetail: action.payload.courseDetail,
                content: [],
                message: action.payload.error,
                loading: false
            }
            break;
        case courseConstants.GET_COURSE_DEATIL_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
    }

    return state;
}