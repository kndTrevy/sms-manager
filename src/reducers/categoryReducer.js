import { categoryConstants } from "../actions/constants";

const initialState = {
    categories: [],
    loading: false,
    error: null
}

// const buildNewCategoryList = (parentId, categories, category) => {

//     if (parentId === undefined) {
//         return [
//             ...categories,
//             {
//                 _id: category._id,
//                 name: category.name,
//                 slug: category.slug,
//                 children: []
//             }
//         ];
//     }

//     const myCategories = [];
//     for (const cat of categories) {
//         if (cat._id === parentId) {

//             const newCategory = {
//                 _id: category._id,
//                 name: category.name,
//                 slug: category.slug,
//                 type: category.type, 
//                 parentId: category.parentId,
//                 children: []
//             }

//             myCategories.push({
//                 ...cat,
//                 children: cat.children.length > 0 ? [...cat.children, newCategory] : [newCategory]
//             });
//         } else {
//             myCategories.push({
//                 ...cat,
//                 children: cat.children ? buildNewCategoryList(parentId, cat.children, category) : []
//             });
//         }

//     }

//     return myCategories;
// }

export default (state = initialState, action) => {
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstants.GET_ALL_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                categories: action.payload.categories
            }
            break;
        case categoryConstants.GET_ALL_CATEGORY_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;

        case categoryConstants.ADD_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;

        case categoryConstants.ADD_CATEGORY_SUCCESS:

            state = {
                ...state,
                loading: false,

            }
            break;

        case categoryConstants.ADD_CATEGORY_FAILURE:
            state = {
                ...state,
                error: action.payload.error
            }
            break;
    }
    return state
}