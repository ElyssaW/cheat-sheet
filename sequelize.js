// This file just includes all the various
// SQL/sequelize command code we've written
// It doesn't connect to anything else in the
// folder. I just keep it here for ease of
// access.

// Require models, institate db object
const db = require('./models')
const toy = require('./models/toy')

// // Create new user
// db.user.create({
//     firstName: 'Bob',
//     lastName: 'Taylor',
//     age: '27'
// }).then(createdUser => {
//     console.log(createdUser)
//     process.exit()
// })

// // Find existing user
// db.user.findOne({
//     where: {firstName: 'Zach'}
// }).then(foundUser=> {
//     console.log(foundUser)
//     process.exit()
// })

// // Find new user, or create if they do not exist
// db.user.findOrCreate({
//     where: {
//         firstName: 'Lauren',
//         lastName: 'Botty'
//     }, 
//     defaults: {age:88}
// }).then(([user, wasCreated]) => {
//     console.log(user)
//     console.log(wasCreated)
//     process.exit()
// })

// // Find all users
// db.user.findAll().then(users=>{
//     console.log(users)
// })

// // Update user
// db.user.update({
//     // Value to change
//     lastName: 'Taco'
// }, {
//     // Value to identify by
//     where: {
//         firstName: 'Brian'
//     }
// }).then(numRowsChanged=> {
//     console.log(numRowsChanged)
//     process.exit()
// })

// // Destroy statement
// db.user.destroy({
//     where: { firstName: 'Brian' }
// }).then(numRowsDeleted=>{
//     console.log(numRowsDeleted)
//     process.exit()
// })

// createModel, getModels, setModel, and addModel

// // Create pets and assign to user
// db.user.findOne({where: {id: 3}})
// .then(user => {
//     console.log('Adding a pet to:'+ user.firstName)
//     user.createPet({
//         name: 'Admiral',
//         species: 'cat'
//     }).then(dog => {
//         console.log(dog)
//         process.exit()
//     })
// })

// Function to find all pets associated with a user
// db.user.findOne({
//     where: {firstName: 'Lauren'}
// }).then(user => {
//     user.getPets().then(pets => {
//         console.log(user)
//         console.log(pets)
//         process.exit()
//     })
// })

// // Creates association between items where none existed
// db.pet.findOrCreate({
//     where: {
//         name: 'Porkroll',
//         species: 'Dog'
//     },
//     defaults: {
//         description: 'A grouch.'
//     }
// }).then(([pet, wasCreated]) => {
//     db.user.findOne({where: {firstName: 'Lauren'}})
//     .then(user => {
//         user.addPet(pet)
//         console.log(`User ${user.firstName} and her ${pet.name}`)
//     })
// })

// // Find all users, and print them, along with all associations
// db.user.findAll({
//     include: [db.pet]
// }).then(users => {
//     users.forEach(user => {
//         console.log(`${user.firstName}'s pets: `)
//         user.pets.forEach(pet => {
//             console.log(`${pet.name}`)
//         })
//     })
// })

// Find/Creates a pet, find/creates a toy, and then associates them
// db.pet.findOrCreate({
//     where: {
//         name: 'Silly May',
//         species: 'Dog',
//         userId: 1
//     }
// }).then(([pet, wasCreated]) => {
//     db.toy.findOrCreate({
//         where: {
//             type: 'stinky bear',
//             color: 'brown'
//         }
//     }).then(([toy, wasCreated]) => {
//         pet.addToy(toy).then((relationship) => {
//             console.log(pet.name + ' and her ' + toy.type)
//             process.exit()
//         })
//     })
// })

// Finds a toy, and all its associations
// db.toy.findOne({
//     where: {type: 'stinky bear'}
// }).then(toy => {
//     toy.getPets().then(response => {
//         console.log(response)
//         process.exit()
//     })
// })

// // This monster of a function find/creates a toy, checks if it
// // has any associated pets, returns the associated pets if true,
// // and creates a new pet to associate with the toy if not
// db.toy.findOrCreate({
//     where: { type: 'ball', color: 'blue'}
// }).then(([toy, wasCreated]) => {
//     toy.getPets().then(pets => {
//         if(pets.length > 0) {
//             pets.forEach(pet => {
//                 console.log(pet.name + ' and her ' + toy.type)
//                 process.exit()
//             })
//         } else {
//             db.pet.findOrCreate({
//                 where: {
//                     name: 'Ruby Tuesday',
//                     species: 'Toy Aussie'
//                 }
//             }).then(([pet, wasCreated]) =>{
//                 toy.addPet(pet).then(relation => {
//                     console.log(`${pet.name} has faved the ${toy.color} ${toy.type}`)
//                     process.exit()
//                 })
//             })
//         }
//     })
// })

// // Finds a pet and all toys associated with the pets
// db.pet.findOne({
//     where: {name: 'Ruby Tuesday'}
// }).then(pet => {
//     pet.getToys().then(toys => {
//         toys.forEach(toy => {
//             console.log(`${pet.name} loves their ${toy.color} ${toy.type}`)
//         })
//     })
// })

// // Finds a pet, and returns all the toys/user associated with that pet
// db.pet.findOne({
//         where: { name: 'Silly May',
//     }, 
//     include: [db.user, db.toy]
// }).then(pet => {
//     pet.toys.forEach(toy => {
//         console.log(`${pet.user.firstName}'s ${pet.name} loves their ${toy.type}`)
//     })
//     process.exit()
// })

// // Finds a user, and returns all pets/toys associated with them
// db.user.findByPk(1, { include: [db.pet] })
// .then(user => {
//     user.pets.forEach(pet => {
//         pet.getToys().then(toys => {
//             toys.forEach(toy => {
//                 console.log(`${user.firstName}'s pet ${pet.name} loves their ${toy.type}`)
//             })
//         })
//     })
//     process.exit()
// })