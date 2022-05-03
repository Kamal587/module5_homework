// Задача № 8
let animals = new Map([
    ["Reks", "dog"],
    ["Tom", "cat"],
    ["Jerry", "mouse"]
]);
animals.forEach((key, value) => {
    console.log(`Ключ - ${key}, значение - ${value}`)
})