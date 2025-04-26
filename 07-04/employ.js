const employees = [
    { id: 1, name: "Amit", salary: 50000, department: "IT", status: "active" },
    { id: 2, name: "Neha", salary: 60000, department: "HR", status: "inactive" },
    { id: 3, name: "Raj", salary: 55000, department: "IT", status: "active" },
    { id: 4, name: "Priya", salary: 70000, department: "Finance", status: "inactive" },
    { id: 5, name: "Vikram", salary: 65000, department: "HR", status: "active" }
]

let active_emp = employees.filter((e) => {
    if (e.status == "active") {
        return e
    }
})
console.log(active_emp);


let emp_name = employees.map((e) => {
    return e.name
})

console.log(emp_name)


for (let i of employees) {
    console.log("Employ Name", i.name);
    console.log("Department", i.department);
    console.log("")
    console.log("")
}

let emp = employees.filter((e) => {
    if (e.salary >= 60000) {
        return e
    }
})

console.log(emp);









