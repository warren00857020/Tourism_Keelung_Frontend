const express = require('express');
const router = express.Router();
const sightController = require('../controllers/sightPresentController')



router.get('/sights',sightController.getSightsByZone);//當網頁URI是 localhost:3000/sightPresent/sights ，去controller處理



module.exports = router;
