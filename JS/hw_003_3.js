'use strict';

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

let discount = 15;

function discountCalc(prod) {
    prod.price = prod.price * (0.01 * (100 - discount));
};

products.forEach(discountCalc);

console.log(products);



