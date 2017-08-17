import {Rating} from "../components/Rating/index";

export const products = [{
    id: 1,
    type: 'phone',
    name: 'iPhone 7',
    price: '$900',
    rating: 4.7
}, {
    id: 2,
    type: 'tablet',
    name: 'iPad',
    price: '$230',
    rating: 4.1
}, {
    id: 3,
    type: 'phone',
    name: 'Galaxy s8',
    price: '$950',
    rating: 4.7
}, {
    id: 4,
    type: 'tablet',
    name: 'Galaxy Tab 5',
    price: '$190',
    rating: 3.8
}, {
    id: 5,
    type: 'phone',
    name: 'Nokia 1100',
    price: '$40',
    rating: 1.2
}, {
    id: 6,
    type: 'tablet',
    name: 'Surface Pro',
    price: '$430',
    rating: 3.9
}, {
    id: 7,
    type: 'phone',
    name: 'iPhone 6',
    price: '$400',
    rating: 4.0
}, {
    id: 8,
    type: 'tablet',
    name: 'Lenovo Tab',
    price: '$100',
    rating: 1.1
}, {
    id: 9,
    type: 'phone',
    name: 'Meizu M3',
    price: '$150',
    rating: 2.8
}, {
    id: 10,
    type: 'tablet',
    name: 'Xiaomi MiTab',
    price: '$190',
    rating: 2.9
}, {
    id: 11,
    type: 'phone',
    name: 'Huawei P10',
    price: '$840',
    rating: 4.2
}, {
    id: 12,
    type: 'tablet',
    name: 'Prestigio MultiPad',
    price: '$60',
    rating: 0.6
}, {
    id: 13,
    type: 'notebook',
    name: 'Lenovo IdeaPad',
    price: '$420',
    rating: 3.1
}, {
    id: 14,
    type: 'notebook',
    name: 'Apple MacBook',
    price: '$600',
    rating: 4.3
}, {
    id: 15,
    type: 'notebook',
    name: 'Xiaomi Mi Notebook',
    price: '$490',
    rating: 3.9
}, {
    id: 16,
    type: 'notebook',
    name: 'Apple MacBook Pro',
    price: '$1440',
    rating: 4.8
}, {
    id: 17,
    type: 'notebook',
    name: 'ASUS ZenBook',
    price: '$1100',
    rating: 4.6
}];

export const columns = [{
    property: 'name',
    name: 'Product Name'
}, {
    property: 'rating',
    name: 'Rating',
    transform: Rating
}, {
    property: 'price',
    name: 'Price'
}];