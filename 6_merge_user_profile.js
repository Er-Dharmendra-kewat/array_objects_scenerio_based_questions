    // 6. Merge User Profiles

    // Two objects represent the same user:

    // const userA = { name: "Ali", age: 25 };
    // const userB = { country: "India", age: 26 };

    // Task:
    // Merge them into one object (B age overwrites A).


const userA = { name: "Ali", age: 25,lasName:"dkkewat" };
const userB = { country: "India", age: 26,lasName:"kewat" };

let mergeArr = {...userB,...userA};
console.log(mergeArr);
