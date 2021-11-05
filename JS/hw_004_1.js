'use strict';

class numToObj{
    constructor(units,tens,hundreds){
        this.units=units;
        this.tens=tens;
        this.hundreds=hundreds;

    }
    makeEmpty(){
        this.units='';
        this.tens='';
        this.hundreds='';
    }
    addNewNum(newNum){
        /* console.log(Number(newNum));//проверка ввода  */
        if (isNaN(Number(newNum))){
            console.log('Введено не число');
            this.makeEmpty();
        } else if (!Number.isInteger(Number(newNum))){
            console.log('Введено не целое число');
            this.makeEmpty();
        } else if (Number(newNum)<0){
            console.log('Введено число меньше нуля');
            this.makeEmpty();
        } else if (Number(newNum)>999){
            console.log('Введено число больше 999');
            this.makeEmpty();
        } else{
            this.units=Number(newNum)%10;
            this.tens=(Number(newNum)-this.units)%100/10;
            this.hundreds=(Number(newNum)-this.tens*10-this.units)%1000/100;
        }
    }

}



let numToObjCall=new numToObj;

numToObjCall.addNewNum(prompt('Введите число'));
console.log(numToObjCall);