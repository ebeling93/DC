
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/trips', (req,res) => {
    res.render('trips', {allTrips: trips})
})

app.post('/trips', (req, res) => {
    const title = req.body.Destination
    const imageURL = req.body.imageURL
    const departure = req.body.departure
    const returnDate = req.body.returnDate

    console.log(trips)
    res.redirect('/trips')
})






app.listen(3000, () => {
    console.log('Server is running')
})