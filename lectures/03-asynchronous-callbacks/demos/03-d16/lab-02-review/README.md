![cf](https://i.imgur.com/7v5ASc8.png) lab-02-tools-and-context
======

## To Submit this Assignment
  * fork this repository & create a new branch for your work
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Directions
* make a lib and test directory
* add your own .`gitignore`
* include a `package.json`
* include the standard .eslintrc
* make a lint script for running eslint
* make a test script for running mocha
* make a `lib/fp.js` for holding the following methods
  * create stand alone `map`, `filter`, `reduce`, `concat`, and `splice` using  call, bind, and apply 
  * the standlone functions should have the signature `(array, ...args) => array`
* make a CLI `index.js` that will use your new `map` function to UpperCase all command line args and print them to the screen

# Tests
* Write two tests for each method in `lib/fp.js`

## Bonus 1pt 
* Test your CLI index.js 

## Rubric:
* Correct Submission: 2pts
* Passes eslint: 2Pts
* Package.json: 3pts
* Scripts & Tests: 3pts
* Stretch: 2pts 
