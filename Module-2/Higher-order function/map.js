function processProducts(products) {
    const productNames = products.map((item) => item.name);

    console.log("Product Names:", productNames);
    products.forEach((product) => {
        if (product.price > 50) {
            console.log(`${product.name} is above $50`);
        } else {
            console.log(`${product.name} is below $50`);
        }
    });
}
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
];
processProducts(products);