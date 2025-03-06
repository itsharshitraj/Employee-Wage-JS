
// UC-11B: Create Employee Payroll Data with ID, Name, and Salary
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_IN_MONTH = 20;
const MAX_WORKING_HOURS = 160;

// Function to get work hours based on employee type.
function getWorkHours(employeeCheck) {
switch (employeeCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;
     
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
        
    default:
       return 0;
}
};

 // Function to calculate daily wage.

 const calculateDailyWage = (workHours) => workHours * WAGE_PER_HOUR;

 // Employee Payroll Class
class EmployeePayroll {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.dailyWageData = []; // Stores daily wages, hours, and days
    }
 // Function to add daily wage entry
    addDailyWage(day, hoursWorked, wageEarned) {
        this.dailyWageData.push({ day, hoursWorked, wageEarned });
    }
// Function to calculate total wage and total hours worked.

calculateTotal() {
    let totalWage = this.dailyWageData.reduce((sum, dayData) => sum + dayData.wageEarned, 0);
    let totalHours = this.dailyWageData.reduce((sum, dayData) => sum + dayData.hoursWorked, 0);
    return { totalHours, totalWage };
}

// Function to display Employee Payroll details
toString() {
    let { totalHours, totalWage } = this.calculateTotal();
    return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Total Hours: ${totalHours}, Total Wage: $${totalWage}`;
}}
// Create an Employee Payroll Object
let employee1 = new EmployeePayroll(1, "John Doe", 50000);

// Variables for tracking work
let totalWorkHours = 0;
let totalWorkingDays = 0;


// Loop until max working days (20) or max work hours (160) is reached
while (totalWorkingDays < WORKING_DAYS_IN_MONTH && totalWorkHours < MAX_WORKING_HOURS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 3);
    let workHours = getWorkHours(employeeCheck);
    totalWorkHours += workHours;
    let dailyWage = calculateDailyWage(workHours);

    // Add daily wage data to the employee
    employee1.addDailyWage(totalWorkingDays, workHours, dailyWage);
}
// Print Employee Payroll Data
console.log(employee1.toString());
console.log("Daily Wage Details:", employee1.dailyWageData);

