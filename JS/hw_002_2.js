'use strict';
let a = 2; //происходит создание переменной a и присваиваение численного значения 3
/* происходит создание переменной x, происходит выполнение оператора в скобках - сокщащенного оператора с умножением, т.е.
a=a*2 - в результате переменная a получает значение 4, далее происходит сложение числа 4 и 1
и присвоения результата сложения переменной x (5)  */
let x = 1 + (a *= 2); // значение переменной x равно 5
alert(a); // вывод окна со значением переменной a, значение 4
alert(x); // вывод окна со значением переменной x, значение 5