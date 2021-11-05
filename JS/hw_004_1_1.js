'use strict';
//es-5
function Product_es5(name, price){
    this.name=name;
    this.price=price;    
}

Product_es5.prototype.make25PercentDiscount=function(){    
    return this.price=this.price*(1-0.25);
}

let prod_es5=new Product_es5('Соль', 100);
prod_es5.make25PercentDiscount();
console.log(prod_es5);

//es-6
class Product_es6{
    constructor(name,price){
        this.name=name;
        this.price=price;   
    }
}
let prod_es6=new Product_es6('Мясо', 200);

Product_es6.prototype.make25PercentDiscount=function(){    
    return this.price=this.price*(1-0.25);
}
 
 prod_es6.make25PercentDiscount();
 console.log(prod_es6);