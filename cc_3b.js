let inventory = [
    { sku: "SKU-001" , name: "Eco Bottle" , price: 19.99 , stock: 10 },
    { sku: "SKU-002" , name: "Notebook" , price: 4.99 , stock: 25 },
    { sku: "SKU-003" , name: "Pen Pack" , price: 6.49 , stock: 8 },
    { sku: "SKU-004" , name: "Desk Lamp" , price: 29.99 , stock: 5 }
];


// Logging the inventory summary sheet
inventory.forEach(product => {
    console.log(`${product.sku} | ${product.name} | ${product.price} | Stock: ${product.stock}`);
});

// Using Push to add a new product
inventory.push({ sku: "SKU-005" , name: "Mouse Pad" , price: 9.99 , stock: 15 });

// Removing the last product
let removedProduct=inventory.pop();
console.log("Removed product:" , removedProduct.name);


// Updating price
inventory[0].price= 17.99;

// Update stock
inventory[3].stock += 10;

//ORDERS
let orders = [
    {
        orderId: "ORD-1001" ,
        items: [
            { sku: "SKU-001" , qty: 2 },
            { sku: "SKU-003" , qty: 1 }
        ]
    },
    {
        orderId: "ORD-1002" ,
        items: [
            { sku: "SKU-004" , qty: 3 }
        ]
    }
];

// Helper function finder
function findProductSku(sku) {
    return inventory.find(product => product.sku = sku) || null;
}

//Order Processor
function processOrder(order) {
    let total = 0;

    for (let item of order.items) {
        let product = findProductBySku(item.sku);

        if (product.stock < item.item.qty) {
            return `Insufficient stock for ${product.name}`;
        }
    }

    //IF ALL ITEMS ARE STOCK

    for (let item of order.items) {
        let product = findProductBySku(item.sku) ;
        product.stock -= item.qty;
        total += product.price * item.qty;
    }

    return `Order ${order.orderId} total: ${total.toFixed(2)}`;
}

//RUNNING THE ORDERS
orders.forEach(order => {
    console.log(processOrder(order));
});


//Inventory Value
let totalInventoryValue = inventory.reduce((SubmitEvent, product) => {
    return sum + product.price * product.stock;}, 0);

    console.log("Total inventory value: $" , totalInventoryValue.toFixed(2));

//Low stock items
let lowStockItems = inventory.filter(product => product.stock <=5);
console.log ("Low stock items:" , lowStockItems);

//Price list
let pricelist = inventory.map(product => {
    return `${product.sku} - ${product.price}`});
    console.log ("Price list:" , pricelist) ;
    

        