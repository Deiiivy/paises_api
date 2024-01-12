const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('./models/Country')

const app = express()
const PORT = 3001

app.use(bodyParser.json())

const countryRoutes =  require('./routes/countries')
app.use('/api/countries', countryRoutes)



mongoose.connect('mongodb://127.0.0.1:27017/mis_paises')

app.get('/', (req,res) => {
    res.send('hola mundo')
})

app.listen(PORT, () => {
    console.log(`server run in port ${PORT}`);
})