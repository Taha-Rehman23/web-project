export function renderNavBar(categories, onCategoryClick){
    const navbar = document.createElement("nav");
    navbar.className = "flex items-center justify-center gap-8 container mx-auto py-8";

    for(const category of categories){
        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = category.name;
        button.addEventListener('click', () => {
            onCategoryClick(category);
        });
        navbar.appendChild(button);
    }

    return navbar;
}
