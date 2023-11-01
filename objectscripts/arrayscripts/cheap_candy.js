let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Jelly Beans", price: 1.99},
    {product: "Mazapan", price: 1.49},
    {product: "Almond Joy", price: 1.79},
    {product: "Twix Bar", price: 1.89},
    {product: "Milky Way", price: 1.99},
    {product: "Hersheys", price: 2.49}
];

function candiesBelowPrice(products, maxPrice) {
    let cheapCandies = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].price < maxPrice) {
            cheapCandies.push(products[i].product);
        }
    }
    return cheapCandies;
}



function findCandiesByName(products, substring) {
    let matchingCandies = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].product.includes(substring)) {
            matchingCandies.push(products[i].product);
        }
    }
    return matchingCandies;
}



function isProductCarried(products, productName) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].product === productName) {
            return true;
        }
    }
    return false;
}



