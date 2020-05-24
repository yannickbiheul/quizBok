/* VARIABLES */

let bouton = document.querySelector(".bouton");
let menu = document.querySelector(".menu");
let compteur = document.querySelector("#compteur");
let playerName = document.querySelector("#playerName");
let namePlayer = "";
let recommencer = document.querySelector(".recommencer");
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
let score = 0;
let questions = [
    "Quel acteur joue le rôle principal dans le film \"Brazil\" de Terry Gilliam ?",
    "Je parcours 10 mètres en 1 seconde. Quelle est ma vitesse moyenne ?",
    "Quel écrivain se cachait derrière le pseudonyme \"San Antonio\" ?",
    "De combien d'états sont composés les États-Unis ?",
    "Quel groupe chante \"Les 3 p'tits keupons\" ?",
    "Quel est le nom du premier long métrage d'Albert Dupontel ?",
    "Pour m'acheter 4 livres, il me manque 5€50. Sachant que chaque livre coûte 14€50, combien j'ai d'argent en poche ?",
    "Lequel de ces livres n'est pas de Jules Verne ?",
    "La Perse s’appelle aujourd’hui :",
    "Lequel de ces membres a été le plus présent dans le groupe \"AC-DC\" ?"
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
    [
        "Albert Camus",
        "Alphonse Allais",
        "Gérard de Villiers",
        "Frédéric Dard"
    ],
    [
        "46",
        "48",
        "50",
        "52"
    ],
    [
        "Ludwig Von 88",
        "Bérurier Noir",
        "Les Wampas",
        "Parabellum"
    ],
    [
        "Le Créateur",
        "Enfermés Dehors",
        "Bernie",
        "Le Vilain"
    ],
    [
        "52,50€",
        "53,50€",
        "58,50€",
        "59€"
    ],
    [
        "Voyage au centre de la terre",
        "De la terre à la lune",
        "L'île au trésor",
        "L'île mystérieuse"
    ],
    [
        "Irak",
        "Lybie",
        "Lithuanie",
        "Iran"
    ],
    [
        "Malcolm Young",
        "Angus Young",
        "Brian Johnson",
        "Cliff Williams"
    ]
];

/* MENU */

bouton.addEventListener("click", function() {
    menu.classList.toggle("menu_open");
});


/* LANCEMENT DU JEU */

debutJeu();

/* Fonction qui affiche une fenêtre d'échec. */
function echec() {
    result.style.backgroundColor = "var(--bordeaux)";
    result.style.border = "var(--bordeaux)";
    result.style.paddingLeft = "30px";
    result.style.paddingRight = "30px";
    result.style.textAlign = "center";
    resultQuestion.innerHTML = "Loupé !";
    resultValid.style.backgroundColor = "var(--vert)";
    result.style.left = "calc(50vw - 130px)";
}

/* Fonction qui affiche une fenêtre de succes. */ 
function succes() {
    result.style.backgroundColor = "var(--vert)";
    result.style.border = "var(--vert)";
    result.style.paddingLeft = "30px";
    result.style.paddingRight = "30px";
    result.style.textAlign = "center";
    resultQuestion.innerHTML = "Bien vu !";
    resultValid.style.backgroundColor = "var(--bordeaux)";
    result.style.left = "calc(50vw - 130px)";
}

/* Fonction qui permet d'initialiser l'interface. */
function effacerTout() {
    playerName.innerHTML = "";
    compteur.innerHTML = "";
    reponse1.innerHTML = "";
    reponse2.innerHTML = "";
    reponse3.innerHTML = "";
    reponse4.innerHTML = "";
    blocReponse1.style.opacity = "0";
    blocReponse2.style.opacity = "0";
    blocReponse3.style.opacity = "0";
    blocReponse4.style.opacity = "0";
}

/* Fonction qui prépare l'interface pour la première question. */ 
function preparerPremiereQuestion() {
    inputName.style.display = "none";
    validName.style.display = "none";
    question.style.display = "flex";
    question.style.textAlign = "center";
    blocReponse1.style.opacity = "1";
    blocReponse2.style.opacity = "1";
    blocReponse3.style.opacity = "1";
    blocReponse4.style.opacity = "1";
}

/* Fonction qui prépare l'interface pour entrer son nom. */ 
function preparerInterface() {
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
}

/* Fonction de début de jeu */
function debutJeu() {
    effacerTout();
    preparerInterface();
    validName.addEventListener("click", function() {
        namePlayer = inputName.value;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        premiereQuestion();
    });
};

                                        /* Fonctions réponses pour question 1 */
function premiereReponse1() {
    let scoreTemp1 = score;
    echec();
    scoreTemp1 -= 1;
    score = scoreTemp1;
    playerName.innerHTML = namePlayer + " : " + score + " Points.";
    resultValid.addEventListener("click", function() {
        result.style.left = "-350px";
        premiereQuestion();
    });
};

function premiereReponse2() {
    let scoreTemp1 = score;
    echec();
    scoreTemp1 -= 1;
    score = scoreTemp1;
    playerName.innerHTML = namePlayer + " : " + score + " Points.";
    resultValid.addEventListener("click", function() {
        result.style.left = "-350px";
        premiereQuestion();
    });
};

function premiereReponse3() {
    let scoreTemp1 = score;
    succes();
    scoreTemp1 += 1;
    score = scoreTemp1;
    playerName.innerHTML = namePlayer + " : " + score + " Points.";
    resultValid.addEventListener("click", function() {
        result.style.left = "-350px";
        deuxiemeQuestion();
        blocReponse1.removeEventListener("click", premiereReponse1);
        blocReponse2.removeEventListener("click", premiereReponse2);
        blocReponse3.removeEventListener("click", premiereReponse3);
        blocReponse4.removeEventListener("click", premiereReponse4);
    });
};

function premiereReponse4() {
    let scoreTemp1 = score;
    echec();
    scoreTemp1 -= 1;
    score = scoreTemp1;
    playerName.innerHTML = namePlayer + " : " + score + " Points.";
    resultValid.addEventListener("click", function() {
        result.style.left = "-350px";
        premiereQuestion();
    });
};

                                        /* Fonctions réponses pour question 2 */
function deuxiemeReponse1() {
    let scoreTemp2 = score;
    echec();
    scoreTemp2 -= 1;
    score = scoreTemp2;
    playerName.innerHTML = namePlayer + " : " + score + " Points.";
    resultValid.addEventListener("click", function() {
        result.style.left = "-350px";
        deuxiemeQuestion();
    });
};

function deuxiemeReponse2() {
    let scoreTemp2 = score;
    succes();
    scoreTemp2 += 1;
    score = scoreTemp2;
    playerName.innerHTML = namePlayer + " : " + score + " Points.";
    resultValid.addEventListener("click", function() {
        result.style.left = "-350px";
        troisiemeQuestion();
        blocReponse1.removeEventListener("click", deuxiemeReponse1);
        blocReponse2.removeEventListener("click", deuxiemeReponse2);
        blocReponse3.removeEventListener("click", deuxiemeReponse3);
        blocReponse4.removeEventListener("click", deuxiemeReponse4);
    });
};

function deuxiemeReponse3() {
    let scoreTemp2 = score;
    echec();
        scoreTemp2 -= 1;
        score = scoreTemp2;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            deuxiemeQuestion();
        });
};

function deuxiemeReponse4() {
    let scoreTemp2 = score;
    echec();
        scoreTemp2 -= 1;
        score = scoreTemp2;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            deuxiemeQuestion();
        });
};

                                        /* Fonctions réponses pour question 3 */
function troisiemeReponse1() {
    let scoreTemp3 = score;
    echec();
        scoreTemp3 -= 1;
        score = scoreTemp3;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            troisiemeQuestion();
        });
};

function troisiemeReponse2() {
    let scoreTemp3 = score;
    echec();
        scoreTemp3 -= 1;
        score = scoreTemp3;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            troisiemeQuestion();
        });
};

function troisiemeReponse3() {
    let scoreTemp3 = score;
    echec();
        scoreTemp3 -= 1;
        score = scoreTemp3;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            troisiemeQuestion();
        });
};

function troisiemeReponse4() {
    let scoreTemp3 = score;
    succes();
        scoreTemp3 += 1;
        score = scoreTemp3;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            quatriemeQuestion();
            blocReponse1.removeEventListener("click", troisiemeReponse1);
            blocReponse2.removeEventListener("click", troisiemeReponse2);
            blocReponse3.removeEventListener("click", troisiemeReponse3);
            blocReponse4.removeEventListener("click", troisiemeReponse4);
        });
};

                                        /* Fonctions réponses pour question 4 */

function quatriemeReponse1() {
    let scoreTemp4 = score;
    echec();
        scoreTemp4 -= 1;
        score = scoreTemp4;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            quatriemeQuestion();
        });
};

function quatriemeReponse2() {
    let scoreTemp4 = score;
    echec();
        scoreTemp4 -= 1;
        score = scoreTemp4;
        console.log(score);
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            quatriemeQuestion();
        });
}

function quatriemeReponse3() {
    let scoreTemp4 = score;
    succes();
        scoreTemp4 += 1;
        score = scoreTemp4;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            cinquiemeQuestion();
            blocReponse1.removeEventListener("click", quatriemeReponse1);
            blocReponse2.removeEventListener("click", quatriemeReponse2);
            blocReponse3.removeEventListener("click", quatriemeReponse3);
            blocReponse4.removeEventListener("click", quatriemeReponse4);
        });
};

function quatriemeReponse4() {
    let scoreTemp4 = score;
    echec();
        scoreTemp4 -= 1;
        score = scoreTemp4;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            quatriemeQuestion();
        });
};

                                        /* Fonctions réponses pour question 5 */

function cinquiemeReponse1() {
    let scoreTemp5 = score;
    succes();
        scoreTemp5 += 1;
        score = scoreTemp5;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            sixiemeQuestion();
            blocReponse1.removeEventListener("click", cinquiemeReponse1);
            blocReponse2.removeEventListener("click", cinquiemeReponse2);
            blocReponse3.removeEventListener("click", cinquiemeReponse3);
            blocReponse4.removeEventListener("click", cinquiemeReponse4);
        });
};

function cinquiemeReponse2() {
    let scoreTemp5 = score;
    echec();
        scoreTemp5 -= 1;
        score = scoreTemp5;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            cinquiemeQuestion();
        });
};

function cinquiemeReponse3() {
    let scoreTemp5 = score;
    echec();
        scoreTemp5 -= 1;
        score = scoreTemp5;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            cinquiemeQuestion();
        });
};

function cinquiemeReponse4() {
    let scoreTemp5 = score;
    echec();
        scoreTemp5 -= 1;
        score = scoreTemp5;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            cinquiemeQuestion();
        });
};

                                        /* Fonctions réponses pour question 6 */

function sixiemeReponse1() {
    let scoreTemp6 = score;
    echec();
        scoreTemp6 -= 1;
        score = scoreTemp6;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            sixiemeQuestion();
        });
};

function sixiemeReponse2() {
    let scoreTemp6 = score;
    echec();
        scoreTemp6 -= 1;
        score = scoreTemp6;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            sixiemeQuestion();
        });
};

function sixiemeReponse3() {
    let scoreTemp6 = score;
    succes();
        scoreTemp6 += 1;
        score = scoreTemp6;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            septiemeQuestion();
            blocReponse1.removeEventListener("click", sixiemeReponse1);
            blocReponse2.removeEventListener("click", sixiemeReponse2);
            blocReponse3.removeEventListener("click", sixiemeReponse3);
            blocReponse4.removeEventListener("click", sixiemeReponse4);
        });
};

function sixiemeReponse4() {
    let scoreTemp6 = score;
    echec();
        scoreTemp6 -= 1;
        score = scoreTemp6;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            sixiemeQuestion();
        });
};

                                        /* Fonctions réponses pour question 7 */

function septiemeReponse1() {
    let scoreTemp7 = score;
    succes();
        scoreTemp7 += 1;
        score = scoreTemp7;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            huitiemeQuestion();
            blocReponse1.removeEventListener("click", septiemeReponse1);
            blocReponse2.removeEventListener("click", septiemeReponse2);
            blocReponse3.removeEventListener("click", septiemeReponse3);
            blocReponse4.removeEventListener("click", septiemeReponse4);
        });
};

function septiemeReponse2() {
    let scoreTemp7 = score;
    echec();
        scoreTemp7 -= 1;
        score = scoreTemp7;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            septiemeQuestion();
        });
};

function septiemeReponse3() {
    let scoreTemp7 = score;
    echec();
        scoreTemp7 -= 1;
        score = scoreTemp7;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            septiemeQuestion();
        });
};

function septiemeReponse4() {
    let scoreTemp7 = score;
    echec();
        scoreTemp7 -= 1;
        score = scoreTemp7;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            septiemeQuestion();
        });
};

                                        /* Fonctions réponses pour question 8 */

function huitiemeReponse1() {
    let scoreTemp8 = score;
    echec();
        scoreTemp8 -= 1;
        score = scoreTemp8;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            huitiemeQuestion();
        });
};

function huitiemeReponse2() {
    let scoreTemp8 = score;
    echec();
        scoreTemp8 -= 1;
        score = scoreTemp8;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            huitiemeQuestion();
        });
};

function huitiemeReponse3() {
    let scoreTemp8 = score;
    succes();
        scoreTemp8 += 1;
        score = scoreTemp8;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            neuviemeQuestion();
            blocReponse1.removeEventListener("click", huitiemeReponse1);
            blocReponse2.removeEventListener("click", huitiemeReponse2);
            blocReponse3.removeEventListener("click", huitiemeReponse3);
            blocReponse4.removeEventListener("click", huitiemeReponse4);
        });
};

function huitiemeReponse4() {
    let scoreTemp8 = score;
    echec();
        scoreTemp8 -= 1;
        score = scoreTemp8;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            huitiemeQuestion();
        });
};

                                        /* Fonctions réponses pour question 9 */

function neuviemeReponse1() {
    let scoreTemp9 = score;
    echec();
        scoreTemp9 -= 1;
        score = scoreTemp9;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            neuviemeQuestion();
        });
};

function neuviemeReponse2() {
    let scoreTemp9 = score;
    echec();
        scoreTemp9 -= 1;
        score = scoreTemp9;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            neuviemeQuestion();
        });
};

function neuviemeReponse3() {
    let scoreTemp9 = score;
    echec();
        scoreTemp9 -= 1;
        score = scoreTemp9;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            neuviemeQuestion();
        });
};

function neuviemeReponse4() {
    let scoreTemp9 = score;
    succes();
        scoreTemp9 += 1;
        score = scoreTemp9;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            dixiemeQuestion();
            blocReponse1.removeEventListener("click", neuviemeReponse1);
            blocReponse2.removeEventListener("click", neuviemeReponse2);
            blocReponse3.removeEventListener("click", neuviemeReponse3);
            blocReponse4.removeEventListener("click", neuviemeReponse4);
        });
};

                                        /* Fonctions réponses pour question 10 */

function dixiemeReponse1() {
    let scoreTemp10 = score;
    echec();
        scoreTemp10 -= 1;
        score = scoreTemp10;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            dixiemeQuestion();
        });
};

function dixiemeReponse2() {
    let scoreTemp10 = score;
    succes();
        result.style.height = "200px";
        result.style.width = "250px";
        result.style.top = "calc(50vh - 100px)";
        result.style.left = "calc(50vw - 150px)";
        scoreTemp10 += 1;
        score = scoreTemp10;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        if (score < 0) {
            resultQuestion.innerHTML = score + " Points ?! Sérieux ?!<br>Va falloir faire des efforts !";
        } else if (score === 0) {
            resultQuestion.innerHTML = "BOOUUHH ! <br>" + score + " Points ! <br>La loose !";
        } else if (score > 0 && score <5) {
            resultQuestion.innerHTML = score + " Points,<br> c'est vraiment pas terrible !";
        } else if (score >= 5 && score < 10) {
            resultQuestion.innerHTML = "Peut mieux faire, <br>mais " + score + " Points, c'est déjà pas mal !";
        } else {
            resultQuestion.innerHTML = score + " Points !<br>Félicitations, vous êtes vraiment fort !";
        }
        resultValid.addEventListener("click", function() {
            window.location.reload();
        });
};

function dixiemeReponse3() {
    let scoreTemp10 = score;
    echec();
        scoreTemp10 -= 1;
        score = scoreTemp10;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            dixiemeQuestion();
        });
};

function dixiemeReponse4() {
    let scoreTemp10 = score;
    echec();
        scoreTemp10 -= 1;
        score = scoreTemp10;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-350px";
            dixiemeQuestion();
        });
};


                                        /* Première Question */
function premiereQuestion() {
    preparerPremiereQuestion();
    question.innerHTML = questions[0];
    compteur.innerHTML = "1 / 10";
    reponse1.innerHTML = reponses[0][0];
    reponse2.innerHTML = reponses[0][1];
    reponse3.innerHTML = reponses[0][2];
    reponse4.innerHTML = reponses[0][3]; 
    /* Reponse 1 */
    blocReponse1.addEventListener("click", premiereReponse1);
    /* Réponse 2 */
    blocReponse2.addEventListener("click", premiereReponse2);
    /* Réponse 3 */
    blocReponse3.addEventListener("click", premiereReponse3);
    /* Réponse 4 */
    blocReponse4.addEventListener("click", premiereReponse4);
};

                                        /* Deuxième Question */
function deuxiemeQuestion() {
    question.innerHTML = questions[1];
    compteur.innerHTML = "2 / 10";
    reponse1.innerHTML = reponses[1][0];
    reponse2.innerHTML = reponses[1][1];
    reponse3.innerHTML = reponses[1][2];
    reponse4.innerHTML = reponses[1][3];
    blocReponse1.addEventListener("click", deuxiemeReponse1);
    blocReponse2.addEventListener("click", deuxiemeReponse2);
    blocReponse3.addEventListener("click", deuxiemeReponse3);
    blocReponse4.addEventListener("click", deuxiemeReponse4);
};

                                        /* Troisième Question */
function troisiemeQuestion() {
    question.innerHTML = questions[2];
    compteur.innerHTML = "3 / 10";
    reponse1.innerHTML = reponses[2][0];
    reponse2.innerHTML = reponses[2][1];
    reponse3.innerHTML = reponses[2][2];
    reponse4.innerHTML = reponses[2][3];
    blocReponse1.addEventListener("click", troisiemeReponse1);
    blocReponse2.addEventListener("click", troisiemeReponse2);
    blocReponse3.addEventListener("click", troisiemeReponse3);
    blocReponse4.addEventListener("click", troisiemeReponse4);
};

                                        /* Quatrième Question */
function quatriemeQuestion() {
    question.innerHTML = questions[3];
    compteur.innerHTML = "4 / 10";
    reponse1.innerHTML = reponses[3][0];
    reponse2.innerHTML = reponses[3][1];
    reponse3.innerHTML = reponses[3][2];
    reponse4.innerHTML = reponses[3][3];
    blocReponse1.addEventListener("click", quatriemeReponse1);
    blocReponse2.addEventListener("click", quatriemeReponse2);
    blocReponse3.addEventListener("click", quatriemeReponse3);
    blocReponse4.addEventListener("click", quatriemeReponse4);
};

                                        /* Cinquième Question */
function cinquiemeQuestion() {
    question.innerHTML = questions[4];
    compteur.innerHTML = "5 / 10";
    reponse1.innerHTML = reponses[4][0];
    reponse2.innerHTML = reponses[4][1];
    reponse3.innerHTML = reponses[4][2];
    reponse4.innerHTML = reponses[4][3];
    blocReponse1.addEventListener("click", cinquiemeReponse1);
    blocReponse2.addEventListener("click", cinquiemeReponse2);
    blocReponse3.addEventListener("click", cinquiemeReponse3);
    blocReponse4.addEventListener("click", cinquiemeReponse4);
};

                                        /* Sixième Question */
function sixiemeQuestion() {
    question.innerHTML = questions[5];
    compteur.innerHTML = "6 / 10";
    reponse1.innerHTML = reponses[5][0];
    reponse2.innerHTML = reponses[5][1];
    reponse3.innerHTML = reponses[5][2];
    reponse4.innerHTML = reponses[5][3];
    blocReponse1.addEventListener("click", sixiemeReponse1);
    blocReponse2.addEventListener("click", sixiemeReponse2);
    blocReponse3.addEventListener("click", sixiemeReponse3);
    blocReponse4.addEventListener("click", sixiemeReponse4);
};

                                        /* Septième Question */
function septiemeQuestion() {
    question.innerHTML = questions[6];
    compteur.innerHTML = "7 / 10";
    reponse1.innerHTML = reponses[6][0];
    reponse2.innerHTML = reponses[6][1];
    reponse3.innerHTML = reponses[6][2];
    reponse4.innerHTML = reponses[6][3];
    blocReponse1.addEventListener("click", septiemeReponse1);
    blocReponse2.addEventListener("click", septiemeReponse2);
    blocReponse3.addEventListener("click", septiemeReponse3);
    blocReponse4.addEventListener("click", septiemeReponse4);
};

                                        /* Huitième Question */
function huitiemeQuestion() {
    question.innerHTML = questions[7];
    compteur.innerHTML = "8 / 10";
    reponse1.innerHTML = reponses[7][0];
    reponse2.innerHTML = reponses[7][1];
    reponse3.innerHTML = reponses[7][2];
    reponse4.innerHTML = reponses[7][3];
    blocReponse1.addEventListener("click", huitiemeReponse1);
    blocReponse2.addEventListener("click", huitiemeReponse2);
    blocReponse3.addEventListener("click", huitiemeReponse3);
    blocReponse4.addEventListener("click", huitiemeReponse4);
};

                                        /* Neuvième Question */
function neuviemeQuestion() {
    let scoreTemp9 = score;
    question.innerHTML = questions[8];
    compteur.innerHTML = "9 / 10";
    reponse1.innerHTML = reponses[8][0];
    reponse2.innerHTML = reponses[8][1];
    reponse3.innerHTML = reponses[8][2];
    reponse4.innerHTML = reponses[8][3];
    blocReponse1.addEventListener("click", neuviemeReponse1);
    blocReponse2.addEventListener("click", neuviemeReponse2);
    blocReponse3.addEventListener("click", neuviemeReponse3);
    blocReponse4.addEventListener("click", neuviemeReponse4);
};

                                        /* Dixième Question */
function dixiemeQuestion() {
    question.innerHTML = questions[9];
    compteur.innerHTML = "10 / 10";
    reponse1.innerHTML = reponses[9][0];
    reponse2.innerHTML = reponses[9][1];
    reponse3.innerHTML = reponses[9][2];
    reponse4.innerHTML = reponses[9][3];
    blocReponse1.addEventListener("click", dixiemeReponse1);
    blocReponse2.addEventListener("click", dixiemeReponse2);
    blocReponse3.addEventListener("click", dixiemeReponse3);
    blocReponse4.addEventListener("click", dixiemeReponse4);
};

