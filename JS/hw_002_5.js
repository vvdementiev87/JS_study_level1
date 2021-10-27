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

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return addition(arg1, arg2);
            break;
        case '-':
            return subtraction(arg1, arg2);
            break;
        case '*':
            return multiplication(arg1, arg2);
            break;
        case '/':
            return division(arg1, arg2);
            break;
        default:
            alert('Введено некорректное наименование операции');
    }
}

let a = Number(prompt('введите значение переменной a'));
let b = Number(prompt('введите значение переменной b'));
let operation = prompt('введите наименование операции: +, -, *, /');

console.log(mathOperation(a, b, operation));