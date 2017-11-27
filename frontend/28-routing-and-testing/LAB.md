401 JS --  Lab 28 Todo
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  
## Learning Objectives  
* Students will learn to create front end routes using react-router-dom 
* Students will learn to restructure their applications into modules
* Students will learn the difference between view state and application state
* Students will learn to lift application state to better control one way data flow
* Students will learn to create and import sass partials

## Requirements  
#### Configuration  
Your lab directory must include  
* **README.md** -- with a documention about your lab
* **.babelrc** -- with all dependencies and dev-dependencies 
* **.eslintrc** -- with the class .eslintrc file
* **.gitignore** -- with a robust gitignore
* **.eslintignore** -- with the class .eslintignore
* **yarn.lock** -- with the yarn lockfile
* **package.json** -- with all dependencies and dev-dependencies 
* **webpack.config.js** -- with webpack config
* **src/** -- containing the front end code
* **src/main.js** -- containing the entire app
* **src/style** -- containing your sass
* **src/style/main.scss** -- for importing and including reset and base
* **src/style/_vars.scss** -- sass variables
* **src/style/_reset.scss** -- sass reset 
* **src/style/_base.scss** -- base styles 
* **src/style/_layout.scss** -- layout styles 
 
#### Feature Tasks 
Create the following components and structure them according to the following diagram.  
``` 
App
  NoteCreateForm
  NoteList
    Noteitem
```
###### App Component 
* The app component should manage the entire **application state**. 
* The state should contain a notes array
* each note thats added should have the following data
  * `id`: allways should contain the result of `uuid.v1()`
  * `editing`: false by default
  * `completed`: false by default
  * `content`: user provided content

###### NoteCreateForm Component
* `onSubmit` the NoteCreateForm should add a note to the application state

###### NoteList Component 
* should display an unordered list of NoteItem components

###### NoteItem
* should display the notes content
* should display a delete button
  * `onClick` the note should be removed from the application state

#### Test
* Test NoteCreateForm
  * Test your onChange handler
  * Test your onSubmit handler
* Test NoteItem
  * Test the NoteItem's functionality defined to remove a note from the App's state

####  Documentation  
Write a description of the project in your README.md
