![cf](https://i.imgur.com/7v5ASc8.png) 11: Single Resource Express API
======

## Submission Instructions
  * fork this repository & create a new branch for your work
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Learning Objectives  
* students will be able to create a single resource API using the express framework
* students will be able to leverage 3rd party helper modules for debugging, logging, and handling errors

## Requirements

#### Configuration
* `package.json`
* `.eslintrc`
* `.gitignore`
* `README.md`
  * your `README.md` should include detailed instructions on how to use your API

#### Feature Tasks
* create an HTTP server using `express`
* create a object constructor that creates a _simple resource_ with at least 3 properties
  * it can **not** have the same properties as the in-class sample code (other than the `id`)
  * a unique `id` property should be included *(node-uuid)*
  * include two additional properties of your choice
* use the JSON parser included with the `body-parser` module as a middleware component to parse the request body on `POST` and `PUT` routes
* use the npm `debug` module to log the methods in your application
* create an `npm` script to automate the `debug` process and start the server
* persist your API data using the storage module and file system persistence

#### Server Endpoints
* **`/api/simple-resource-name`**
* `POST` request
 * pass data as stringifed JSON in the body of a **POST** request to create a new resource
* `GET` request
 * pass `?id=<uuid>` as a query string parameter to retrieve a specific resource (as JSON)
* `DELETE` request
 * pass `?id=<uuid>` in the query string to **DELETE** a specific resource
 * this should return a 204 status code with no content in the body

#### Tests
* write a test to ensure that your api returns a status code of 404 for routes that have not been registered
* write tests to ensure the `/api/simple-resource-name` endpoint responds as described for each condition below:
 * `GET`: test 404, it should respond with 'not found' for valid requests made with an id that was not found
 * `GET`: test 400, it should respond with 'bad request' if no id was provided in the request
 * `GET`: test 200, it should contain a response body for a request made with a valid id
 * `POST`: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
 * `POST`: test 200, it should respond with the body content for a post request with a valid body
