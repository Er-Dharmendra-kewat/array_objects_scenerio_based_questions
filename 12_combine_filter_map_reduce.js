let arr = [2, 4, 5, 6, 7, 8];
let total = arr.reduce((acc, nums) => acc + nums, 0)
console.log(total);

let newArr = arr.map(n => n * 2)

console.log(newArr);

let result = arr.filter((item) => {
    return item > 5
});

console.log(result);
