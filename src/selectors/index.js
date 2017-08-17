import {createSelector} from 'reselect';

export const getItems = state => state.items;
export const getOrderBy = state => state.orderBy;
export const getColumns = state => state.columns;
export const getSelectedCategories = state => state.selectedCategories;
export const getCategories = createSelector(getItems, items => {
    const categories = new Set();
    items.forEach((item) => {
        categories.add(item.type);
    });
    return Array.from(categories);
});

export const getSelectedItems = createSelector(
    getItems,
    getSelectedCategories,
    getOrderBy,
    (items, selectedCategories, orderBy) => {
        let filteredItems = selectedCategories.length
            ? items.filter((item) => selectedCategories.indexOf(item.type) !== -1)
            : items;
        if (orderBy) {
            const isReverse = orderBy[0] === '-';
            const sortBy = isReverse ? orderBy.slice(1) : orderBy;
            filteredItems = filteredItems.slice().sort((a, b) => {
                let value1 = a[sortBy];
                let value2 = b[sortBy];
                if (sortBy === 'price') {
                    value1 = parseInt(value1.slice(1));
                    value2 = parseInt(value2.slice(1));
                }
                if (value1 > value2) {
                    return 1;
                } else if (value1 < value2){
                    return -1;
                } else {
                    return 0;
                }
            });
            if (isReverse) {
                filteredItems = filteredItems.reverse();
            }
        }
        return filteredItems;
    }
);
