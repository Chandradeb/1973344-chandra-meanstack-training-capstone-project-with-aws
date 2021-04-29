const express = require('express');
const router = express.Router();
const admin_controller = require('../Controller/admin.controller.js');


router.post('/adminLogin', admin_controller.admin_login);
router.post('/addProduct', admin_controller.admin_addProduct);
router.post('/updateProduct', admin_controller.admin_updateProduct);
router.delete('/deleteProduct/:productName', admin_controller.admin_deleteProduct);
router.get('/viewRequests', admin_controller.admin_viewRequests);
router.post('/Signup',admin_controller.Signup);
router.delete('/deleteEmployee/:email',admin_controller.deleteEmployee);
router.delete('/deleteEmployee/:id',admin_controller.deleteEmployee);
router.get('/costumerDetails', admin_controller.costumerDetails)
router.get('/dailyReports', admin_controller.dailyReports);
router.get('/weeklyReports',admin_controller.weeklyReports);
router.get('/monthlyReports',admin_controller.monthlyReports);
router.get('/productDetails',admin_controller.productReports);

module.exports = router;