// ========================= UC-14: Employee Payroll Data with Validation =========================
class EmployeePayrollData {
    constructor(id, name, salary, gender, startDate) {
        try {
            this.setId(id);
            this.setName(name);
            this.setSalary(salary);
            this.setGender(gender);
            this.setStartDate(startDate);
        } catch (error) {
            console.error(error.message);
        }
    }

    setId(id) {
        if (typeof id !== "number" || isNaN(id)) {
            throw new Error("Invalid ID: ID must be a number.");
        }
        let idPattern = /^[1-9][0-9]*$/; // Positive non-zero number
        if (idPattern.test(id.toString())) {
            this.id = id;
        } else {
            throw new Error("Invalid ID: ID must be a positive non-zero number.");
        }
    }

    setName(name) {
        let namePattern = /^[A-Z][a-z]{2,}$/; // Capital first letter, min 3 chars
        if (namePattern.test(name)) {
            this.name = name;
        } else {
            throw new Error("Invalid Name: Must start with a capital letter & be at least 3 characters long.");
        }
    }

    setSalary(salary) {
        if (typeof salary !== "number" || isNaN(salary)) {
            throw new Error("Invalid Salary: Must be a number.");
        }
        let salaryPattern = /^[1-9][0-9]*$/; // Positive non-zero number
        if (salaryPattern.test(salary.toString())) {
            this.salary = salary;
        } else {
            throw new Error("Invalid Salary: Must be a positive non-zero number.");
        }
    }

    setGender(gender) {
        let genderPattern = /^[MF]$/; // Only 'M' or 'F' allowed
        if (genderPattern.test(gender)) {
            this.gender = gender;
        } else {
            throw new Error("Invalid Gender: Must be 'M' or 'F'.");
        }
    }

    setStartDate(startDate) {
        let today = new Date();
        if (startDate instanceof Date && startDate <= today) {
            this.startDate = startDate;
        } else {
            throw new Error("Invalid Start Date: Date must not be a future date.");
        }
    }

    toString() {
        let startDateStr = this.startDate ? this.startDate.toDateString() : "Invalid Date";
        return `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: $${this.salary}, Start Date: ${startDateStr}`;
    }
}

// Test with Valid Data**
try {
    let employeePayroll = new EmployeePayrollData(1, "John", 50000, "M", new Date("2024-03-01"));
    console.log(employeePayroll.toString());
} catch (error) {
    console.error(error.message);
}

// ========================= UC-7: Employee Wage Operations Using Arrow Functions =========================
let employeeWageData = [
    { day: 1, hoursWorked: 8, dailyWage: 160 },
    { day: 2, hoursWorked: 4, dailyWage: 80 },
    { day: 3, hoursWorked: 0, dailyWage: 0 },
    { day: 4, hoursWorked: 8, dailyWage: 160 },
    { day: 5, hoursWorked: 4, dailyWage: 80 },
    { day: 6, hoursWorked: 8, dailyWage: 160 },
    { day: 7, hoursWorked: 0, dailyWage: 0 },
    { day: 8, hoursWorked: 8, dailyWage: 160 },
];

// (a) Calculate Total Wage using Arrow Function and reduce()
const totalWage = employeeWageData.reduce((total, emp) => total + emp.dailyWage, 0);

// (b) Show the Day along with Daily Wage using Map
const dailyWageWithDay = employeeWageData.map(emp => `Day ${emp.day}: $${emp.dailyWage}`);

// (c) Show Days when Full-Time Wage (160) was earned using Filter
const fullTimeDays = employeeWageData
    .filter(emp => emp.dailyWage === 160)
    .map(emp => `Day ${emp.day}`);

// (d) Find the first occurrence when Full-Time Wage was earned using Find
const firstFullTimeDay = employeeWageData.find(emp => emp.dailyWage === 160);

// (e) Check if Every Element of Full-Time Wage is truly holding Full-Time Wage using Every
const isEveryFullTime = fullTimeDays.every(day => day.dailyWage === 160);

// (f) Check if there is any Part-Time Wage using Some
const isAnyPartTime = employeeWageData.some(emp => emp.dailyWage === 80);

// (g) Find the number of days the Employee Worked using Reduce
const workedDaysCount = employeeWageData.reduce((count, emp) => count + (emp.dailyWage > 0 ? 1 : 0), 0);

// Displaying Results
console.log("Total Wage:", totalWage);
console.log("Daily Wage with Days:", dailyWageWithDay);
console.log("Full-Time Days:", fullTimeDays);
console.log("First Full-Time Wage Day:", firstFullTimeDay);
console.log("Every Full-Time Day has Correct Wage?", isEveryFullTime);
console.log("Is There Any Part-Time Wage?", isAnyPartTime);
console.log("Total Worked Days:", workedDaysCount);
