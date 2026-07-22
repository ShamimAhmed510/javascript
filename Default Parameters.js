function orderTea( cups = 1, type = "Green Tea" ) {
    console.log(`Order ${cups} cups of ${type}`);
}

orderTea(); // Order 1 cups of Green Tea
orderTea(2); // Order 2 cups of Green Tea
orderTea(3, "Black Tea"); // Order 3 cups of Black Tea
orderTea(undefined, "Yellow Tea"); // Order 1 cups of Yellow Tea