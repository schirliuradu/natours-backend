const express = require('express');
const morgan = require('morgan');

const app = express();
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// adds middleware for handling incoming request data (post method body data)
// in express, everything is a middleware
// all the middlewares together are called "the middleware stack"
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// our own middleware added to the middleware stack
app.use((req, res, next) => {
  next();
});

// our own middleware added to the middleware stack
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
