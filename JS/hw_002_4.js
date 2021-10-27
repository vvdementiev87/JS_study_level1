'use strict';
/**
 * сложение
 */
function addition(number1, number2) { return number1 + number2 };
/**
 * вычитание
 */
function subtraction(number1, number2) { return number1 - number2 };
/**
 * умножение
 */
function multiplication(number1, number2) { return number1 * number2 };
/**
 * деление без проверки знаменателя на 0
 */
function division(number1, number2) { return number1 / number2 };

let a = Number(prompt('введите значение переменной a'));
let b = Number(prompt('введите значение переменной b'));

console.log(addition(a, b));
console.log(subtraction(a, b));
console.log(multiplication(a, b));
console.log(division(a, b));