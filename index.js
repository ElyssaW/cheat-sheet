//Import express
const express = require('express')
//Import layouts
const layouts = require('express-ejs-layouts')
//Import the SQL models
let db = require('./models')
//Import Method Override
const methodOverride = require('method-override')

//Instantiate express
let app = express()

//Set the view engine to ejs
app.set('view engine', 'ejs')

//This allows the Javascript to access locally-stored photos, so long as they're in the
// "public" folder. It also allows access to CSS
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

//Set method override
app.use(methodOverride('_method'))

//Body parser, to allow form action
app.use(express.urlencoded({ extended: false }))

//Import routes from controller
app.use('/example', require('./controllers/example'))

//Basic route to navigate to homepage
app.get('/', (req, res) => {
    res.render('home.ejs')
})

//Set express to listen to the port
app.listen(3000, () => {
    //Console log when it connects to the port, so we can be sure it's hitting
    console.log('Listening on port 3000')
})