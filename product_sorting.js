const products = [
  { name: "Laptop", price: 1400 },
  { name: "Phone", price: 700 },
  { name: "Tablet", price: 300 }
];

// Tasks:
// Sort products by price (low → high).
// Return product names only in an array.



products.sort((a,b)=>b.price-a.price)
// console.log(products);

let Names = [];
products.forEach(product=>{
    Names.push(product.name);

});
console.log(Names);
console.log(products);





