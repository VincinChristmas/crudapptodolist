const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//your body parser should always be put before your CRUD handlers.

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3002, function()  {
console.log('I see you')
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/tasktodo',(req, res) => {
    console.log(req.body)
})


//my name is my name !!!
console.log("Never give up. May JavaScript be with you")