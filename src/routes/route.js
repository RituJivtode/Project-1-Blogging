const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")
const Weather = require('../controllers/weatherController');
const Memes = require('../controllers/memeController');



router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)


router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/cowin/districtById", CowinController.getDistrictById)


// 2) Que - Current Weather API requests
router.get('/getCurrentWeather', Weather.getCurrentWeather);
router.get('/getTempIncreased', Weather.getTempIncreased);

//3) Que - Memes API requests 87743020
router.get('/getAllMemes', Memes.getAllMemes);
router.post('/createMemes', Memes.createMemes);


module.exports = router;