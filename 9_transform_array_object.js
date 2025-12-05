// 9. Transform Array into Object
const students = [
    { id: 1, name: "Asha" },
    { id: 2, name: "Ravi" },
    { id: 3, name: "Meena" }
];
// Task:
// Convert to:

// {
//   1: "Asha",
//   2: "Ravi",
//   3: "Meena"
// }

console.log(Transform(students))

function Transform(students) {


    let obj = {};
    for (let student of students) {
        obj[student.id] = student.name;
    }
    return obj;
}


