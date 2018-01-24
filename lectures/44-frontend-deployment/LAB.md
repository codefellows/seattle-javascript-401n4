401 JS --  Lab 44 Deploy Frontend
===

## Submission Instructions
* Create a repoistory on you github account
* Copy a frontend project into your repository
* Submit a link to a frontend deployed using heroku
 
## Configuration
* Include a .gitignore
* Include a README.md
* Include a package.json

## Feature Tasks 
* Configure a Heroku app to automaticly build and deploy your frontend on merge or push to master
  * Setup all necessiary env vars
* Add a `start` task to your package.json to run your static server
* Add a `heroku-postbuild` task to your package.json to run webpack
* Configure AWS CloudFront to cache static assets from your frontend deployment URL (heroku app url)

#### Static Server
* Create a `index.js` that implements a static server using express

##  Documentation  
Write a description of the project in your README.md
Include a link to your deployed application
