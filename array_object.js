const orders = [
    { id: 1, amount: 250, status: "pending" },
    { id: 2, amount: 120, status: "completed" },
    { id: 3, amount: 560, status: "pending" },
    { id: 4, amount: 780, status: "completed" }
];

// Tasks:
// Return an array of only “pending” orders.
// Calculate the total amount of completed orders.

pending_orders = [];
orders.forEach(order => {

    if (order.status === "pending") {
        pending_orders.push(order)
    }

});

let sum = 0;
orders.forEach(order => {
    if (order.status === "completed") {
        sum += order.amount;
    }
})


console.log("Pending orders are:", pending_orders); // prints only pending orders
console.log("completed orders are: " + sum); // this will gives the total amount of completed orders

