const Tour = require('../models/tourModel');

exports.getAllTours = (req, res) => {
  // res.status(200).json({
  //   status: 'success',
  //   results: tours.length,
  //   data: { tours },
  // });
};

exports.getTour = (req, res) => {
  // const tour = tours.find((el) => el.id === parseInt(req.params.id));
  // res.status(200).json({
  //   data: { tours: tour },
  // });
};

exports.createTour = (req, res) => {};

exports.updateTour = (req, res) => {
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour: {},
  //   },
  // });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    // null means here that the resource which was deleted no longer exists
    data: null,
  });
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price parameters',
    });
  }
  next();
};
