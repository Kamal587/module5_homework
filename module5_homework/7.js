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