const express = require('express');
const router = express.Router();
const activitiesCtrl = require('../../controllers/api/activities');

// GET /api/items
router.get('/', activitiesCtrl.index);
// GET /api/items/:id
router.get('/:id', activitiesCtrl.show);

module.exports = router;