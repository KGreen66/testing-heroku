const express = require('express')
const app = express()
const methodOverride = require('method-override')
const routes = require('./routes/index')


//= =====================
// MIDDLEWARE
//= =====================
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

//= =====================
// Router
//= =====================
// Links the server to our Router File
app.use('/', routes)

const PORT = process.env.PORT || 3000
//= =====================
// LISTENERS
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
  })