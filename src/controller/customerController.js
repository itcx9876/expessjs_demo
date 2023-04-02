const { customers } = require("../data");


exports.getAllUsers = (req, res) => {
    res.json(customers)
}

exports.createNewUser = (req, res) => {
    const data = req.body;
    let errors = []
    if (data.name === "") {
        errors.push({ message: "Name cannot be empty" })

    }
    if (data.department === "") {
        errors.push({ message: "Department cannot be empty" })
    }

    // checks if there are more than one users with the requested email    
    const isNotUnique = customers.filter(customer => customer.email === data.email).length > 0 //T
    if (isNotUnique) {
        errors.push({ message: "Email already in use" })
    }
    if (errors.length > 0) {
        return res.status(400).json(errors);
    }

    customers.push(data)
    return res.sendStatus(201);
}

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    let isFound = customers.filter(customer => customer.emloyeeCode === Number(id)).length === 0;
    if (isFound) {
        return res.status(404).json({ message: `No user with id: ${id} exists` })
    }
    customers = customers.map(customer => {
        if (customer.emloyeeCode === Number(id)) {
            return { ...customer, ...data }
        }
        else {
            return customer;
        }
    })

    return res.status(200).json(customers)
}
exports.deleteUser = (req, res) => {
    console.log("DELETE CUSTOMER")
    const id = req.params.id;
    let isFound = customers.filter(customer => customer.emloyeeCode === Number(id)).length === 0;
    if (isFound) {
        return res.status(404).json({ message: `No user with id: ${id} exists` })
    }
    let newCustomers = customers.filter(customer => customer.emloyeeCode !== Number(id));
    customers = newCustomers;

    res.sendStatus(200);
}