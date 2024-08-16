const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Body parser middleware

// MongoDB Connection
const MONGO_URI = 'mongodb://localhost:27017/';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
