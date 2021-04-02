import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';
import userReducer from './userReducer';
import courseReducer from './courseReducer'
import courseContentReducer from './courseContentReducer';
import aboutReducer from "./aboutReducer";
import contactReducer from "./contactReducer";
import homeReducer from "./homeReducer";
import logoAndDescReducer from "./logoAndDescReducer";
import bannerReducer from './bannerReducer';
import blogReducer from './blogReducer';

const rootReducers = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    user: userReducer,
    course: courseReducer,
    courseContent: courseContentReducer,
    about: aboutReducer,
    contact: contactReducer,
    home: homeReducer,
    logoAndDesc: logoAndDescReducer,
    banners: bannerReducer,
    blog : blogReducer
});

export default rootReducers;