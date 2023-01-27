# Documentation du pojet Runnig

> Projet Architecture logiciel
> Attention ------>

**Fonctionement des branche** ``` Chaque personne a ça branche (Antoine(non fonctionel), Cyrus, Ellande ```

## API

### UseFull Comand 

<hr>

**Remove**  ``` dotnet ef migrations Remove --project PJName  ```

**Init**  ``` dotnet ef migrations add Init --project PJName ```

**Update**  ``` dotnet ef update --project PJName  ```

<hr>

### Table

| User   |         |                        |
|--------|---------|------------------------|
| ID     | INT     | 1                      |
| Nom    | String  | DuPont                 |
| Prenom | String  | Paul                   |
| Role   | String  | Admin/User             |
| MDP    | String  | UnMotDePasse           |
| Email  | String  | Paul.DuPont@gmail.com  |
<br>
 <hr>
<br>

| Course              |         |                |
|---------------------|---------|----------------|
| ID                  | INT     | 1              |
| Nom                 | String  | Course du Bois |
| Lieux               | String  | Paris          |
| Score               | Int     | 250            |
| Temps               | Time    | 01.35.45       |
| Active              | Boolean | True/False     |
| Réussis             | Boolean | True/False     |
| Nombre de fois fait | INT     | 10             |
| Nombre de balise    | INT     | 15             |
<br>
 <hr>
<br>

| Balise               |         |                  |
|----------------------|---------|------------------|
| ID                   | INT     | 1                |
| Numéro d'ordre       | INT     | 1                |
| Nom                  | String  | Balise du fleuve |
| ID Course            | Int     | 1                |
| Cordonée X           | Int     | 192.168          |
| Cordonée Y           | Int     | 192.168          |
| Activation de balise | Boolean | True/False       |
| Question             | String  | La Date du ...?  |
| Reponse 1            | String  | 1111             |
| Reponse 2            | String  | 2222             |
| Reponse 3            | String  | 3333             |
| Bonne Réponse        | String  | 3333             |
| Bonne Réponse Donnée | Boolean | True/False       |
