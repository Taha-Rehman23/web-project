import { getCategories } from './api/getCategories.js';
import { renderNavBar } from './renderer/nav.js';
import { getProductRow } from "./renderer/product.js"; 
import { renderProducts } from './renderer/productsCard.js';
import { renderCart } from './renderer/cart.js';
import { placeOrder } from './api/placeOrder.js';

// data
const categories = await getCategories();
const allProducts = categories.flatMap(category => category.products);

// states
let selectedCategory = categories[0];

let cart = [];

// render function
function render() {
    console.log('rendering...');

    // clean the htm body
    document.body.innerHTML = "";

        const user = document.createElement("a");
        user.href = "index.html";
        user.innerText = "Customer";
        user.className = "mt-2 text-2xl font-bold text-gray-900 text-center bg-green-400 rounded-xl p-2 m-2";
        document.body.appendChild(user);

        const accountant = document.createElement("a");
        accountant.href = "accountant.html";
        accountant.innerText = "Accountant ";
        accountant.className = "mt-2 text-2xl font-bold text-gray-900 text-center bg-green-400 rounded-xl p-2 m-2";
        document.body.appendChild(accountant);

        const cheif = document.createElement("a");
        cheif.href = "chief.html";
        cheif.innerText = "Chief";
        cheif.className = "mt-2 text-2xl font-bold text-gray-900 text-center bg-green-400 rounded-xl p-2 m-2";
        document.body.appendChild(cheif);




    // render the nav bar
    const navbar = renderNavBar(categories, (category) => {
        selectedCategory = category;
        render();
    });
    document.body.appendChild(navbar);

    if (selectedCategory) {
        const card = renderProducts(allProducts, selectedCategory.products, cart, (newCart) => {
            cart = newCart;
            render();
        });
        document.body.appendChild(card);
    }

    if (cart.length > 0) {
        const cartHeading = document.createElement("h1");
        cartHeading.innerText = "Cart";
        cartHeading.className = "mt-4 text-2xl font-bold text-gray-900 text-center bg-red-400 rounded-full flex items-center justify-center container mx-auto max-w-2xl ";
        document.body.appendChild(cartHeading);

        const cartCard = renderCart(cart);
        document.body.appendChild(cartCard);


        const btndiv = document.createElement("div");
        btndiv.className = "mt-4 max-w-4xl mx-auto flex justify-end";

        const checkoutButton = document.createElement("button");
        checkoutButton.className = "btn";
        checkoutButton.innerText = "Checkout";
        checkoutButton.addEventListener('click', async () => {
            placeOrder(cart);
            alert("Thank you for your purchase!");
            cart = [];
            render();
        });
        btndiv.appendChild(checkoutButton);

        document.body.appendChild(btndiv);
    }
}

// initial render
window.onload = render();
