const Employee = require('../models/employee');

// Get All Employees
async function index(req, res) {
    const employees = await Employee.find()
    res.render('pages/index.ejs', { employees })
}

// Render Create Page
function create(req, res) {
    res.render("pages/create.ejs")
}

// Save Employee
async function store(req, res) {
    const employee = new Employee({
        empId: req.body.empId,
        name: req.body.name,
        address: req.body.address,
        salary: req.body.salary,
        gender: req.body.gender
    })
    await employee.save()
    res.redirect("/")
}

// Get Single Employee
async function show(req, res) {
    const id = req.params.id
    const employee = await Employee.findById(id)
    res.render('pages/show.ejs', { employee })
}

// Render Edit Form 
async function edit(req, res) {
    const id = req.params.id
    const employee = await Employee.findById(id)
    res.render('pages/edit.ejs', { employee })
}

// Update Employee
async function update(req, res) {
    const id = req.params.id
    const employee = await Employee.findById(id)

    employee.empId = req.body.empId
    employee.name = req.body.name
    employee.address = req.body.address
    employee.salary = req.body.salary
    employee.gender = req.body.gender

    await employee.save()

    res.redirect("/")
}

// Delete Employee
async function destroy(req, res) {
    await Employee.findByIdAndDelete(req.params.id)
    res.redirect('/')
}

module.exports = {
    index,
    create,
    store,
    show,
    edit,
    update,
    destroy
}
