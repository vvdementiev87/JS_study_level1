'use strict';

const products1 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const photosAvailable = products1.filter(function (prod) {
    if ("photos" in prod) {
        if (prod.photos.length > 0) {
            return true;
        };
    };
})
console.log(photosAvailable);

products1.sort(function (a, b) {
    if (a.price < b.price) {
        return -1;
    };
    if (a.price > b.price) {
        return 1;
    };
    if (a.price = b.price) {
        return 0;
    };
});
console.log(products1);
