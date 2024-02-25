const mongoose = require('mongoose')
const colors = require('colors')

// mongoDB connection
dbConnection = () => mongoose.connect("mongodb+srv://pu635870:PankajMern--2024@cluster0.1byrt22.mongodb.net/user-task?retryWrites=true&w=majority")
.then((db) => {
  console.log(`${"-".repeat(68)}\nDB Connection Successful: ${db.connection.host}\n${"-".repeat(68)}`.cyan)
})

module.exports = dbConnection