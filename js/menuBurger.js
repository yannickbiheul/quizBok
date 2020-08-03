// On récupère le bouton et le menu
let boutonBurger = document.querySelector('.boutonBurger');
let menuBurger = document.querySelector('.menuBurger');

// On récupère les span du menu Hamburger
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');

// On récupère les éléments du menu
let element1 = document.querySelector('.element1');
let element2 = document.querySelector('.element2');
let element3 = document.querySelector('.element3');
let element4 = document.querySelector('.element4');
let element5 = document.querySelector('.element5');
let elements = [element1, element2, element3, element4, element5];

// On ajoute un écouteur d'événements sur le bouton 
boutonBurger.addEventListener('click', function() { 
    // On créer un toggle sur la classe menu
    menuBurger.classList.toggle('menuBurgerOpen');
    // Et un toggle sur chaque span
    span1.classList.toggle('span1Open');
    span2.classList.toggle('span2Open');
    span3.classList.toggle('span3Open');
});

// On ajoute le même écouteur d'événements sur chaque élément du menu
element1.addEventListener('click', function() {
    menuBurger.classList.toggle('menuBurgerOpen');
    span1.classList.toggle('span1Open');
    span2.classList.toggle('span2Open');
    span3.classList.toggle('span3Open');
})
element2.addEventListener('click', function () {
    menuBurger.classList.toggle('menuBurgerOpen');
    span1.classList.toggle('span1Open');
    span2.classList.toggle('span2Open');
    span3.classList.toggle('span3Open');
})
element3.addEventListener('click', function () {
    menuBurger.classList.toggle('menuBurgerOpen');
    span1.classList.toggle('span1Open');
    span2.classList.toggle('span2Open');
    span3.classList.toggle('span3Open');
})
element4.addEventListener('click', function () {
    menuBurger.classList.toggle('menuBurgerOpen');
    span1.classList.toggle('span1Open');
    span2.classList.toggle('span2Open');
    span3.classList.toggle('span3Open');
})
element5.addEventListener('click', function () {
    menuBurger.classList.toggle('menuBurgerOpen');
    span1.classList.toggle('span1Open');
    span2.classList.toggle('span2Open');
    span3.classList.toggle('span3Open');
})