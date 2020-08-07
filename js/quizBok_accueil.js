/* VARIABLES */
let inputName = document.querySelector('.inputName');
let submitName = document.querySelector('.submitName');
let namePlayer = document.querySelector('.namePlayer');
let scorePlayer = document.querySelector('.scorePlayer');
let cardPlayer = document.querySelector('.cardPlayer');
let connexion = document.querySelector('.connexion');
let errorText = document.querySelector('.errorText');
let choix = document.querySelector('.choix');
let playerScore = "";
let playerName = "";
let boutonOptions = document.querySelector('.boutonOptions');
let menuOptions = document.querySelector('.menuOptions');
let closeOptions = document.querySelector('.closeOptions');

/* ENREGISTREMENT DU JOUEUR */
submitName.addEventListener('click', function() {
    if (inputName.value) {
        cardPlayer.style.display = "flex";
        localStorage.setItem("playerName", inputName.value);
        playerName = localStorage.getItem("playerName");
        namePlayer.innerHTML += playerName;
        connexion.style.display = "none";
        errorText.innerHTML = "";
        choix.style.display = "flex";
        playerScore = 0;
        scorePlayer.innerHTML = playerScore + " Pts";
    } else {
        errorText.innerHTML = "Entrez votre nom !";
    }
})

/* MENU OPTION */
boutonOptions.addEventListener('click', function() {
    menuOptions.classList.toggle('menuOptionsOpen');
    boutonOptions.classList.toggle('boutonOptionsOpen');
})
closeOptions.addEventListener('click', function() {
    menuOptions.classList.toggle('menuOptionsOpen');
    boutonOptions.classList.toggle('boutonOptionsOpen');
})