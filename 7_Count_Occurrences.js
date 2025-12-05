// 7. Count Occurrences
// const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
// Task:
// Return frequency count:

const items = ["apple", "banana", "apple", "orange", "banana", "apple"];

const freq = {};

for (let item of items) {
    freq[item] = (freq[item] || 0) + 1;
}

console.log(freq);
