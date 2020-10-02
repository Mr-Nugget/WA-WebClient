# Wild Adventure - Client Web

## Pré-requis

Pour deployer le projet en local, assurez-vous d'avoir Node.JS d'installé sur votre machine, ainsi que la dernière version du client Angular : 
node.JS : https://nodejs.org/en/download/
CLI Angular : https://cli.angular.io/

## Déploiement en local

Lors de la première utilisation, exécutez cette commande à la base du projet :
```bash
npm install
```
Pour démarrer l'application, executez la commande :
```bash
ng serve
```
Rendez-vous ensuite à l'adresse : http://localhost:4200/

## Configuratino de l'API Paypal 

Retrouvez la configuration Paypal dans le component "payment" de l'application.

## Dépendances

- Bootstrap
- Google Material Design
- Paypal API


## Présentation

Ce projet est le front-end de l'application Wild Adventure.
Il communique avec les différents webservices qui composent l'application en passant par l'API Gateway ZUUL, point d'entrée unique du moteur applicatif.
Il communique également avec un sandbox de l'API Paypal.

Chacune des vues de l'application est un composant Angular s'incluant dans un composant de base "app-component" contenant le header de l'application.

Dans le package services de l'application, nous retrouvons le code spécifiques aux appels aux composants externes, à savoir l'API Paylpal et les microservices de l'application.

Le routage des vues se fait dans le package "app-routing" qui définit l'URL associé à chaque vue et les données transmises lors de la navigation. 
Certaines vues sont gardées via une authentification par token JWT stocké en mémoire dans les cookies de l'application et généré via microservice permettant l'authentification d'un utilisateur.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
