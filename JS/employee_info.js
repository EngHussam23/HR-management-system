'use strict';

let allEmployees = [];
function Employee(id, name, department, level, image, salary) {
    this.ID = id;
    this.name = name;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = salary;
    allEmployees.push(this);
}

let emp1 = new Employee(getEmployeeID(), 'Ghazi Samer', 'Administration', 'Senior', 'NA',);
emp1.salary = calculateEmployeeSalary(emp1.level);
let emp2 = new Employee(getEmployeeID(), 'Lana Ali', 'Finance', 'Senior', 'NA',);
emp2.salary = calculateEmployeeSalary(emp2.level);
let emp3 = new Employee(getEmployeeID(), 'Tamara Ayoub', 'Marketing', 'Senior', 'NA',);
emp3.salary = calculateEmployeeSalary(emp3.level);
let emp4 = new Employee(getEmployeeID(), 'Safi Walid', 'Administration', 'Mid-Senior', 'NA',);
emp4.salary = calculateEmployeeSalary(emp4.level);
let emp5 = new Employee(getEmployeeID(), 'Omar Zaid', 'Development', 'Senior', 'NA',);
emp5.salary = calculateEmployeeSalary(emp5.level);
let emp6 = new Employee(getEmployeeID(), 'Rana Saleh', 'Development', 'Junior', 'NA');
emp6.salary = calculateEmployeeSalary(emp6.level);
let emp7 = new Employee(getEmployeeID(), 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'NA',);
emp7.salary = calculateEmployeeSalary(emp7.level);

function getEmployeeID() {
    // for testing
    let x = Math.ceil(Math.random() * (9999 - 1000)) + 1000;
    console.log(`id = ${x}`);

    return Math.ceil(Math.random() * (9999 - 1000)) + 1000;
}

function calculateEmployeeSalary(employeeLevel) {
    let salary = 0;
    let netSalary = 0;
    switch (employeeLevel) {
        case "Senior":
            salary = Math.ceil(Math.random() * (2000 - 1500)) + 1500;

            // for testing
            console.log(salary);
            break;
        case "Mid-Senior":
            salary = Math.ceil(Math.random() * (1500 - 1000)) + 1000;

            // for testing
            console.log(salary);
            break;
        case "Junior":
            salary = Math.ceil(Math.random() * (1000 - 500)) + 500;

            // for testing
            console.log(salary);
            break;
        default:
            console.log("Invalid level");
    }
    netSalary = salary - (salary * 7.5 / 100);
    return netSalary;
}

// function EmployeeInfo() {
//     let employeeInfo = document.getElementById("employee-info");
//     employeeInfo.innerHTML = `
//     <h2>Employees Info:</h2><br>
//     <p>
//         Employee Name: ${emp1.name}<br>
//         Department: ${emp1.department}<br>
//         Employee Salary: ${emp1.salary}
//     </p><br>
//     <p>
//         Employee Name: ${emp2.name}<br>
//         Employee Salary: ${emp2.salary}
//     </p><br>
//     <p>
//         Employee Name: ${emp3.name}<br>
//         Employee Salary: ${emp3.salary}
//     </p><br>
//     <p>
//         Employee Name: ${emp4.name}<br>
//         Employee Salary: ${emp4.salary}
//     </p><br>
//     <p>
//         Employee Name: ${emp5.name}<br>
//         Employee Salary: ${emp5.salary}
//     </p><br>
//     <p>
//         Employee Name: ${emp6.name}<br>
//         Employee Salary: ${emp6.salary}
//     </p><br>
//     <p>
//         Employee Name: ${emp7.name}<br>
//         Employee Salary: ${emp7.salary}
//     </p>
// `
// }
//EmployeeInfo();

console.log(allEmployees);