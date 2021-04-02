import { blogConstants } from './constants';
import { axiosInstance as axios } from '../helpers/axios';

export const addBlog = (form) => {
    return async (dispatch) => {
        dispatch({ type: blogConstants.ADD_BLOG_REQUEST });

        const res = await axios.post('/blog/create', form);

        if (res.status === 201) {
            dispatch({ type: blogConstants.ADD_BLOG_SUCCESS });
        }
        if (res.status === 400) {
            dispatch({ type: blogConstants.ADD_BLOG_FAILURE });
        }

    }
}

export const updateBlog = (form) => {
    return async dispatch => {
        dispatch({ type: blogConstants.UPDATE_BLOG_REQUEST });

        const res = await axios.post('/blog/update', form);


        if (res.status === 201) {
            dispatch({ type: blogConstants.UPDATE_BLOG_SUCCESS });
        }
        if (res.status === 400) {
            dispatch({ type: blogConstants.UPDATE_BLOG_FAILURE })
        }
    }
}

export const getBlog = (pageNumber) => {
    return async dispatch => {
        dispatch({ type: blogConstants.GET_BLOG_REQUEST });

        const res = await axios.get(`/blog/getAllBlog?page=${pageNumber}`);


        if (res.status === 200) {
            const { blog, totalPage } = res.data;

            dispatch({ type: blogConstants.GET_BLOG_SUCCESS, payload: { blog, totalPage } });
        }
        if (res.status === 400) {
            dispatch({ type: blogConstants.GET_BLOG_FAILURE })
        }
    }
}

export const getBlogById = (_id) => {
    return async dispatch => {
        dispatch({ type: blogConstants.GET_BLOG_DETAIL_REQUEST });

        const res = await axios.get(`/blog/${_id}`);


        if (res.status === 200) {
            const { blogDetail } = res.data;

            dispatch({ type: blogConstants.GET_BLOG_DETAIL_SUCCESS, payload: { blogDetail } });
        }
        if (res.status === 400) {
            dispatch({ type: blogConstants.GET_BLOG_DETAIL_FAILURE })
        }
    }
}

export const deleteBlog = (_id) => {
    return async dispatch => {
        dispatch({ type: blogConstants.DELETE_BLOG_REQUEST });

        const res = await axios.post(`/blog/delete`, _id);

        if (res.status === 201) {
            dispatch({ type: blogConstants.DELETE_BLOG_SUCCESS });
        }
        if (res.status === 400) {
            dispatch({ type: blogConstants.DELETE_BLOG_FAILURE })
        }
    }
}