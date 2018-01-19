401 JS --  Lab 41 OAUTH BACKEND
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  
## Learning Objectives  
* Students will learn to add Google OAuth to an express/monogo app

## Requirements  
#### Configuration  
* create a copy of the slugchat-backend-starter-code to `/lab-<yourname>/slugchat-backend`
* create a `/lab-<yourname>`/slugchat-fontend directory

#### Feature Tasks  
#### backend
* create an app on the google dev console
 * configure oauth credentials to suport a client app on `http://localhost:8080`
 * configure oauth credentials to suport a server redirect uri  to `http://localhost:3000/oauth/google/code`
* create a backend route `GET /oauth/google/code` for handling google oauth 

#### frontend 
* create an index.html with an anchor tag pointing to the google authoraztion page 
 * configure the query string will correct key value pairs

####  Documentation  
Write a description of the project in your README.md
