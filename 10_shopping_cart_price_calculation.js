const cart = [
    { name: "Shoes", price: 1500, qty: 2 },
    { name: "Shirt", price: 700, qty: 1 }
];
let sum = 0;
for (let i = 0; i < cart.length; i++) {
    sum += cart[i].price * cart[i].qty;
}
console.log("Payable amount is:", sum);
