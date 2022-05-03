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



// Задача № 2
let x = true;
if(typeof x == 'number'){
    console.log('X - число')
} else if ( typeof x == 'string'){
    console.log('X - строка')
} else if ( typeof x == 'boolean'){
    console.log('X - логического типа')
} else {
    console.log('Тип x не определён')
}


// Задача № 3 
let str = 'Hello';
console.log(str.split('').reverse('').join(''))

// Задача № 4
let numRandom = Math.random() * 100;
console.log(numRandom)

// Задача № 5 
let arr1 = ['a', 'b', 'c'];
console.log(arr.length);
for(let item of arr1) {
    console.log(item)
}

// Задача № 6
let arr2 = ['a', 'a', 'a', 'a']
let result = arr.find(item => {
    if(item != arr2[0]) {
        console.log(false)
    } else {
        console.log(true)
    }
})

// Задача № 7
let arr = [2, 4, 5, 1, 7, 9, 8, 3, null, 0, undefined];
let even = 0;
let odd = 0;
let zero = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] == 0){
        zero++;
    }
    if(arr[i] > 0 ){
        if(arr[i] % 2 == 0){
            even++;
        } else if ( arr[i] % 2 != 0){
            odd++;
        }
    }
}
console.log(even, odd, zero)

// Задача № 8
let animals = new Map([
    ["Reks", "dog"],
    ["Tom", "cat"],
    ["Jerry", "mouse"]
]);
animals.forEach((key, value) => {
    console.log(`Ключ - ${key}, значение - ${value}`)
})


