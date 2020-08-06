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

/* ENREGISTREMENT DU JOEUR */
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