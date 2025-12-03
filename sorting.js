const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Carol", age: 25 }
];

people.sort((a, b) => a.age - b.age); // ascending
console.log("ascending sorting",people);
people.sort((a, b) => b.age - a.age); // descending
console.log("Descending sorting",people);
