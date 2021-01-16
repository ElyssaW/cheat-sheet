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

All done!

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

- `app.listen([port number])` to tell the server where to listen for incoming requests. Write `app.liste([port number] => {console.log("Message")})` If you want JavaScript to console log whenever it connects to the server, so that you know it's working

### Basic Express commands

- `app.get('/', (req, res) => { [action] })` to send information to the client based on which URL they access. Replace `/` with the desired URL (Minus the `localhost:3000`). 

- `app.put('/', (req, res) => { [action] })` to receive information from the user, usually input with a form. `.put` requests shouldn't show anything to the user, and should end in a redirect to a `.get` route

- `app.delete('/', (req, res) => { [action] })` to delete information from the connected database. Like `.put`, this can also receive information from the user (The ID of an item to be deleted, for example) and should end in a redirect. 

### Using forms in Express

So you want to send information across your HTML pages? Easy to do! Here's how. In your HTML/EJS:

- `<form action="[route url]" method="GET/POST"> </form>` to create the form which will direct the user to your desired route URL when they click submit

Inside of the form tags, put:
- `<input type=[desired input type] name=[variable name] value=[desired value]` This will let the user input a value - overriding the value you defined, if you allow it - and when they hit submit, that value will be sent to the form's route URL under the `name` variable name you defined here

#### Body Parser

To access those variables, you need a body parser: `app.use(express.urlencoded({ extended: false }))` in the middleware section of your index.js. Then, in the route you directed the user to in the form, you can access it with:

- `req.body.[variable name]`

#### Method-Override

To use `app.delete`, you need to use the method-override functionality. To do this, you need:

- `npm i method-override` in terminal

- `const methodOverride = require('method-override')` in your index.js.

- `app.use(methodOverride('_method'))` to tell your Express app to use it whenever it encounters a request URL with "_method" in it

#### Controllers
The last major piece of Express are the controllers. Controllers are purely for organizational purposes, they have no user-facing functionality, but they help with keeping large projects clean. To start with controllers:

- `mkdir controllers` in your project folder

- `touch [controller name].js` to create the JavaScript containing all the routes that are relevant to eachother, organizationally

- `const express = require('express')` at the top of your controller file. You also have to import any other modules you use directly in your route code.

- `const router = express.Router()` at the top to define the router object

- `module.exports = router` at the bottom to export your router object to your index.js file

- Import all relevant routes to the controller file, changing `app.[method]` to `router.[method]` and removing the name of the controller from the url. So if your route url was previousy `app.get('controller/show')` it will now be `router.get('/show)`

Lastly, import the controller into your index.js:
- Return to your index.js

- `app.use('/[controller name], require('[controller file path]'))`