export function selectCategory(category) {
    return {
        type: 'SELECT_CATEGORY',
        targetCategory: category
    }
}

export function unselectCategory(category) {
    return {
        type: 'UNSELECT_CATEGORY',
        targetCategory: category
    }
}

export function sortItems(property) {
    return {
        type: 'SORT_ITEMS',
        property
    }
}