const Home = require('../models/HomeModel');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Get home
// @route   GET /api/v1/home
// @access  Public
exports.getHome = asyncHandler(async (req, res, next) => {
  let home = await Home.findOne();

  res.status(200).json({
    data: home
  })
})

// @desc    create home
// @route   POST /api/v1/home
// @access  Public
exports.createHome = asyncHandler(async (req, res, next) => {
  let home = await Home.findOne();

  if (home) {
    return next(new ErrorResponse(`Home data is already exist`, 400));
  }

  home = await Home.create(req.body);

  res.status(200).json({
    data: home
  })
})

// @desc    Update home
// @route   PUT /api/v1/home
// @access  Public
exports.updateHome = asyncHandler(async (req, res, next) => {
  // let home = await Home.findOneAndUpdate(req.body);
  let home = await Home.findOne();

  for (let [key, value] of Object.entries(req.body)) {
    home.set(key, value);
  };

  await home.save();

  res.status(200).json({
    data: home
  })
})

// @desc    Delete home
// @route   DELETE /api/v1/home
// @access  Public
exports.deleteHome = asyncHandler(async (req, res, next) => {
  let home = await Home.findOneAndRemove();

  res.status(200).json({
    data: null
  })
})