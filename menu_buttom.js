const nav = document.getElementById("nav");
const menuButton = document.getElementById("menuButtom");
const navList = document.getElementById("navList");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
    navList.classList.toggle("active");
    menuButton.classList.toggle("active");
});