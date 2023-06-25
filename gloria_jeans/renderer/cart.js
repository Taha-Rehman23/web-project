export function renderCart(cart){
    const cartCard = document.createElement("div");
    cartCard.className = 'mt-4 flex flex-col gap-4 bg-blue-200 shadow-md px-4 py-2 mx-auto max-w-4xl';

    cart.forEach(product => {   
        const productRow = document.createElement("div");
        productRow.classList = 'grid place-items-center grid-cols-6 gap-4 items-center';
        productRow.innerHTML = `
            <p class="col-span-5">${product.name}</p>
            <p class="col-span-1 text-right">${product.quantity}</p>
        `;
        cartCard.appendChild(productRow);
    });

    return cartCard;
}