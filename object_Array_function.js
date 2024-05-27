"use strict";
// Assignment 1: Building Your Friend List
let people = {
    friends: [],
};
let obj1 = {
    firstName: "Aqib",
    lastName: "Jamali",
    id: 1,
};
let obj2 = {
    firstName: "Osama",
    lastName: "Jamali",
    id: 2,
};
let obj3 = {
    firstName: "Shafiq",
    lastName: "Jamali",
    id: 3,
};
people.friends.push(obj1, obj2, obj3);
console.log(people);
// Assignment 2:Manipulating an Array: Rearranging Words
let scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2);
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1, 0, "am", "a");
console.log(scrambledArray.join(" "));
//Assignment 3: Company Product Catalog
const product = [];
let product1 = {
    name: "Xiami 14 Ultra",
    model: 2024,
    cost: 200000,
    inventory: 25,
};
let product2 = {
    name: "volta Fan",
    model: 2024,
    cost: 10000,
    inventory: 10,
};
let product3 = {
    name: "kingtox Spray",
    model: 2024,
    cost: 550,
    inventory: 15,
};
product.push(product1);
product.push(product2);
product.push(product2);
console.log(product[1].inventory); // accessing product 2 inventory
product[1].inventory = product[1].inventory - 5; // updating product 2 inventory
console.log(product[1].inventory);
const student = [
    { name: "Aamir", seniorStatus: true, assignmentSubmission: false },
    { name: "Farhan", seniorStatus: false, assignmentSubmission: true },
    { name: "Osama", seniorStatus: true, assignmentSubmission: false },
    { name: "Shafiq", seniorStatus: true, assignmentSubmission: true },
    { name: "Nazar Muhammad", seniorStatus: false, assignmentSubmission: false },
    { name: "Asad Ullah", seniorStatus: true, assignmentSubmission: true },
    { name: "Raheem Ullah Babar", seniorStatus: true, assignmentSubmission: true },
];
let seniorStudents = (student) => {
    return student.filter((Array) => Array.assignmentSubmission === true && Array.seniorStatus === true);
};
let responsibleSeniors = seniorStudents(student);
console.log('Senior students who are responsible for the completiton of assignments of other students', responsibleSeniors);
// 
let filteringStudents = (student) => {
    return student.filter((update) => {
        return update.assignmentSubmission === true;
    });
};
let updatedList = filteringStudents(student);
console.log('Updated list of students who have completed their assignments ', updatedList);
