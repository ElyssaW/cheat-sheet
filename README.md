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