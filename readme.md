# Projet API.Crypto

## 1. Contexte de l'évaluation 

Module de formation XML/Ajax.  
  
L'objectif est de faire une application permettant de suivre le cours de plusieurs cryptomonnaies 
Nous avons à disposition l'API Coinlayer.(Attention seulement 100 requetes par mois en version gratuite)  
http://api.coinlayer.com/api/



#### 1.1 Fonctionnalitées désirées :

- Récupérer dynamiquement la valeur du cours de quelques cryptos et les affichés
- Afficher la date de mise à jour du cours
- Possibilité de changer la valeur de converssion du cours de USD en EUR
- Faire une option pour l'update des cours
- Faire une seconde page qui présente la liste des cryptos disponibles sur l'API

#### 1.2 Contrainte technique : 

- Toutes les pages doivent être gérées en Front
- Pas de langage back

## 2. Environnement technique

- HTML 5 / CSS 3 / BOOTSTRAP 5
- JS Vanilla
- Pas de Design Patern pour ce petit projet


## 3. Procédure de mise en place en local

- Cloner le fichier sur votre ordinateur avec  
  `git clone https://github.com/AnxionnazFlo/API_Crypto`

- Créer une fichier .env à la racine du Projet

- Ecrire dans le fichier .env :  
  `const endpoint = 'live'`

- Générer un token sur Coinlayer pour accéder à l'API  
    https://coinlayer.com/product

- Ecrire votre token (dans le fichier .env) pour l'API Coinlayer sous la forme :  
 `const access_key = 'Votre_token_ici'`

- Tout devrais fonctionner à présent

#### Have fun



 



