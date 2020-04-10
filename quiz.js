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
    resultQuestion.innerHTML = "Loupé !";
    resultValid.style.backgroundColor = "var(--vert)";
    result.style.left = "calc(50vw - 100px)";
}

/* Fonction qui affiche une fenêtre de succes. */ 
function succes() {
    result.style.backgroundColor = "var(--vert)";
    resultQuestion.innerHTML = "Bien vu !";
    resultValid.style.backgroundColor = "var(--bordeaux)";
    result.style.left = "calc(50vw - 100px)";
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

/* Première question */
function premiereQuestion() {
    preparerPremiereQuestion();
    question.innerHTML = questions[0];
    compteur.innerHTML = "1 / 10";
    reponse1.innerHTML = reponses[0][0];
    reponse2.innerHTML = reponses[0][1];
    reponse3.innerHTML = reponses[0][2];
    reponse4.innerHTML = reponses[0][3];
    let scoreTemp1 = score; // Variable temporaire pour éviter un bug sur le comptage de score.
    /* Reponse 1 */
    blocReponse1.addEventListener("click", function() {
        echec();
        scoreTemp1 -= 1;
        score = scoreTemp1;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            premiereQuestion();
        });
    });
    /* Réponse 2 */
    blocReponse2.addEventListener("click", function() {
        echec();
        scoreTemp1 -= 1;
        score = scoreTemp1;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            premiereQuestion();
        });
    });
    /* Réponse 3 */
    blocReponse3.addEventListener("click", function() {
        succes();
        scoreTemp1 += 1;
        score = scoreTemp1;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            deuxiemeQuestion();
        });

    });
    /* Réponse 4 */
    blocReponse4.addEventListener("click", function() {
        echec();
        scoreTemp1 -= 1;
        score = scoreTemp1;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            premiereQuestion();
        });
    });
}

function deuxiemeQuestion() {
    let scoreTemp2 = score;
    question.innerHTML = questions[1];
    compteur.innerHTML = "2 / 10";
    reponse1.innerHTML = reponses[1][0];
    reponse2.innerHTML = reponses[1][1];
    reponse3.innerHTML = reponses[1][2];
    reponse4.innerHTML = reponses[1][3];
    blocReponse1.addEventListener("click", function() {
        echec();
        scoreTemp2 -= 1;
        score = scoreTemp2;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            deuxiemeQuestion();
        });
    });
    blocReponse2.addEventListener("click", function() {
        succes();
        scoreTemp2 += 1;
        score = scoreTemp2;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            troisiemeQuestion();
        });
    });
    blocReponse3.addEventListener("click", function() {
        echec();
        scoreTemp2 -= 1;
        score = scoreTemp2;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            deuxiemeQuestion();
        });

    });
    blocReponse4.addEventListener("click", function() {
        echec();
        scoreTemp2 -= 1;
        score = scoreTemp2;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            deuxiemeQuestion();
        });
    });
}


function troisiemeQuestion() {
    let scoreTemp3 = score;
    question.innerHTML = questions[2];
    compteur.innerHTML = "3 / 10";
    reponse1.innerHTML = reponses[2][0];
    reponse2.innerHTML = reponses[2][1];
    reponse3.innerHTML = reponses[2][2];
    reponse4.innerHTML = reponses[2][3];
    blocReponse1.addEventListener("click", function() {
        echec();
        scoreTemp3 -= 1;
        score = scoreTemp3;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            troisiemeQuestion();
        });
    });
    blocReponse2.addEventListener("click", function() {
        echec();
        scoreTemp3 -= 1;
        score = scoreTemp3;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            troisiemeQuestion();
        });
    });
    blocReponse3.addEventListener("click", function() {
        echec();
        scoreTemp3 -= 1;
        score = scoreTemp3;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            troisiemeQuestion();
        });

    });
    blocReponse4.addEventListener("click", function() {
        succes();
        scoreTemp3 += 1;
        score = scoreTemp3;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            quatriemeQuestion();
        });
    });
}


function quatriemeQuestion() {
    let scoreTemp4 = score;
    question.innerHTML = questions[3];
    compteur.innerHTML = "4 / 10";
    reponse1.innerHTML = reponses[3][0];
    reponse2.innerHTML = reponses[3][1];
    reponse3.innerHTML = reponses[3][2];
    reponse4.innerHTML = reponses[3][3];
    blocReponse1.addEventListener("click", function() {
        echec();
        scoreTemp4 -= 1;
        score = scoreTemp4;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            quatriemeQuestion();
        });
    });
    blocReponse2.addEventListener("click", function() {
        echec();
        scoreTemp4 -= 1;
        score = scoreTemp4;
        console.log(score);
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            quatriemeQuestion();
        });
    });
    blocReponse3.addEventListener("click", function() {
        succes();
        scoreTemp4 += 1;
        score = scoreTemp4;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            cinquiemeQuestion();
        });

    });
    blocReponse4.addEventListener("click", function() {
        echec();
        scoreTemp4 -= 1;
        score = scoreTemp4;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            quatriemeQuestion();
        });
    });
}


function cinquiemeQuestion() {
    let scoreTemp5 = score;
    question.innerHTML = questions[4];
    compteur.innerHTML = "5 / 10";
    reponse1.innerHTML = reponses[4][0];
    reponse2.innerHTML = reponses[4][1];
    reponse3.innerHTML = reponses[4][2];
    reponse4.innerHTML = reponses[4][3];
    blocReponse1.addEventListener("click", function() {
        succes();
        scoreTemp5 += 1;
        score = scoreTemp5;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            sixiemeQuestion();
        });
    });
    blocReponse2.addEventListener("click", function() {
        echec();
        scoreTemp5 -= 1;
        score = scoreTemp5;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            cinquiemeQuestion();
        });
    });
    blocReponse3.addEventListener("click", function() {
        echec();
        scoreTemp5 -= 1;
        score = scoreTemp5;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            cinquiemeQuestion();
        });

    });
    blocReponse4.addEventListener("click", function() {
        echec();
        scoreTemp5 -= 1;
        score = scoreTemp5;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            cinquiemeQuestion();
        });
    });
}


function sixiemeQuestion() {
    let scoreTemp6 = score;
    question.innerHTML = questions[5];
    compteur.innerHTML = "6 / 10";
    reponse1.innerHTML = reponses[5][0];
    reponse2.innerHTML = reponses[5][1];
    reponse3.innerHTML = reponses[5][2];
    reponse4.innerHTML = reponses[5][3];
    blocReponse1.addEventListener("click", function() {
        echec();
        scoreTemp6 -= 1;
        score = scoreTemp6;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            sixiemeQuestion();
        });
    });
    blocReponse2.addEventListener("click", function() {
        echec();
        scoreTemp6 -= 1;
        score = scoreTemp6;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            sixiemeQuestion();
        });
    });
    blocReponse3.addEventListener("click", function() {
        succes();
        scoreTemp6 += 1;
        score = scoreTemp6;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            septiemeQuestion();
        });

    });
    blocReponse4.addEventListener("click", function() {
        echec();
        scoreTemp6 -= 1;
        score = scoreTemp6;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            sixiemeQuestion();
        });
    });
}


function septiemeQuestion() {
    let scoreTemp7 = score;
    question.innerHTML = questions[6];
    compteur.innerHTML = "7 / 10";
    reponse1.innerHTML = reponses[6][0];
    reponse2.innerHTML = reponses[6][1];
    reponse3.innerHTML = reponses[6][2];
    reponse4.innerHTML = reponses[6][3];
    blocReponse1.addEventListener("click", function() {
        succes();
        scoreTemp7 += 1;
        score = scoreTemp7;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            huitiemeQuestion();
        });
    });
    blocReponse2.addEventListener("click", function() {
        echec();
        scoreTemp7 -= 1;
        score = scoreTemp7;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            septiemeQuestion();
        });
    });
    blocReponse3.addEventListener("click", function() {
        echec();
        scoreTemp7 -= 1;
        score = scoreTemp7;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            septiemeQuestion();
        });

    });
    blocReponse4.addEventListener("click", function() {
        echec();
        scoreTemp7 -= 1;
        score = scoreTemp7;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            septiemeQuestion();
        });
    });
}


function huitiemeQuestion() {
    let scoreTemp8 = score;
    question.innerHTML = questions[7];
    compteur.innerHTML = "8 / 10";
    reponse1.innerHTML = reponses[7][0];
    reponse2.innerHTML = reponses[7][1];
    reponse3.innerHTML = reponses[7][2];
    reponse4.innerHTML = reponses[7][3];
    blocReponse1.addEventListener("click", function() {
        echec();
        scoreTemp8 -= 1;
        score = scoreTemp8;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            huitiemeQuestion();
        });
    });
    blocReponse2.addEventListener("click", function() {
        echec();
        scoreTemp8 -= 1;
        score = scoreTemp8;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            huitiemeQuestion();
        });
    });
    blocReponse3.addEventListener("click", function() {
        succes();
        scoreTemp8 += 1;
        score = scoreTemp8;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            neuviemeQuestion();
        });

    });
    blocReponse4.addEventListener("click", function() {
        echec();
        scoreTemp8 -= 1;
        score = scoreTemp8;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            huitiemeQuestion();
        });
    });
}


function neuviemeQuestion() {
    let scoreTemp9 = score;
    question.innerHTML = questions[8];
    compteur.innerHTML = "9 / 10";
    reponse1.innerHTML = reponses[8][0];
    reponse2.innerHTML = reponses[8][1];
    reponse3.innerHTML = reponses[8][2];
    reponse4.innerHTML = reponses[8][3];
    blocReponse1.addEventListener("click", function() {
        echec();
        scoreTemp9 -= 1;
        score = scoreTemp9;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            neuviemeQuestion();
        });
    });
    blocReponse2.addEventListener("click", function() {
        echec();
        scoreTemp9 -= 1;
        score = scoreTemp9;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            neuviemeQuestion();
        });
    });
    blocReponse3.addEventListener("click", function() {
        echec();
        scoreTemp9 -= 1;
        score = scoreTemp9;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            neuviemeQuestion();
        });

    });
    blocReponse4.addEventListener("click", function() {
        succes();
        scoreTemp9 += 1;
        score = scoreTemp9;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            dixiemeQuestion();
        });
    });
}


function dixiemeQuestion() {
    let scoreTemp10 = score;
    question.innerHTML = questions[9];
    compteur.innerHTML = "10 / 10";
    reponse1.innerHTML = reponses[9][0];
    reponse2.innerHTML = reponses[9][1];
    reponse3.innerHTML = reponses[9][2];
    reponse4.innerHTML = reponses[9][3];
    blocReponse1.addEventListener("click", function() {
        echec();
        scoreTemp10 -= 1;
        score = scoreTemp10;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            dixiemeQuestion();
        });
    });
    blocReponse2.addEventListener("click", function() {
        succes();
        result.style.height = "200px";
        scoreTemp10 += 1;
        score = scoreTemp10;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultQuestion.innerHTML = "Félicitations, vous avez terminé le quiz avec " + score + " Points !";
        resultValid.addEventListener("click", function() {
            window.location.reload();
        });
    });
    blocReponse3.addEventListener("click", function() {
        echec();
        scoreTemp10 -= 1;
        score = scoreTemp10;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            dixiemeQuestion();
        });

    });
    blocReponse4.addEventListener("click", function() {
        echec();
        scoreTemp10 -= 1;
        score = scoreTemp10;
        playerName.innerHTML = namePlayer + " : " + score + " Points.";
        resultValid.addEventListener("click", function() {
            result.style.left = "-250px";
            dixiemeQuestion();
        });
    });
}

