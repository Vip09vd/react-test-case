import * as actionTypes from "../constants/actionTypes";

export function selectCategory(targetCategory) {
    return {
        type: actionTypes.SELECT_CATEGORY,
        targetCategory
    }
}

export function unselectCategory(targetCategory) {
    return {
        type: actionTypes.UNSELECT_CATEGORY,
        targetCategory
    }
}

export function sortItems(property) {
    return {
        type: actionTypes.SORT_ITEMS,
        property
    }
}