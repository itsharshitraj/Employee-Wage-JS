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

