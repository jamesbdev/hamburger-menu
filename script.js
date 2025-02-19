// Purpose: This file is used to handle the burger menu functionality

const openBtn = document.querySelector('.burger');
const menuContainer = document.querySelector('.nav-links-container');
const closeBtn = document.querySelector('.close');

console.log(menuContainer);

openBtn.addEventListener('click', (event) => {
  menuContainer.classList.remove("hide");
})

closeBtn.addEventListener('click', (event) => {
    menuContainer.classList.add("hide");
});