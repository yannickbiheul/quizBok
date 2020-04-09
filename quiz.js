/* VARIABLES */

let bouton = document.querySelector(".bouton");

let compteur = document.querySelector("#compteur");
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

let result = document.querySelector(".result");
let resultQuestion = document.querySelector("#resultQuestion");
let resultValid = document.querySelector("#resultValid");

var score = 0;




let questions = [
    "Quel acteur joue le rôle principal dans le film \"Brazil\" de Terry Gilliam ?",
    "Je parcours 10 mètres en 1 seconde. Quelle est ma vitesse moyenne ?"
];

let reponses = [
    [
        "Robert De Niro",
        "Johnny Depp",
        "Jonathan Pryce",
        "Bob Hoskins"
    ],
    [
        "40 km/h",
        "36 km/h",
        "60 km/h",
        "16 km/h"
    ],
]


/* LANCEMENT DU JEU */

debutJeu();


function debutJeu() {
    playerName.innerHTML = "";
    compteur.innerHTML = "";
    reponse1.innerHTML = "";
    reponse2.innerHTML = "";
    reponse3.innerHTML = "";
    reponse4.innerHTML = "";
    question.style.display = "none";
    containerQuestion.appendChild(inputName);
    inputName.setAttribute("placeholder", "Votre Nom");
    inputName.setAttribute("type", "text");
    inputName.style.height = "30%";
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
    validName.style.marginLeft = "20px";
    validName.style.borderRadius = "5px";
    validName.style.boxShadow = "4px 4px 4px #000";
    validName.addEventListener("click", function() {
        namePlayer = inputName.value;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        premiereQuestion();
    });
};

function premiereQuestion() {
    inputName.style.display = "none";
    validName.style.display = "none";
    question.style.display = "flex";
    question.style.textAlign = "center";
    question.innerHTML = questions[0];
    compteur.innerHTML = "1 / 10";
    reponse1.innerHTML = reponses[0][0];
    reponse2.innerHTML = reponses[0][1];
    reponse3.innerHTML = reponses[0][2];
    reponse4.innerHTML = reponses[0][3];
    blocReponse1.addEventListener("click", function() {
        result.style.backgroundColor = "var(--bordeaux)";
        resultQuestion.innerHTML = "Loupé !";
        resultValid.style.backgroundColor = "var(--vert)";
        result.style.left = "calc(50vw - 100px)";
        --score;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
        });
    });
    blocReponse2.addEventListener("click", function() {
        result.style.backgroundColor = "var(--bordeaux)";
        resultQuestion.innerHTML = "Loupé !";
        resultValid.style.backgroundColor = "var(--vert)";
        result.style.left = "calc(50vw - 100px)";
        --score;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
        });
    });
    blocReponse3.addEventListener("click", function() {
        result.style.backgroundColor = "var(--vert)";
        resultQuestion.innerHTML = "Bien vu !";
        resultValid.style.backgroundColor = "var(--bordeaux)";
        result.style.left = "calc(50vw - 100px)";
        ++score;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            deuxiemeQuestion();
        });

    });
    blocReponse4.addEventListener("click", function() {
        result.style.backgroundColor = "var(--bordeaux)";
        resultQuestion.innerHTML = "Loupé !";
        resultValid.style.backgroundColor = "var(--vert)";
        result.style.left = "calc(50vw - 100px)";
        --score;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
        });
    });
}

function deuxiemeQuestion() {
    console.log(score);
    inputName.style.display = "none";
    validName.style.display = "none";
    question.style.display = "flex";
    question.style.textAlign = "center";
    question.innerHTML = questions[1];
    compteur.innerHTML = "2 / 10";
    reponse1.innerHTML = reponses[1][0];
    reponse2.innerHTML = reponses[1][1];
    reponse3.innerHTML = reponses[1][2];
    reponse4.innerHTML = reponses[1][3];
    blocReponse1.addEventListener("click", function() {
        result.style.backgroundColor = "var(--bordeaux)";
        resultQuestion.innerHTML = "Loupé !";
        resultValid.style.backgroundColor = "var(--vert)";
        result.style.left = "calc(50vw - 100px)";
        score--;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
        });
    });
    blocReponse2.addEventListener("click", function() {
        ++score;
        result.style.backgroundColor = "var(--vert)";
        resultQuestion.innerHTML = "Bien vu !";
        resultValid.style.backgroundColor = "var(--bordeaux)";
        result.style.left = "calc(50vw - 100px)";
        
        console.log(score);
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
        });
    });
    blocReponse3.addEventListener("click", function() {
        result.style.backgroundColor = "var(--bordeaux)";
        resultQuestion.innerHTML = "Loupé !";
        resultValid.style.backgroundColor = "var(--vert)";
        result.style.left = "calc(50vw - 100px)";
        score--;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
        });

    });
    blocReponse4.addEventListener("click", function() {
        result.style.backgroundColor = "var(--bordeaux)";
        resultQuestion.innerHTML = "Loupé !";
        resultValid.style.backgroundColor = "var(--vert)";
        result.style.left = "calc(50vw - 100px)";
        score--;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
        });
    });
}

