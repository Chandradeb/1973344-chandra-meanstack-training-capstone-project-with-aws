const express = require('express');
const router = express.Router();
let UserController = require('../Controller/user.controller.js')

router.post('/signup',UserController.signup)
router.post('/signin',UserController.signin)
router.get('/getOrderStatus/:userName', UserController.getOrderStatus)
router.post('/updatefname/:userName', UserController.updatefname)
router.post('/updatelname/:userName', UserController.updatelname)
router.post('/updateemail/:userName', UserController.updateemail)
router.post('/updatephoneNum/:userName', UserController.updatephoneNum)
router.post('/updateaddr/:userName', UserController.updateaddr)
router.post('/updatedob/:userName', UserController.updatedob)
router.post('/updatefund/:userName', UserController.updatefund)
router.post('/raiseTicket', UserController.raiseTicket)
router.get("/displayAllItems", UserController.getAllItems);
router.get("/retrieveUser/:usr", UserController.getUser);
router.put("/updateFund", UserController.updateUserFund);
router.put("/updateQuantity", UserController.updateItemQuant);
router.post("/saveOrder", UserController.saveOrder);

module.exports = router;