// Employee Daily Wage Data as Objects
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

// ✅ Displaying Results
console.log("Total Wage:", totalWage);
console.log("Daily Wage with Days:", dailyWageWithDay);
console.log("Full-Time Days:", fullTimeDays);
console.log("First Full-Time Wage Day:", firstFullTimeDay);
console.log("Every Full-Time Day has Correct Wage?", isEveryFullTime);
console.log("Is There Any Part-Time Wage?", isAnyPartTime);
console.log("Total Worked Days:", workedDaysCount);
