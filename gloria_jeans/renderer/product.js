export function getProductRow(name, price, quantity, onQuantityChange) {

    function handleMinus() {
        onQuantityChange(Math.max(0, quantity - 1));
    }

    function handlePlus() {
        onQuantityChange(quantity + 1);
    }

    const productRow = document.createElement("div");
    productRow.classList = 'grid place-items-center grid-cols-6 gap-4 items-center';

    // name
    const productName = document.createElement("p");
    productName.innerText = name;
    productName.className = "font-bold";
    productRow.appendChild(productName);

    // quantity div
    const quantityDiv = document.createElement("div");
    quantityDiv.classList = 'flex items-center gap-4';

    // Minus Button
    const minusBtn = document.createElement("button");
    minusBtn.innerText = "-";
    minusBtn.className = "btn";
    minusBtn.addEventListener('click', handleMinus);
    quantityDiv.appendChild(minusBtn);

    // Product Quantity
    const productQuantity = document.createElement("p");
    productQuantity.innerText = quantity;
    quantityDiv.appendChild(productQuantity);

    // Plus button
    const plusBtn = document.createElement("button");
    plusBtn.innerText = "+";
    plusBtn.className = "btn";
    plusBtn.addEventListener('click', handlePlus);
    quantityDiv.appendChild(plusBtn);

    productRow.appendChild(quantityDiv);

    const x = document.createElement("p");
    x.innerText = 'x';
    productRow.appendChild(x);

    // price
    const productPrice = document.createElement("p");
    productPrice.innerText = price + '$';
    productRow.appendChild(productPrice);

    const equals = document.createElement("p");
    equals.innerText = '=';
    productRow.appendChild(equals);

    // total price
    const totalPrice = document.createElement("p");
    totalPrice.innerText = `${price * quantity}$`;
    productRow.appendChild(totalPrice);

    return productRow;
}