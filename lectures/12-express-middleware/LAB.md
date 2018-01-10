![cf](https://i.imgur.com/7v5ASc8.png) 12: Express Middleware
======

## Submission Instructions
  * fork this repository & create a new branch for your work
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Learning Objectives  
* students will be able to work with application, router, and 3rd party middleware through the use of express.js
* students will be able to implement custom middleware through the use of express.js
* students will be able to create custom routers for a specific resource

## Requirements

#### Configuration
* `package.json`
* `.eslintrc`
* `.gitignore`
* `README.md`
  * your `README.md` should include detailed instructions on how to use your API

#### Feature Tasks
* create a single resource `express` API that can handle **GET**, **POST**, and **PUT** requests
* use the `http-errors` module to create new errors and associate them with a proper status code
* create an `error-middleware` module to handle errors and *use* it in your server file
* create a `cors-middleware` module that will allow for public use of your API
* create the `deleteItem` and `availIDs` methods and add them to your `storage` module
  * these methods should be used to delete a resource (`deleteItem`) and return an array of id's from persisted resource filenames (`availIDs`)
* create the `updateNote`, `fetchNote`, and `fetchIDs` static methods as part of your `Note` model
* create a series of `note-route-tests` to test your **GET**, **POST**, and **PUT** routes
  * **hint:** *you'll want to use the `before` and `after` hooks provided by `mocha` in order to create a test note and delete the note after the test has completed*
