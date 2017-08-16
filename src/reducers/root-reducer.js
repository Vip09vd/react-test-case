import {products} from "../constants/mocks";
import { createSelector } from 'reselect';

const initialState = {
    items: products,
    selectedCategory: []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SELECTED_CATEGORIES_CHANGED':
            return {
                ...state, selectedCategories: action.selectedCategories
            };
        default: return state;
    }
}

export const getItems = state => state.items;
export const getCategories = createSelector(getItems, items => {
    const categories = new Set();
    items.forEach((item) => {
        categories.add(item.type);
    });
    return Array.from(categories);
});
