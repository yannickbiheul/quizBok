# QuizBok
Un p'tit quiz avec 10 questions.

Incrémentation du score quand la réponse est correcte,

Décrémentation quand elle est incorrecte.

Le but du jeu est d'arriver à 10 points à la fin du quiz.

# Langages
* HTML
* CSS
* JavaScript

# Compétences
* CSS
    * Variables
    * FlexBox

* JavaScript
    * Variables
    * Arrays
    * Instructions conditionnelles
    * Intéractions avec le DOM

# Outils

* [Visual Studio Code](https://code.visualstudio.com/) pour l'éditeur de texte
* [Git](https://git-scm.com/) pour la gestion de versions
* [Git Bash](https://gitforwindows.org/) comme terminal de commande
* [GitHub](https://github.com/) pour partager le code en ligne
* [Google Chrome](https://www.google.fr/chrome/?brand=CHBD&gclid=CjwKCAjwpqv0BRABEiwA-TySweC2bONhPrgyuzbP4_9snC9rXGiS1lxTNuhsrfpnmj39i5z8PpHkJRoC7C0QAvD_BwE&gclsrc=aw.ds) comme navigateur
* [Google Fonts](https://fonts.google.com/) pour les polices
* [Flat ui colors](https://flatuicolors.com/) pour les couleurs
* [FileZilla](https://filezilla-project.org/) pour communiquer avec le serveur
* [Ionos](https://www.ionos.fr/) pour l'achat du nom de domaine

# Journal

* **8 Avril 2020**
    * Lancement du projet, création de l'interface.

* **9 Avril 2020**
    * Préparation des 2 premières questions.
    * Ajout du footer et du menu.

* **10 Avril 2020**
    * Réglage du bug de score.
    * Ajout des 8 dernières questions.
    * Réglages de quelques bugs.
    * Refactoring pour gagner quelques lignes.

* **11 Avril 2020**
    * Réglage du bug de temps de chargement.
    * Ajout d'instructions conditionnelles pour un résultat personnalisé en fonction du score.

# Problèmes rencontrés

* **9 Avril 2020**
    * Le score ne s'incrémente pas quand on répond correctement à la deuxième question,
    et donne des résultats bizarres quand on clique plusieurs fois sur les réponses (se multiplie par 2, etc...).
    **Problème reglé le 10 Avril en ajoutant une variable temporaire (scoreTemp).**
    * Le jeu est long à charger sur la fin.
    **Problème reglé le 11 Avril en ajoutant des removeEventListener.**
    Merci à Laurent H., Jérémy S. et Gaetan P. pour leurs conseils !

# Jouer

Jouer au jeu ici : [QuizBok](http://yannickbiheul.fr/quiz.html)
    
