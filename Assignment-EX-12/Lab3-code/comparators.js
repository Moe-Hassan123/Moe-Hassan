"use strict";

/**
 * Employee class
 */
class Employee {
    /**
     * 
     * @param {String} name name of employee
     * @param {Number} salary monthly salary
     * @param {Number} year hired on year
     * @param {Number} month hired on month
     * @param {Number} day hired on day
     */
    constructor(name, salary, year, month, day) {
        this.name = name;
        this.salary = salary;
        this.hireDate = new Date(year, month - 1, day);
    }
}

/**
 * Function to compare Employees by name
 * 
 * @param {Employee} empA one employee to compare
 * @param {Employee} empB other employee that is compared with
 * @returns {Number} Greater than zero if empA is 'bigger' less than zero if empB is bigger
 */
function nameComparator(empA, empB) {
    if (empA.name > empB.name) {
        return 1;
    }
    if (empA.name < empB.name) {
        return -1;
    }
    return 0;
}

/**
 * Function to compare two employees by salary
 * 
 * @param {Employee} empA one employee to compare
 * @param {Employee} empB other employee to compare
 * @returns {Number} greater than zero if empA salary is greater than empB salary, zero if empA salary equals empB salary or less than zero if empA salary is less than empB salary
 */
function salaryComparator(empA, empB) {
    return empA.salary - empB.salary;
}


/**
 * Function to compare two employees by hire date
 * 
 * @param {Employee} empA one employee to compare
 * @param {Employee} empB other employee to compare
 * @returns {Number} greater than zero if empA hiredate is greater than empB hiredate, zero if empA hiredate equals empB hiredate or less than zero if empA hiredate is less than empB hiredate
 */
function hireDateComparator(empA, empB) {
    return empA.hireDate.getTime() - empB.hireDate.getTime();
}
