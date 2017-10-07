![cf](https://i.imgur.com/7v5ASc8.png) Lab 08: Vanilla REST API
======

## Submission Instructions
  * fork this repository & create a new branch for your work
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Learning Objectives  
* students will learn to use promise constructs to manage asynchronous code
* students will learn to create a vanilla RESTful API with in-memory persistence

## Requirements
#### Configuration
  * `.gitignore`
  * `.eslintrc`
  * `package.json`
  * `README.md`

#### Feature Tasks
* create the following directories to organize your code:
  * `lib`
  * `model`
  * `test`
* create an HTTP server using the native NodeJS `http` module
* create an object constructor that creates a _simple resource_ with at least 3 properties
  * include an `id` property that is set to a unique id (**hint:** you'll need to use `node-uuid`)
  * include two additional properties of your choice (ex: name, content, etc.)
* create a custom body parser module that uses promises to parse the JSON body of `POST` and `PUT` requests
* create a custom url parser module that returns a promise and uses the NodeJS `url` and `querystring` modules to parse the request url
* create a router constructor that handles requests to `GET`, `POST`, `PUT`, and `DELETE` requests
* create a storage module that will store resources by their schema type (ex: note) and id

## Server Endpoints
### `/api/simple-resource-name`
* `POST` request
 * pass data as stringifed JSON in the body of a **POST** request to create a new resource
* `GET` request
 * pass `?id=<uuid>` as a query string parameter to retrieve a specific resource (as JSON)
* `DELETE` request
 * pass `?id=<uuid>` in the query string to **DELETE** a specific resource
 * this should return a 204 status code with no content in the body

## Tests
* write a test to ensure that your api returns a status code of 404 for routes that have not been registered
* write tests to ensure the `/api/simple-resource-name` endpoint responds as described for each condition below:
 * `GET`: test 404, it should respond with 'not found' for valid requests made with an id that was not found
 * `GET`: test 400, it should respond with 'bad request' if no id was provided in the request
 * `GET`: test 200, it should contain a response body for a request made with a valid id
 * `POST`: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
 * `POST`: test 200, it should respond with the body content for a post request with a valid body

## Bonus
* **2pts:** a `GET` request to `/api/simple-resource-name` with no **?id=** should return an array of all of the ids for that resource
