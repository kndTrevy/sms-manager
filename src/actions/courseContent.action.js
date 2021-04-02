import { courseContentConstants } from './constants';
import { axiosInstance as axios } from '../helpers/axios';

export const addCourseContent = (form) => {
    return async (dispatch) => {
        dispatch({ type: courseContentConstants.ADD_COURSE_CONTENT_REQUEST });

        const res = await axios.post('/courseContent/create', form);
        if (res.status === 201) {
            dispatch({
                type: courseContentConstants.ADD_COURSE_CONTENT_SUCCESS, payload: {
                    courseContent: res.data.courseContent
                }
            });
        } else {
            dispatch({
                type: courseContentConstants.ADD_COURSE_CONTENT_FAILURE, payload: {
                    error: res.data.message
                }
            });
        }

    }
}

export const getCourseContentBySlug = (slug) => {
    return async (dispatch) => {
        dispatch({ type: courseContentConstants.GET_ALL_COURSE_CONTENT_REQUEST });

        const res = await axios.get(`/coursContent/${slug}`);

        if (res.status === 200) {
            dispatch({
                type: courseContentConstants.GET_ALL_COURSE_CONTENT_SUCCESS, payload: {
                    courseContent: res.data.courseContent
                }
            });
        }
        if (res.status === 400) {
            dispatch({
                type: courseContentConstants.GET_ALL_COURSE_CONTENT_FAILURE
            });
        }

    }
}