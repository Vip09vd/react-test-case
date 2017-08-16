export function selectCategory(category) {
    return {
        type: 'FIND_CATEGORIES',
        selectedCategory: category
    }
}