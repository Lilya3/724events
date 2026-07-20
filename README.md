# 724events

Projet 9 réalisé dans le cadre de la formation **Intégrateur Web d’OpenClassrooms**.

L’objectif était de reprendre et finaliser le site React existant de **724events**, une agence événementielle fictive, en identifiant les anomalies, en corrigeant les fonctionnalités défectueuses et en vérifiant le comportement de l’application avec des tests.

## Présentation du projet

724events est un site vitrine one-page présentant les prestations, les réalisations et l’équipe d’une agence spécialisée dans l’organisation d’événements.

L’application comprend notamment :

- un carrousel mettant en avant plusieurs événements ;
- une présentation des services de l’agence ;
- une liste paginée des réalisations ;
- un filtre des événements par catégorie ;
- une fenêtre modale affichant le détail d’un événement ;
- une présentation des membres de l’équipe ;
- un formulaire de contact avec confirmation d’envoi ;
- un footer affichant la prestation la plus récente.

## Mission

Le design et une première intégration avaient déjà été réalisés. La mission consistait à analyser le code existant, rechercher les dysfonctionnements, corriger les bugs et compléter la validation du site avant sa mise en ligne.

Le travail a porté sur :

- l’analyse du fonctionnement de l’application et de la circulation des données ;
- le débogage avec les outils de développement du navigateur et React Developer Tools ;
- la correction des composants React concernés ;
- la vérification des fonctionnalités à l’aide de Jest et React Testing Library ;
- la préparation de scénarios de test dans un cahier de recette.

## Corrections réalisées

### Liste et filtrage des événements

- correction du filtrage des réalisations par catégorie ;
- génération de la liste des catégories à partir des données disponibles ;
- réinitialisation de la pagination lors d’un changement de filtre ;
- recalcul du nombre de pages selon les résultats filtrés ;
- affichage des détails d’un événement dans une fenêtre modale.

### Carrousel

- tri chronologique des événements mis en avant ;
- correction de l’affichage des diapositives et de leurs informations ;
- rotation automatique du carrousel toutes les cinq secondes ;
- retour à la première diapositive après la dernière ;
- nettoyage du minuteur lors de la mise à jour du composant.

### Formulaire de contact

- correction de la soumission du formulaire ;
- ajout d’un état d’envoi empêchant les soumissions multiples ;
- affichage du libellé « En cours » pendant le traitement ;
- ouverture d’une fenêtre de confirmation après un envoi réussi.

### Affichage des événements

- correction des informations affichées dans les cartes ;
- calcul et affichage du mois correspondant à la date de chaque événement ;
- recherche de l’événement le plus récent pour la section « Notre dernière prestation ».

## Technologies utilisées

- React 18
- JavaScript
- HTML5
- Sass / SCSS
- React Context API
- PropTypes
- Jest
- React Testing Library
- Create React App
- ESLint et Prettier

## Données et état de l’application

Les données sont chargées depuis le fichier `public/events.json` par le `DataProvider`.

Le contexte React rend ensuite disponibles :

- les réalisations et les événements mis en avant dans le carrousel ;
- une valeur initiale permettant d’identifier le chargement en cours ;
- les éventuelles erreurs rencontrées pendant la récupération des données.

Les composants peuvent accéder à ces informations grâce au hook personnalisé `useData()`.

## Tests

Le projet contient des tests unitaires et d’intégration portant notamment sur :

- les composants `Button`, `Field`, `Select` et `EventCard` ;
- la récupération des données avec `DataContext` ;
- le filtrage et l’ouverture des événements ;
- le carrousel ;
- le formulaire de contact et sa confirmation ;
- les fenêtres modales ;
- l’affichage général de la page d’accueil.

Pour lancer les tests :

```bash
npm test -- --watchAll=false
```

## Branche du projet

- **`main`** : contient la version corrigée et finalisée de l’application.

## Installation et lancement

### Prérequis

- Node.js
- npm

### Installation

1. Clonez le dépôt :

```bash
git clone <URL_DU_DEPOT>
```

2. Placez-vous dans le dossier du projet :

```bash
cd 724events
```

3. Installez les dépendances :

```bash
npm install
```

4. Lancez l’application :

```bash
npm start
```

L’application est ensuite accessible à l’adresse `http://localhost:3000`.

## Scripts disponibles

```bash
npm start
```

Lance l’application en mode développement.

```bash
npm test
```

Lance les tests avec Jest et React Testing Library.

```bash
npm run build
```

Génère une version de production dans le dossier `build`.

```bash
npm run lint
```

Analyse le code avec ESLint.

## Structure du projet

```text
724events/
├── public/
│   ├── images/              # Images utilisées sur le site
│   └── events.json          # Données de l’application
├── src/
│   ├── components/          # Composants réutilisables
│   ├── containers/          # Composants avec logique et état
│   ├── contexts/            # Chargement et partage des données
│   ├── helpers/             # Fonctions utilitaires
│   ├── pages/               # Page principale de l’application
│   ├── App.js               # Composant racine
│   └── index.js             # Point d’entrée React
├── package.json             # Dépendances et scripts
└── README.md                # Documentation du projet
```

## Compétences travaillées

- analyser une application React existante ;
- identifier et corriger des bugs fonctionnels ;
- utiliser les outils de débogage du navigateur ;
- comprendre la propagation des données avec la Context API ;
- gérer l’état et le cycle de vie avec les hooks React ;
- tester des composants et des parcours utilisateur ;
- rédiger des scénarios de validation fonctionnelle ;
- maintenir et finaliser une base de code existante.

## Contexte

Projet pédagogique réalisé dans le cadre de la formation **Intégrateur Web** d’OpenClassrooms.
