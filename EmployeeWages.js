// UC-12: Extend Employee Payroll Data to Store Gender and Start Date
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
    constructor(id, name, salary,gender,startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate);
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
/**
     * (a) Calculate total wage and total hours worked using reduce.
     */
calculateTotal = () => ({
    totalHours: this.dailyWageData.reduce((sum, dayData) => sum + dayData.hoursWorked, 0),
    totalWage: this.dailyWageData.reduce((sum, dayData) => sum + dayData.wageEarned, 0),
});

/**
 * (b) Show full working days using forEach.
 */
getFullWorkingDays = () => {
    console.log("Full Working Days:");
    this.dailyWageData.forEach((dayData) => {
        if (dayData.hoursWorked === FULL_TIME_HOURS)
            console.log(`Day ${dayData.day}: ${dayData.hoursWorked} Hours, Wage: $${dayData.wageEarned}`);
    });
};

/**
 * (c) Show part-time working days using map & filter.
 */
getPartWorkingDays = () => {
    return this.dailyWageData
        .filter((dayData) => dayData.hoursWorked === PART_TIME_HOURS)
        .map((dayData) => `Day ${dayData.day}`);
};

/**
 * (d) Show no working days using map & filter.
 */
getNoWorkingDays = () => {
    return this.dailyWageData
        .filter((dayData) => dayData.hoursWorked === 0)
        .map((dayData) => `Day ${dayData.day}`);
};

/**
 * Function to display Employee Payroll details.
 */
toString = () => {
    let { totalHours, totalWage } = this.calculateTotal();
    return `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: $${this.salary}, Start Date: ${this.startDate.toDateString()}, Total Hours: ${totalHours}, Total Wage: $${totalWage}`;
};
}

// Create Employee Payroll Object with Gender and Start Date
let employee1 = new EmployeePayroll(1, "John Doe", 50000, "Male", "2024-03-01");

// Variables for tracking work
let totalWorkHours = 0;
let totalWorkingDays = 0;

// Simulate working days until max work hours or max days is reached
while (totalWorkingDays < WORKING_DAYS_IN_MONTH&& totalWorkHours < MAX_WORKING_HOURS) {
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

// UC-12: Perform Object Operations using Arrow Functions
console.log("\n--- UC-12: Object Operations ---");
employee1.getFullWorkingDays();
console.log("Part Working Days:", employee1.getPartWorkingDays());
console.log("No Working Days:", employee1.getNoWorkingDays());