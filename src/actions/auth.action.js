import { authConstants, profsConstants } from './constants';
import { axiosInstance as axios } from '../helpers/axios';

export const login = (user) => {

    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST });

        const res = await axios.post('/user/signin?role=admin', user);

        console.log(res);

        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS, payload: {
                    token, user
                }
            });
        } else {
            if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAILURE, payload: {
                        error: res.data.error
                    }
                });
            }

        }

    }
};

export const isUserLoggedIn = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        if (token) {
            dispatch({
                type: authConstants.LOGIN_SUCCESS, payload: {
                    token, user
                }
            });
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE, payload: {
                    error: 'Login failed'
                }
            });
        }
    }

};

export const signOut = () => {
    return async (dispatch) => {
        dispatch({ type: authConstants.LOGOUT_REQUEST });

        const res = await axios.post('/user/signout');

        localStorage.clear();

        if (res.status === 200) {
            dispatch({ type: authConstants.LOGOUT_SUCCESS });
        } else {
            dispatch({
                type: authConstants.LOGOUT_FAILURE, payload: {
                    error: res.data.error
                }
            });
        }

    }
}


export const activateAccount = (_id) => {

    return async (dispatch) => {

        dispatch({ type: profsConstants.ACTIVE_PROFS_REQUEST });

        const res = await axios.post('/admin/activateAccount', _id);

        if(res.status === 201){
            const {updatedValues}=res.data;
            dispatch({ type: profsConstants.ACTIVE_PROFS_SUCCESS, payload:{updatedValues}}); 
        }

        if(res.status === 400){
            const {error} = res.data
            dispatch({ type: profsConstants.ACTIVE_PROFS_FAILURE,payload:{error}}); 

        }

    }
}

export const rejectAccount = (_id)=>{
    return async dispatch => {
        dispatch({ type: profsConstants.REJECT_PROFS_REQUEST });
        const res = await axios.post('/admin/rejectAccount', _id);

         if(res.status === 201){
            const {user}=res.data;
            dispatch({ type: profsConstants.REJECT_PROFS_SUCCESS, payload:{user}}); 
        }
        if(res.status === 400){
            const {error} = res.data
            dispatch({ type: profsConstants.REJECT_PROFS_FAILURE,payload:{error}}); 
        }
    }
}