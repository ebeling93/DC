const express = require('express')
const app = express()
app.use(express.json())

const tasks = [
    {name: "Dishes", priority: "Medium", date: "8/14"},
    {name: "Laundry", priority: "High", date: "8/15"},
    {name: "Wash car", priority: "Low", date: "8/16"},

]
app.get('/tasks', (req, res) => {
    res.json(tasks)
})

app.post('/tasks', (req, res) => {
    res.send(tasks)
})

app.listen(3000, () => {
    console.log('Server is running')
})