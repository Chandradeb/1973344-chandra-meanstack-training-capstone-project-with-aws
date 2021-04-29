const express = require('express');
const router = express.Router();
const EmployeeController = require('../Controller/employee.controller.js')

//router connecting to controller
router.post('/employeeLogin', EmployeeController.employeeLogin);
router.post("/Request",EmployeeController.sendRequest);
router.put("/Edit",EmployeeController.updateEmpPwd);
router.get("/Update",EmployeeController.ViewOrder);
router.put("/Status",EmployeeController.updateOrder);
router.get("/Ticket",EmployeeController.ViewTicket);
router.get("/Funds",EmployeeController.ViewFunds);
router.put("/Unlock",EmployeeController.unlockUser);
router.put("/Refund",EmployeeController.RefundUser);

module.exports = router;