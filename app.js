const express = require('express')

const app = express()


app.get('/sachin', (req, res) => {
    res.status(200).json({message : 'Welcome to my world ', fullname : 'Sachin Merugune'})
})


app.post('/', (req,res) => {
    res.status(200).json({name :'Sachin', age : '23', job : 'software engineer'})
})

app.get('/message', (req, res) => {
    res.status(200).json({message : 'Hello world ', app : 'express.js'})
})

const port = 5000
app.listen(port, ()=>{
    console.log(`app started at port ${port}`)
})