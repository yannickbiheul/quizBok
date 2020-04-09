/* VARIABLES */

let bouton = document.querySelector(".bouton");

let score = document.querySelector("#score");
let playerName = document.querySelector("#playerName");
let namePlayer = "";

let inputName = document.createElement("input");
let validName = document.createElement("a");


let containerQuestion = document.querySelector(".bloc-question");
let question = document.querySelector("#question");
let reponse1 = document.querySelector("#reponse1");
let blocReponse1 = document.querySelector(".bloc-reponse1");
let reponse2 = document.querySelector("#reponse2");
let blocReponse2 = document.querySelector(".bloc-reponse2");
let reponse3 = document.querySelector("#reponse3");
let blocReponse3 = document.querySelector(".bloc-reponse3");
let reponse4 = document.querySelector("#reponse4");
let blocReponse4 = document.querySelector(".bloc-reponse4");




let questions = [
    "Quel acteur joue le rôle principal dans le film Brazil de Terry Gilliam ?",
];

let reponses = [
    [
        "Robert De Niro",
        "Johnny Depp",
        "Jonathan Pryce",
        "Bob Hoskins"
    ],
]


/* LANCEMENT DU JEU */

debutJeu();


function debutJeu() {
    playerName.innerHTML = "";
    score.innerHTML = "";
    reponse1.innerHTML = "";
    reponse2.innerHTML = "";
    reponse3.innerHTML = "";
    reponse4.innerHTML = "";
    question.style.display = "none";
    
    containerQuestion.appendChild(inputName);
    inputName.setAttribute("placeholder", "Votre Nom");
    inputName.setAttribute("type", "text");
    inputName.style.height = "40%";
    inputName.style.width = "50%";
    inputName.style.borderRadius = "5px";
    inputName.style.padding = "3px";
    inputName.style.outline = "none";
    
    containerQuestion.appendChild(validName);
    validName.setAttribute("href", "#");
    validName.innerHTML = "OK";
    validName.style.backgroundColor = "var(--bordeaux)";
    validName.style.textDecoration = "none";
    validName.style.color = "#fff";
    validName.style.padding = "10px";
    validName.style.borderRadius = "5px";
    validName.style.boxShadow = "4px 4px 4px #000";
    validName.addEventListener("click", function() {
        namePlayer = inputName.value;
        playerName.innerHTML = "Bonjour " + namePlayer + ", bienvenue sur mon quiz !";
        premiereQuestion();
    });
};

function premiereQuestion() {
    inputName.style.display = "none";
    validName.style.display = "none";
    question.style.display = "flex";
    question.style.textAlign = "center";
    question.innerHTML = questions[0];
    score.innerHTML = "1 / 10";
    reponse1.innerHTML = reponses[0][0];
    reponse2.innerHTML = reponses[0][1];
    reponse3.innerHTML = reponses[0][2];
    reponse4.innerHTML = reponses[0][3];
    reponse1.addEventListener("click", function() {
        reponse1.style.backgroundColor = "var(--bordeaux)";
    });
    reponse2.addEventListener("click", function() {
        reponse2.style.backgroundColor = "var(--bordeaux)";
    });
    reponse3.addEventListener("click", function() {
        reponse3.style.backgroundColor = "var(--vert)";
    });
    reponse4.addEventListener("click", function() {
        reponse4.style.backgroundColor = "var(--bordeaux)";
    });
}

