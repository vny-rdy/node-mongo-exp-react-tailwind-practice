const express = require("express");
const app = express();
const port = 3000;
app.use(express.static('public'))
app.get("/", (req, res) => {
  res.send("Hello World! 2");
});
app.get("/about", (req, res) => {
  res.send("About us");
});
app.get("/contact", (req, res) => {
  res.send("Hello contact me");
});
app.get("/blog", (req, res) => {
  res.send("Hello blog!");
});
// app.get("/blog/:slug/:second", (req, res) => {
//   res.send(`Hello ${req.params.slug} and ${req.params.second}`);
// });
app.get('/blog/:slug', (req, res) => {
   // for url: http://localhost:3000/blog/intro-to-vny?mode=dark&region=in 
    console.log(req.params) //will output { slug: 'intro-to-vny' },
    console.log(req.query) //will output { slug: 'intro-to-vny' },
    res.send(`Hello ${req.params.slug}`)
  })
//   app.get('/blog/intro-to-js', (req, res) => {
//     res.send('Hello Java Script!')
//   })
//   app.get('/blog/intro-to-python', (req, res) => {
//     res.send('Hello Python!')
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
