'use strict';

const express = require('express')

const app = express()


// REVIEWED: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

//COMMENTED: They are located in a public folder so people who are on the site can see them. All files outside this folder are not visible to the public.

app.use(express.static('./public'))

app.post('/articles', bodyParser, function(request, response) {
  // REVIEWED: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.get('/new', (request, response) => {
  response.sendFile('new.html', {root: './public'})
})

app.get('/', (request, response) => {
  response.send('Responding')
})

app.use((request, response) => response.status(404).sendFile('404.gif', {root: './public'}))


app.listen(PORT, () =>{
  console.log(`Listening on port ${PORT}`)
})