# Print It

Projet 4 réalisé dans le cadre de la formation **Intégrateur Web d’OpenClassrooms**.

L’objectif était de dynamiser le site statique de **Print It**, une imprimerie familiale fictive, en développant un carrousel interactif avec JavaScript.

## Présentation du projet

Print It propose différents services d’impression à destination des entreprises. Le site présente l’entreprise, ses produits, ses engagements et ses informations de contact.

La mission consistait à compléter la bannière principale afin qu’elle puisse présenter plusieurs offres sous la forme d’un diaporama.

## Fonctionnalités du carrousel

- affichage de quatre diapositives composées d’une image et d’un texte ;
- navigation avec les flèches précédente et suivante ;
- navigation directe grâce aux points situés sous la bannière ;
- mise en évidence du point correspondant à la diapositive active ;
- navigation circulaire entre la première et la dernière diapositive ;
- défilement automatique toutes les trois secondes ;
- arrêt du défilement automatique après une interaction manuelle ;
- mise à jour dynamique de l’image et du texte de la bannière.

## Travail réalisé

- création d’un tableau d’objets regroupant les images et les textes des diapositives ;
- sélection et manipulation des éléments du DOM ;
- création d’une fonction de rendu commune ;
- gestion de l’index de la diapositive active ;
- programmation des fonctions de navigation précédente, suivante et directe ;
- ajout des écouteurs d’événements sur les flèches et les points ;
- utilisation de l’opérateur modulo pour rendre la navigation continue ;
- mise en place et arrêt du défilement automatique avec `setInterval` et `clearInterval` ;
- ajout des boutons et des indicateurs du carrousel dans le HTML.

## Technologies utilisées

- HTML5
- CSS3
- JavaScript Vanilla
- Manipulation du DOM
- Gestion des événements
- Google Fonts

Le projet ne repose sur aucun framework ni aucune bibliothèque JavaScript.

## Branche du projet

- **`main`** : contient la version du site avec le carrousel JavaScript finalisé.

## Installation et lancement

Ce projet est un site statique et ne nécessite aucune installation de dépendances.

1. Clonez le dépôt :

```bash
git clone <URL_DU_DEPOT>
```

2. Placez-vous dans le dossier du projet :

```bash
cd Print-It-JS
```

3. Ouvrez le fichier `index.html` dans votre navigateur.

Vous pouvez également utiliser une extension telle que **Live Server** dans Visual Studio Code pour lancer le site localement.

## Structure du projet

```text
Projet-4-Print-It-JS/
├── assets/
│   ├── images/
│   │   └── slideshow/  # Images utilisées par le carrousel
│   ├── script.js       # Logique JavaScript du carrousel
│   └── style.css       # Mise en forme du site et du carrousel
├── index.html          # Structure de la page
└── README.md           # Documentation du projet
```

## Fonctionnement JavaScript

Les informations des diapositives sont regroupées dans le tableau `slides`. La variable `index` représente la diapositive actuellement affichée.

La fonction `render()` utilise cet index pour :

- modifier la source de l’image principale ;
- actualiser le texte de la bannière ;
- déplacer la classe `dot_selected` sur le bon indicateur.

Les fonctions `prev()`, `next()` et `goTo()` modifient l’index avant d’appeler de nouveau la fonction de rendu.

## Compétences travaillées

- utiliser les fondamentaux de JavaScript ;
- manipuler le DOM ;
- réagir aux actions de l’utilisateur avec des événements ;
- parcourir un tableau et exploiter des objets ;
- créer et réutiliser des fonctions ;
- gérer un index et une navigation circulaire ;
- modifier dynamiquement des classes, des attributs et du contenu HTML ;
- utiliser une temporisation pour automatiser une action.

## Contexte

Projet pédagogique réalisé dans le cadre de la formation **Intégrateur Web** d’OpenClassrooms.
