const express = require('express');
const { getHome, createHome, updateHome, deleteHome } = require('../controllers/homeController');


// this is used if it's need some pagination
// const advancedResults = require('../middleware/advanceResults');

const router = express.Router();

// this is used if need some login / token to access the route
// const { protect } = require('../middleware/authMiddleware');
// router.use(protect);

router
  .route('/')
  .get(getHome)
  .post(createHome)
  .put(updateHome)
  .delete(deleteHome);
// Route for detail or something that needed id
// router
//   .route('/:id')
//   .get()
//   .put()
//   .delete();

module.exports = router;