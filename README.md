### ibrahim DJEBBAR


## Objectif
+ clique sur un article permet d'afficher plus d'informations
+ les articles sont affichés 5 par 5 sur la page
+ Création d'une table / modèle Article, qui aura un id, title, content 

# Languages utilisés

+ SYMFONY / BACKEND
+ REACT NATIVE (EXPO) / FRONTEND
+ MySQL / BASE DE DONNÉES
## Outils
+ POSTMAN / POUR FAIRE DES TESTS API

# Tâches réalisées
+ Afficher une liste d'article
+ Faire une page Details pour chaque clique d'article
+ création d'une API qui permets d'afficher, ajouter, modifier et supprimer ( GET, POST, DELETE ).
+ faire l'objet Article avec les 3 attributs ( Id, title, content ).

# Tâches non réalisées
+ Pagination

## Comment lancer l'application 
### ouvre deux terminaux ( coté client et server )
+ utilise cette commande pour clonner le projet ( $~ git@github.com:ibrahim662/Articles.git ) 

#### Coté client

+ $~cd Articles/articles
+ $~npm i
+ $~expo start

### deuxieme terminal 
#### Coté server
+ $~cd Articles/articlesBackend
+ $~composer i
+ $~symfony serve --no-tls

