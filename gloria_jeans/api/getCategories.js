// const categories = [
//     {
//         id: 1,
//         name: 'Tea',
//         products: [
//             {
//                 name: 'Black Tea',
//                 price: '10.00'
//             },
//             {
//                 name: 'Green Tea',
//                 price: '12.00'
//             },
//         ]
//     },
//     {
//         id: 2,
//         name: 'Coffee',
//         products: [
//             {
//                 name: 'Black Coffee',
//                 price: '10.00'
//             },
//             {
//                 name: 'Green Coffee',
//                 price: '12.00'
//             },
//         ]
//     },
//     {
//         id: 3,
//         name: 'Donuts',
//         products: [
//             {
//                 name: 'Black Donuts',
//                 price: '10.00'
//             },
//             {
//                 name: 'Green Donuts',
//                 price: '12.00'
//             },
//         ]
//     },
// ];


export async function getCategories() {
    const data = await fetch('http://localhost:80/gloria_jeans/php/getCategories.php');
    const categories = await data.json();
    return categories;
}
