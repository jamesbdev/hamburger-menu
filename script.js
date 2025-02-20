// Purpose: This file is used to handle the burger menu functionality

const openBtn = document.querySelector('.burger');
const menuContainer = document.querySelector('.nav-links-container');
const closeBtn = document.querySelector('.close');


openBtn.addEventListener('click', (event) => {
  menuContainer.style.display = "flex";
})

closeBtn.addEventListener('click', (event) => {
    menuContainer.style.display = "none";
});

// Switch to desktop menu when window is resized
window.addEventListener('resize', (event) => {
    if(window.innerWidth > 990) {
        menuContainer.style.display = "none";
    }
})

