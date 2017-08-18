import {columns, products} from "../constants/mocks";
import * as actionTypes from "../constants/actionTypes";

const initialState = {
    items: products,
    selectedCategories: [],
    columns: columns,
    orderBy: ''
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SELECT_CATEGORY:
            return {
                ...state,
                selectedCategories: [...state.selectedCategories, action.targetCategory]
            };
        case actionTypes.UNSELECT_CATEGORY:
            return {
                ...state,
                selectedCategories: state.selectedCategories.filter((category) => category !== action.targetCategory)
            };
        case actionTypes.SORT_ITEMS:
            return {
                ...state,
                orderBy: state.orderBy === action.property ? '-' + state.orderBy : action.property
            };
        default:
            return state;
    }
}

