const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userController')
const multerConfig = require('../middleware/multer')
const adminController = require('../Controllers/adminController')


// Admin add
router.post('/display-data',multerConfig.single('images'),adminController.showAdminData)

// admin get data (wallpage)
router.get('/wallpages-data',adminController.getWallpagesData)

// admin get data details
router.get('/details-data/:id',adminController.getDetailsData)
// Register api
router.post('/register',userController.register)

// Login api 
router.post('/login',userController.login)

// exporting router
module.exports = router


