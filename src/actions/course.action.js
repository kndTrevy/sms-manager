import { courseConstants } from './constants';
import { axiosInstance as axios } from '../helpers/axios';

export const addCourse = (form) => {
    return async (dispatch) => {
        dispatch({ type: courseConstants.ADD_COURSE_REQUEST });

        const res = await axios.post('/course/create', form);

        if (res.status === 201) {
            dispatch({
                type: courseConstants.ADD_COURSE_SUCCESS, payload: {
                    course: res.data.course
                }
            });
        } else {
            dispatch({
                type: courseConstants.ADD_COURSE_FAILURE, payload: {
                    error: res.data.message
                }
            });
        }

    }
}

export const getCourses = (pageNumber) => {
    return async (dispatch) => {
        dispatch({ type: courseConstants.GET_ALL_COURSE_REQUEST });

        const res = await axios.get('/courses/get?page=' + pageNumber);

        if (res.status === 200) {
            dispatch({
                type: courseConstants.GET_ALL_COURSE_SUCCESS, payload: {
                    courses: res.data.courses,
                    totalPage: res.data.totalPage
                }
            });
        }
        if (res.status === 400) {
            dispatch({
                type: courseConstants.GET_ALL_COURSE_FAILURE
            });
        }

    }
}

export const getCourseById = (_id) => {
    return async (dispatch) => {
        dispatch({ type: courseConstants.GET_COURSE_DETAIL_REQUEST });

        const res = await axios.get(`/course/${_id}`);

        if (res.status === 200) {
            dispatch({
                type: courseConstants.GET_COURSE_DETAIL_SUCCESS, payload: {
                    courseDetail: res.data.courseDetail,
                    content: res.data.content
                }
            });
        }
        if (res.status === 204) {
            dispatch({
                type: courseConstants.GET_COURSE_DETAIL_ERR_SUCCESS, payload: {
                    courseDetail: res.data.courseDetail,
                    error: res.data.error
                }
            });
        }
        if (res.status === 400) {
            dispatch({
                type: courseConstants.GET_COURSE_DEATIL_FAILURE
            });
        }

    }
}

export const deleteCourse = (form) => {
    return async (dispatch) => {
        dispatch({ type: courseConstants.DELETE_COURSE_REQUEST });

        const res = await axios.post('/course/delete', form);

        if (res.status === 201) {
            dispatch({ type: courseConstants.DELETE_COURSE_SUCCESS });
        } else {
            dispatch({
                type: courseConstants.DELETE_COURSE_FAILURE, payload: {
                    error: res.data.message
                }
            });
        }

    }
}

export const disableCourse = (form) => {
    return async (dispatch)=>{
        dispatch({ type: courseConstants.DISABLE_COURSE_REQUEST });

        const res = await axios.post(`/course/disable`, form);

        if (res.status === 201) {
            dispatch({ type: courseConstants.DISABLE_COURSE_SUCCESS });
        } 
        if(res.status === 400) {
            dispatch({
                type: courseConstants.DISABLE_COURSE_FAILURE, payload: {
                    error: res.data.error
                }
            });
        }
    }
}

export const enableCourse = (form) => {
    return async (dispatch)=>{
        dispatch({ type: courseConstants.ENABLE_COURSE_REQUEST });

        const res = await axios.post(`/course/enable`, form);

        if (res.status === 201) {
            dispatch({ type: courseConstants.ENABLE_COURSE_SUCCESS });
        } 
        if(res.status === 400) {
            dispatch({
                type: courseConstants.ENABLE_COURSE_FAILURE, payload: {
                    error: res.data.error
                }
            });
        }
    }
}