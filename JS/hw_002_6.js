'use strict';
/**
 * вывод строки с учетом падежа слова рубль в зависимости от последней цифры num1
 */
function lastSymbol(num1) {
    let str1 = String(num1);
    let strL = str1.length;
    let lastS = str1.charAt(strL - 1);
    switch (lastS) {
        case '1':
            return ('Ваша сумма в ' + num1 + ' рубль успешно зачислена');
            break;
        case '2':
        case '3':
        case '4':
            return ('Ваша сумма в ' + num1 + ' рубля успешно зачислена');
            break;
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            return ('Ваша сумма в ' + num1 + ' рублей успешно зачислена');
            break;
    }
}

let a = prompt('введите количество денег для перевода на счет в баке');
console.log(lastSymbol(a));