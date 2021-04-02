import { axiosInstance as axios } from '../helpers/axios';
import { categoryConstants } from './constants';

export const getAllCategory = () => {
    return async (dispatch) => {

        dispatch({ type: categoryConstants.GET_ALL_CATEGORY_REQUEST });

        const res = await axios.get('/category/getCategory');

        if (res.status === 200) {
            const { categoryList } = res.data;

            dispatch({
                type: categoryConstants.GET_ALL_CATEGORY_SUCCESS, payload: {
                    categories: categoryList
                }
            });

        } else {
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORY_FAILURE, payload: {
                    error: res.data.error
                }
            });
        }
    }
}


export const addCategory = (form) => {

    return async (dispatch) => {

        dispatch({ type: categoryConstants.ADD_CATEGORY_REQUEST });

        try {
            const res = await axios.post('/category/create', form);

            if (res.status === 201) {
                dispatch({
                    type: categoryConstants.ADD_CATEGORY_SUCCESS, payload: {
                        category: res.data.categ
                    }
                })
            } else {
                dispatch({
                    type: categoryConstants.ADD_CATEGORY_FAILURE, payload: { erro: res.data.error }
                })
            }
        } catch (error) {
           return null;
        }


    }

}

export const updateCategories = (form) => {

    return async (dispatch) => {

        dispatch({ type: categoryConstants.UPDATE_CATEGORY_REQUEST });

        const res = await axios.post('/category/update', form)

        if (res.status === 201) {
            return true;
        } else {
            return false;
        }
    }

}

export const deleteCategories = (_id) => {

    return async (dispatch) => {

        const res = await axios.post('/category/delete', { ..._id });

        if (res.status === 201) {
            return true;
        } else {
            return false
        }
    }

}