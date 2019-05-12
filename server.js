const express = require('express')
const customArray= require('./lib/customArray')
debugger
const app = express()
const port = 3000

app.get('/', (req, res) =>{ 
var x= customArray;
debugger;
res.send('Hello World!')})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))