import {
    addressConstants
} from '../actions/constants';

const initialState = {
    addressContact: [],
    loading: false,
    error: false,
    message: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case addressConstants.GET_ADDRESS_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case addressConstants.GET_ADDRESS_SUCCESS:
            state = {
                ...state,
                addressContact: action.payload.addressContact,
                loading: false
            }
            break;
        case addressConstants.GET_ADDRESS_FAILURE:
            state = {
                ...state,
                loading: false
            }
            break;

    }

    return state;
}