var navList = document.querySelectorAll(".navigation li");
function activeNavLink() {
    navList.forEach(function (item) {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}
navList.forEach(function (item) { return item.addEventListener("mouseover", activeNavLink); });
// Menu Toggle
var toggle = document.querySelector(".hamburger_menu");
var navigation = document.querySelector(".navigation");
var main = document.querySelector(".main");
toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};
// add hovered class to selected list item
// let navList = document.querySelectorAll(".navigation li");
// function activeNavLink() {
//   navList.forEach((item) => {
//     item.classList.remove("hovered");
//   });
//   this.classList.add("hovered");
// }
// navList.forEach((item) => item.addEventListener("mouseover", activeNavLink));
// // Menu Toggle
// let toggle = document.querySelector(".hamburger_menu");
// let navigation = document.querySelector(".navigation");
// let main = document.querySelector(".main");
// toggle.onclick = function () {
//   navigation.classList.toggle("active");
//   main.classList.toggle("active");
// };
