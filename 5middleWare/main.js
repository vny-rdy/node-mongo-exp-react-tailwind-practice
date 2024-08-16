const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const blog = require('./routes/blog')

app.use('/blog', blog)

app.use(express.static("public"))
app.use((req,res,next) => {
    console.log(req.headers)
    req.vinay="\they this is vinay"
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}\n`)
    console.log("m1")
    // res.send("hacked middle ware 1") if u want to use this so u should remove next if not it will get an error
    next()
})
app.use((req,res,next) => {
  console.log("m2")
  req.vinay="\ti am vinay"
  next()
}
)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about',(req,res) => {
  res.send('hello about!'+req.vinay)
}
)
app.get('/contact',(req,res) => {
  res.send('hello contact')
}
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})