// 5. Group Students by Score Range
// const scores = [72, 88, 95, 43, 56, 39, 82];
// Task:
// Return an object:

// {
//   pass: [...],
//   fail: [...]
// }


// where pass >= 50.

function Scores(score) {


    let pass = [];
    let fail = [];

    score.forEach(val => {
        if (val >= 50) {
            pass.push(val);
        }
        else
            fail.push(val);
    });

    return { pass, fail };

}
const scores = [72, 88, 95, 43, 56, 39, 82];

console.log(Scores(scores));