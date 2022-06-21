const menu = document.querySelector('.menu')
const burgerMenu = document.querySelector('.burger-menu')

burgerMenu.addEventListener("click", function(){
    menu.classList.toggle('show');
})