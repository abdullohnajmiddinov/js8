let arr = [2, 4, 9, 10, 45, 67, 8, 90];
console.log(arr);
let arr1 = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arr1.push(arr[i]);
    }
}

console.log(arr1);