const users = [
    { name: "Arjun", age: 18, score: 85 },
    { name: "Meera", age: 17, score: 92 },
    { name: "Krish", age: 20, score: 76 }
];
let user = users.filter(n => n.age >= 18)
console.log("Users greater than 18:", user);
let names = users.map(n => n.name)
console.log(names);
let avg = users.reduce((n, items) => n + items.score, 0)
console.log("Average Score of adults is:", avg);