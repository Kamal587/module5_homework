'use strict'

// Задача № 1
let num = +prompt("Введите значение");
if(typeof num == 'number' && !isNaN(num)){
    if(num % 2 == 0){
        console.log("Число четное")
    } else if (num % 2 !== 0){
        console.log("Число нечетное")
    } 
} else {
    console.log("Упс")
}
