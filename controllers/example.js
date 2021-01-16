//Import express
const { info } = require('console')
let express = require('express')
//Import database
let db = require('../models')
//Instantiate router
let router = express.Router()

//Basic route to example index
router.get('/', (req, res) => {
    db.tableOne.findAll()
    .then((response) => {
      res.render('index.ejs', { things: response })
    })
})

//Write new things to the page
router.post('/new', (req, res) => {
    db.tableOne.create({
        info: req.body.info
      })
      .then((post) => {
        res.redirect('/example')
      })
})

//Route to display new thing to put on the page
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

//Edit things on the page
router.put('/edit/:id', (req, res) => {
    console.log('_______________________________________')
    console.log(req.body.info)
    console.log('_______________________________________')

    db.tableOne.update({
        // Value to change
        info: req.body.info
    }, {
        // Value to identify by
        where: {
            id: req.params.id
        }
    }).then(numRowsChanged=> {
        res.redirect(`/example/`)
    })
})

//Route to display thing to edit on the page
router.get('/edit/:id', (req, res) => {
    db.tableOne.findOne({
        where: {id: req.params.id}
    }).then((thing) => {
        res.render('edit.ejs', { info: thing.info, id: req.params.id})
    })
})

//Delete things from the page
router.delete('/delete/:id', (req, res) => {
    console.log('_____________________Hit the delete route___________________')
    db.tableOne.destroy({
        where: { id: req.params.id }
      }).then((numRowsDeleted) => {
        console.log(numRowsDeleted)
        res.redirect('/example')
      })
})

//Export router object
module.exports = router