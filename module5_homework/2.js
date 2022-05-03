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