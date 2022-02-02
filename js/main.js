function toggleMenu() {
    let menuItem = document.getElementById("menu__list");
    if (menuItem.style.display === "none") {
        menuItem.style.display = "flex";
    } else {
        menuItem.style.display = "none";
    }
}

let menu_icon = document.getElementById('nav_icon1');

menu_icon.addEventListener('click', toggleMenu);

