// Purpose: This file is used to handle the burger menu functionality

const openBtn = document.querySelector('.burger');
const menuContainer = document.querySelector('.nav-links-container');
const closeBtn = document.querySelector('.close');


openBtn.addEventListener('click', (event) => {
  //menuContainer.classList.remove("hide");
  menuContainer.style.display = "flex";
})

closeBtn.addEventListener('click', (event) => {
    console.log(event.target);
    //menuContainer.classList.add("hide");
    menuContainer.style.display = "none";
});