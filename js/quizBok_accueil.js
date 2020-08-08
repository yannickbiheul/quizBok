/* VARIABLES CONNEXION*/
let inputName = document.querySelector('.inputName');
let submitName = document.querySelector('.submitName');
let connexion = document.querySelector('.connexion');
let errorText = document.querySelector('.errorText');

/* VARIABLES CARTE JOUEUR */
let namePlayer = document.querySelector('.namePlayer');
let scorePlayer = document.querySelector('.scorePlayer');
let cardPlayer = document.querySelector('.cardPlayer');
let playerScore = "";
let playerName = "";

/* VARIABLES MENU OPTIONS */
let boutonOptions = document.querySelector('.boutonOptions');
let menuOptions = document.querySelector('.menuOptions');
let closeOptions = document.querySelector('.closeOptions');

/* VARIABLES CHOIX DU QUIZ */
let choix = document.querySelector('.choix');


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