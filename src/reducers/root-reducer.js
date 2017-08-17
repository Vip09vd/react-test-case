import {columns, products} from "../constants/mocks";

const initialState = {
    items: products,
    selectedCategories: [],
    columns: columns,
    orderBy: ''
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_CATEGORY':
            return {
                ...state, selectedCategories: [...state.selectedCategories, action.targetCategory]
            };
        case 'UNSELECT_CATEGORY':
            return {
                ...state,
                selectedCategories: state.selectedCategories.filter((category) => category !== action.targetCategory)
            };
        case 'SORT_ITEMS':
            return {
                ...state, orderBy: state.orderBy === action.property ? '-' + state.orderBy : action.property
            };
        default:
            return state;
    }
}

