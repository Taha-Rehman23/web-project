import { getProductRow } from "./product.js";

export function renderProducts(allProducts, products, cart, onCartUpdate) {
    const card = document.createElement("div");
    card.className = 'flex flex-col gap-4 bg-blue-200 rounded-md shadow-md px-4 py-2 mx-auto max-w-4xl';

    function handleQuantityChange(product, quantity){
        let updatedCart = structuredClone(cart);

        if (quantity === 0) {
            // remove from cart
            updatedCart = updatedCart.filter(p => p.name !== product.name);
        } else {
            // update the cart
            let index = cart.findIndex(p => p.name === product.name);

            // if product not in the cart
            if (index === -1) {
                updatedCart.push({
                    name: product.name,
                    quantity,
                });
            } else {
                updatedCart[index] = { name: product.name, quantity: quantity };
            }
        }

        onCartUpdate(updatedCart);
    }

    products.forEach(product => {
        const productQuantity = cart.find(p => p.name === product.name)?.quantity ?? 0;
        card.appendChild(getProductRow(product.name, product.price, productQuantity, (quantity) => handleQuantityChange(product, quantity)));
    });

    // add total row
    const totalRow = document.createElement("div");
    totalRow.className = 'grid place-items-center grid-cols-6 gap-4 items-center';
    totalRow.innerHTML = `
        <p class="col-span-3">
        <p class="col-span-1 text-right">Total</p>
        <p>=</p>
        <p class="col-span-1">${cart.reduce((acc, p) => acc + p.quantity * allProducts.find(product => product.name === p.name).price, 0)}$</p>
    `;
    card.appendChild(totalRow);

    return card;
}
