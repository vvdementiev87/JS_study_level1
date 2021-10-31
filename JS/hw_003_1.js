'use strict';

let a = Number(prompt("Введите целое положительное число"));

/**
 * Проверка на четность, нечетность, ноль
 */
function oddCheck(num) {
    let b = num % 2;
    if (num === 0) {
        return "это ноль";
    } else if (b === 0) {
        return "это четное число";
    } else if (b === 1) {
        return "это нечетное число";
    }

};

for (let i = 0; i <= a; i++) {
    console.log(`число ${i} - ${oddCheck(i)}`);
};