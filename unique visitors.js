const visitorIds = [4, 1, 3, 1, 2, 4, 5, 2];

// Task:
// Return a list containing only unique IDs (remove duplicates).

let arr = [];
for (let i = 0; i < visitorIds.length; i++) {
    if (!arr.includes(visitorIds[i])) {
        arr.push(visitorIds[i]);
    }
}

console.log(arr); // [4,1,3,2,5]

