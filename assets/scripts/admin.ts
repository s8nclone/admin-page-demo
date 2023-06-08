// add hovered class to selected list item
let navList: NodeListOf<Element> = document.querySelectorAll(".navigation li");

function activeNavLink(this: Element) {
  navList.forEach((item: Element) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

navList.forEach((item: Element) => item.addEventListener("mouseover", activeNavLink));

// Menu Toggle
let toggle: HTMLElement | null = document.querySelector(".hamburger_menu") as HTMLElement;
let navigation: HTMLElement | null = document.querySelector(".navigation") as HTMLElement;
let main: HTMLElement | null = document.querySelector(".main") as HTMLElement;

toggle!.onclick = function () {
  navigation!.classList.toggle("active");
  main!.classList.toggle("active");
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