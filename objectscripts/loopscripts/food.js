let lunch = [
    {item: "Pizza", price: 12.99},
    {item: "Pancakes", price: 8.99},
    {item: "Nuggets", price: 5.99}
];

 let subTotal = 0;
 for (let i = 0; i < lunch.length; i++) {
    subTotal += lunch[i].price;
 }

 let taxRate = 0.08;
 let tipRate = 0.18;

 let tax = subTotal * taxRate;
 let tip = subTotal * tipRate;

 let totalDue = subTotal + tax + tip;

console.log(`Subtotal: $${subTotal.toFixed(2)}`);
console.log(`Tax (8%): $${tax.toFixed(2)}`);
console.log(`Tip (18%): $${tip.toFixed(2)}`);
console.log(`Total Due: $${totalDue.toFixed(2)}`);