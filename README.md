# Cheat-Sheet
A web app cheat-sheet for lazy developers

## Initialize Git

### If creating your own Git repo
- `cd` into your folder of choice

- `mkdir [project-name]` 

- `git init`

- Open a new repo on Github and grab the URL

- `echo "# project name" >> READEME.md`

- `git commit -m"First commit"`

- `git branch -M main`

- `git remote add origin [repo URL]`

- `push -u origin main`

### If cloning an existing repo

- `cd` into your folder of choice (Do not make the project folder)

- `git clone [repo URL]`

All done!

### Basic Git commands

- `git add .` to select files to commit to Git

- `git commit -m"[message]"` to commit the files and add a message

- `git push` to push to Github, where the files can be stored as a backup. 

Remember to commit frequently: after you fix a bug, implement a new feature, or just finish an hour of work

# Initializing NPM

- `npm init` to create the package.json or `npm init -y` to speedrun it

- `echo "node_modules" >> .gitignore` to create a file containing the file names of everything Github should ignore

- `npm i [package name]` for all packages you'd like to install

- `touch index.js` to create the Javascript file that Node will use as the entry point when it creates the server

# Express

In terminal:
- `npm i express` to download Express

In your index.js Javascript:
- `const require = require('express)` at the top of the file, to pull in the Express package

- `let app = express()` beneath it, to create a new instance of Express, which you will use as your server

- `app.listen([port number])` to tell the server where to listen for incoming requests. Write `app.listen([port number], () => {console.log("Message")})` If you want JavaScript to console log whenever it connects to the server, so that you know it's working

### Basic Express commands

- `app.get('/', (req, res) => { [action] })` to send information to the client based on which URL they access. Replace `/` with the desired URL (Minus the `localhost:3000`). 

- `app.post('/', (req, res) => { [action] })` to receive information from the user, usually input with a form, and write a new entry to the database. `.put` requests shouldn't show anything to the user, and should end in a redirect to a `.get` route

- `app.put('/', (req, res) => { [action] })` to update an existing database entry

- `app.delete('/', (req, res) => { [action] })` to delete information from the connected database. Like `.put`, this can also receive information from the user (The ID of an item to be deleted, for example) and should end in a redirect. 

### Render/Redirect commands
In your routes, you have to define what the user will see when they navigate to that route. Here are some useful commands for it:

- `res.send([info])` to print raw, unstyled text to the page

- `res.sendFile([filepath])` to send an HTML file

- `res.render([filepath])` to render an ejs file

- `res.redirect([route url])` to send to another route

### Sending information along routes
Maybe you want to send information along a route to display on the view page. 

- `res.render('[URL]', { variableName: variable })` inside of the route. The object will contain all information you want to send along, accessed by the variable name. You can define multiple fields as you would multiple items in an object

### Using forms in Express

So you want to send information across your HTML pages? Here's how. In your HTML/EJS:

- `<form action="[route url]" method="GET/POST"> </form>` to create the form which will direct the user to your desired route URL when they click submit

Inside of the form tags, put:
- `<input type=[desired input type] name=[variable name] value=[desired value]` This will let the user input a value - overriding the value you defined, if you allow it - and when they hit submit, that value will be sent to the form's route URL under the `name` variable name you defined here

#### Body Parser

To access those variables, you need a body parser: `app.use(express.urlencoded({ extended: false }))` in the middleware section of your index.js. Then, in the route you directed the user to in the form, you can access it with:

- `req.body.[variable name]`

#### Method-Override

To use `app.delete` or `app.put`, you need to use the method-override functionality. To do this, you need:

- `npm i method-override` in terminal

- `const methodOverride = require('method-override')` in your index.js.

- `app.use(methodOverride('_method'))` to tell your Express app to use it whenever it encounters a request URL with "_method" in it

### Controllers
The last major piece of Express are the controllers. Controllers are purely for organizational purposes, they have no user-facing functionality, but they help with keeping large projects clean. To start with controllers:

- `mkdir controllers` in your project folder

- `touch [controller name].js` to create the JavaScript containing all the routes that are relevant to eachother, organizationally

- `const express = require('express')` at the top of your controller file. You also have to import any other modules you use directly in your route code, such as Axios if your routes involve an Axios call.

- `const router = express.Router()` at the top to define the router object

- `module.exports = router` at the bottom to export your router object to your index.js file

- Import all relevant routes to the controller file, changing `app.[method]` to `router.[method]` and removing the name of the controller from the url. So if your route url was previousy `app.get('controller/show')` it will now be `router.get('/show')`

Lastly, import the controller into your index.js:
- Return to your index.js

- `app.use('/[controller name], require('[controller file path]'))`

## EJS
EJS, or embedded javascript, allows you to alter the look of your HTML based on JavaScript, and create partials so that you aren't constantly repeating your HTML. To get started, go to terminal:

- `npm i ejs express-ejs-layouts`

In your index.js
- `const layouts = require('express-ejs-layouts')`

- `app.set('view engine', 'ejs')`

- `app.use(ejsLayouts)`

Remember, all HTML files have to be saved as .ejs to be used with it.

#### EJS syntax
To use the Javascript in your EJS files, you have to use "alligators." Here's how they work

- `<% [code] %>` for basic Javascript code

- `<%= [variable name] %>` if you want to print a javascript variable. (Note: It prints the variable in the HTML, but if you put somewhere that's not usually visible to the user - inside of an HTML attribute, for instance - it will not show up to user, but will be read by the computer as if it were written in HTML)

- `<%- [partial name] %>` to use a partial or put body in the layout

## Axios
Axios is useful for pulling in information from other websites, such as an API. In terminal:

- `npm i axios`

In your index.js
- `const axios = require('axios')`

To make calls
- `axios.get([URL])`

followed by
- `.then(response => { [action] })`

Remember, Axios calls take a while to run (In computer minutes, at least) and Javascript runs synchorously - meaning, it will continue running code before all code has been resolved. Normally, this is fine. In the case of Axios or SQL calls, it means your code will execute before the information it needs has returned. The `.then()` is vital for avoiding this, since it forces the Javascript to wait until the call is resolved.

## Sequelize
Sequelize allows us to talk to a SQL database with Javascript commands. To start:

- `npm i sequelize pg`

- `sequelize init`

- Open the config.json. Change `mySQL` to `postgres`. Change the databasename, and set the username and password (Ignore if on a Mac)

In terminal:
- `sequelize db:create` on Windows.

- `sequelize model:create --name [name] --attributes [variable]:[variable type],[variable two]:[variable 2 type]` etc.

- `sequelize db:migrate` on Windows

### Associations
Open the models folder, automatically created after running `model:create`. For clarity, we'll say we have two tables, tableOne and tableTwo. Go to the tableOne model file, and under the `static associate` line, write:

- `models.tableOne.hasMany(models.tableTwo)`

and then, in the tableTwo model file

- `models.tableTwo.belongsTo(models.tableOne)`

This is a 'one-to-many' relationship, where one table (Table One) can have many associations with it's other table (Table Two). Like a person who may have several pets. For many to many relationships:

- `sequelize model:create --name join_table --attributes tableOneID:integer,tableTwoID:integer`

In your tableOne model:
- `models.tableOne.belongsToMany(models.tableTwo, {through: ' join_table' })`

And in your tableTwo model:
- `models.tableTwo.belongsToMany(models.tableOne, {through: ' join_table' })`

As a note, "tableOne" and "tableTwo" turned out to be fairly terrible table names. I had to write their names in quotations whenever I wanted to reference them directly in SQL, or SQL wouldn't properly register them. Pick something descriptive for your tables! And also not camel-cased.

## Vocabulary

- MVC: Model Views Controller

A term for all the components of the "full stack." Models is the database, views is the user-facing interface, and controllers talk between the two.

- ORM: Object Relational Mapping

A programming technique for converting data between incompatible type systems using object-oriented programming languages

- ERD: Entity Relationship Diagram

The organizational method and visual representation used to keep track of data tables and how they relate to eachother. Useful for 1:M (One to many) and N:M (Many to many) relationship models

- JSON: JavaScript Object Notation

A way of structuring data so it can be easily parsed by Javascript

- API: Application Programming Interface

The intermediary between two pieces of software that allows them to talk to eachother. For Javascript, it's best to receive API calls as JSON objects, which can then be parsed into a Javascript object

- CRUD: Create, Read, Update, Destroy

The basic interactions with the web. As an example: You can create a blog posts, read the blog posts of others, update your own, or delete your whole blog.

- REST: Representational State Transfer

The map for connecting web routes with CRUD actions

CRUD | REST
------|-------
Create  | POST 
Read    | GET
Update  | PUT
Destroy | DELETE

Only GET pages should display to the user. All other routes should manipulate information - either by creating, updating, or deleting it - and then redirect to a GET route.
