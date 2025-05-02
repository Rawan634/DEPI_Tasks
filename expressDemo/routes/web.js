const express = require('express')
const router = express.Router()
const PageController = require('../app/controllers/page.controller')
const EmployeeController = require("../app/controllers/employee.controller")

router.get('/', EmployeeController.index)
router.get('/create', EmployeeController.create)
router.post('/store', EmployeeController.store)
router.get('/show/:id', EmployeeController.show)
router.get('/edit/:id', EmployeeController.edit)
router.post('/update/:id', EmployeeController.update)
router.get('/delete/:id', EmployeeController.destroy)

module.exports = router;
