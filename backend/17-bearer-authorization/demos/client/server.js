'use strict';

let express = require('express');
let app = express();
let agent = require('superagent');
let bodyParser = require('body-parser');

let service = "localhost:3000";

app.set('view engine', 'ejs');  

app.use(express.static('public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function(req, res) {  
  
  let data = {
      loginMessage: "",
      createMessage: "",
      loggedIn: false,
      created: false,
      token: null
  };
  
  res.render('index', data);
});


app.get('/money', (req,res) => {
   
  let data = {
      loggedIn:false,
      message: ''
  };
  
  let token = req.query.session;
  
  let url = `http://${service}/showMetheMoney`;
  
  agent.get(url)
      .set('Authorization', 'Bearer ' + token)
      .then(response => {
            data.message = response.text; 
            data.loggedIn = true;
      })
      .catch(err => {
          data.message = err.response.text;
      })
      .then( () => {
          res.render('money', data);
      })

});

app.post('/login', (req, res) => {  

  let data = {
      loginMessage: '',
      createMessage: '',
      loggedIn:false,
      created: false,
      token: ''
  };
  
  let username = req.body.username;
  let password = req.body.password;
  
  let basicToken = new Buffer(`${username}:${password}`).toString('base64')
  let url = `http://${service}/signin`;
  
  agent.get(url)
      .set('Authorization', `Basic ${basicToken}`)
      .then(response => {
            data.token = response.text; 
            data.loginMessage = "Welcome",
            data.loggedIn = true;
      })
      .catch(err => {
          data.loginMessage = err.response.text;
      })
      .then( () => {
          res.render('index', data);
      })
});

app.post('/signup', (req, res) => {  
    
    let url = `http://${service}/signup`;
    
    let data = {
        loginMessage: '',
        createMessage: '',
        loggedIn: false,
        created: false,
        token: ''
    };
    
    agent.post(url)
      .send(req.body)
      .then(response => {
            data.created = true;
            data.loginMessage = "Account Created, Please Login";
      })
      .catch(err => {
          data.createMessage = err;
      })
      .then( () => {
          res.render('index', data);
      })
    
});


app.listen(8080);