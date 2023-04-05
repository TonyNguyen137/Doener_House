let menuButton = document.querySelector(".menu-button");
let menu = document.querySelector(".menu-list-wrapper");



menuButton.addEventListener("click", _ => {
    let isOpen = menu.getAttribute("aria-expanded") === "true" || false;
    let buttonSymbol = isOpen ? "+" : "X"
    menu.setAttribute("aria-expanded", !isOpen);
    menuButton.textContent = buttonSymbol;

})

