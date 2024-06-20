/* Assignment: Building a Student Management System
Description:
You are tasked with building a student management system using JavaScript. The system should allow you to
perform various operations on a list of students, including adding, updating, deleting, and displaying student
information.
Requirements:
Here is an initial array of students. Each student is represented as an object with the following properties: id,
firstName, lastName, age, and grade.

Implement the following functions using pure JavaScript (without any external libraries or frameworks):
a. Add a Student: Create a function to add a new student to the array.
b. Update Student Information: Create a function to update a student's information based on their id.
c. Delete a Student: Create a function to delete a student based on their id.
d. List All Students: Create a function to display a list of all students.
e. Find Students by Grade: Create a function to find all students who have a specific grade.
f. Calculate Average Age: Create a function to calculate the average age of all students using array method.*/


// add function
const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "C" },
];

function addstudent(id, firstName, lastName, age, grade) {
    students.push({ id, firstName, lastName, age, grade });
}

addstudent(4, "sahil", "kumar", 23, "B");
console.log(students);

// Update function
function updateid(id, firstName, lastName, age, grade) {
    const student = students.find(student => student.id === id);
    if (student) {
        student.firstName = firstName;
        student.lastName = lastName;
        student.age = age;
        student.grade = grade;
    }
}

updateid(2, "sahil", "kumar", 22, "B");
console.log(students);

// Delete a Student



function deleteid(id){
    const delstudent = students.find(studentd => studentd.id==id);
    if(delstudent){
students.splice(id-1,1);
    }
}
deleteid(2);
console.log(students);

//List all students
function display_students(){
console.log(students);
}
display_students();

//finding student by grade

function bygrade(grade){
    const  studentIndex = students.findIndex(student => student.grade ==grade)
    if(studentIndex !==-1){
        console.log(students[studentIndex])
    }}
    bygrade("B");

//calculating average age

    function avgage(students){
        let average_age =0
        for (i=0; i<students.length; i++){
average_age +=students[i].age;
}
return console.log(average_age/students.length);
    }

avgage(students);