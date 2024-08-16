const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test');
const app = express()
const port = 3000
const employee = require('./models/employee')

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {foo: 'FOO'});
})
app.get('/generate',async (req, res) => {
    for (let index = 0; index < 10; index++) {
        let e = employee.create({
            name:'harry',
            salary:400000,
            language:"Python",
            city:"New York",
            isManager:true
        })
       console.log(e)
    }
    res.render('index', {foo: 'FOO'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})