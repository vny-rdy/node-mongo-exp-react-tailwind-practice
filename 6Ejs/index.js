const express = require('express')
const app = express()
const port = 3000
app.set('view engine','ejs');
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let siteName="Adidas"
    let searchText="Search Now"
    let arr=[1,44,55]
  res.render("index",{siteName:siteName,searchText:searchText,arr})
})
app.get('/blog/:slug',(req,res) => {
  let blogTitle = "Adidas Why and When?"
  let blogContent="Its a very good brand"
  res.render("blogpost",{blogTitle:blogTitle,blogContent:blogContent})
}
)
// app.get('/', (req, res) => {
//   res.sendFile("templates/index.html",{root:__dirname})
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})