const movies = [
    { title: "Inception", rating: 8.8 },
    { title: "Avatar", rating: 7.8 },
    { title: "Cats", rating: 2.8 }
];

// Task:
// Remove movies with rating < 5

let filtered = movies.filter(movie=>movie.rating>=5);
console.log(filtered);


