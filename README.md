# 🥾 AdaRando

Une application React affichant une liste de randonnées..

## 📝 Description

AdaRando est une page React qui affiche 12 randonnées à partir d'un fichier de données fourni (`randonnees.json`). Le projet est volontairement simple : uniquement du front, aucune API, aucune donnée à aller chercher. L'objectif est de retravailler les réflexes de base de React :

- Création d'un projet React de zéro avec Vite
- Découpage en composants
- Passage de données via les props
- Affichage d'une liste avec `.map()`
- Affichage conditionnel

## ✨ Fonctionnalités à mettre en place

- [x] Composant `Entete` (titre + phrase de présentation)
- [x] Composant `CarteRando` (nom, difficulté, durée, dénivelé d'une randonnée)
- [x] Composant `ListeRandos` (affiche une `CarteRando` par randonnée)
- [x] Affichage des 12 randonnées
- [x] Mention "Balisée" affichée uniquement si la randonnée est balisée
- [x] Composant `EtiquetteDifficulte` (affiche la difficulté)  
- [x] BONUS : Compteur « 12 randonnées » dans l'en-tête
- [ ] BONUS : Un style différent selon la difficulté
- [ ] BONUS : Un useState avec des boutons pour filtrer par difficulté

## 🛠️ Technologies utilisées

- **React** (via Vite)
- **JavaScript**
- **CSS3**

## 📂 Structure du projet

```
kata-js-8-react-de-zero-adarando/
├── src/
│   ├── components/
│   │   ├── Entete.jsx
│   │   ├── ListeRandos.jsx
│   │   ├── CarteRando.jsx
│   │   └── EtiquetteDifficulte.jsx
│   ├── randonnees.json
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── notes.md
└── README.md
```

## 🌲 Hiérarchie des composants

```
App
├── Entete
└── ListeRandos
    └── CarteRando
        └── EtiquetteDifficulte
```

`ListeRandos` reçoit le tableau complet des randonnées et affiche une `CarteRando` par randonnée. Chaque `CarteRando` reçoit une seule randonnée et affiche sa propre `EtiquetteDifficulte`.

## 🚀 Installation

1. Cloner le repository :
   ```bash
   git clone git@github.com:Lucille-R/kata-js-8-react-de-zero-adarando.git
   ```
2. Se rendre dans le dossier du projet :
   ```bash
   cd kata-js-8-react-de-zero-adarando
   ```
3. Installer les dépendances :
   ```bash
   npm install
   ```
4. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

## 💻 Utilisation

Ouvrir l'URL affichée dans le terminal (en général `http://localhost:5173`) pour voir la liste des 12 randonnées, avec leur nom, leur difficulté, leur durée, leur dénivelé, et la mention "Balisée" quand elle s'applique.

## 🌳 Workflow Git

Ce projet suit une organisation en branches inspirée de Git Flow :

- `main` : version stable du projet
- `dev` : branche d'intégration des fonctionnalités
- `feature/nom-de-la-feature` : une branche par fonctionnalité développée

## 👤 Auteur

- **Lucille** — Étudiante chez Ada Tech School

## 📄 Licence

Projet réalisé dans un cadre pédagogique — Ada Tech School.
