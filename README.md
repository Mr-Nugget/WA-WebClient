# Wild Adventure - Client Web

## Présentation

Ce projet est le front-end de l'application Wild Adventure.
Il communique avec les différents webservices qui composent l'application en passant par l'API Gateway ZUUL, point d'entrée unique du moteur applicatif.
Il communique également avec un sandbox de l'API Paypal.

Chacune des vues de l'application est un composant Angular s'incluant dans un composant de base "app-component" contenant le header de l'application.

Dans le package services de l'application, nous retrouvons le code spécifiques aux appels aux composants externes, à savoir l'API Paylpal et les microservices de l'application.

Le routage des vues se fait dans le package "app-routing" qui définit l'URL associé à chaque vue et les données transmises lors de la navigation. 
Certaines vues sont gardées via une authentification par token JWT stocké en mémoire dans les cookies de l'application et généré via microservice permettant l'authentification d'un utilisateur.

## Déploiement

Pour deployer le projet en local, assurez-vous d'avoir Node.JS d'installé sur votre machine, ainsi que la dernière version du client Angular.
Lors de la première utilisation, exécutez la commande `npm install` à la base du projet.

Exécutez ensuite la commande `ng serve` pour démarrer l'application, puis rendez-vous à l'adresse par défaut : `http://localhost:4200/`



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
