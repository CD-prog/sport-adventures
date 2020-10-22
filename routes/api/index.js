const router = require("express").Router();
const itemRoutes = require("./items")
const itemController = require('../../controllers/itemController');
//const apiRoutes = require("./api");

// API Routes
//router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use("/items", itemRoutes);

router 
.route("/search") 
.get(itemController.search)

module.exports = router;