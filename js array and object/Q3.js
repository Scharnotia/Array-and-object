// Object Extensibility and Sealing
// a) Use the Object.preventEatensions method to prevent any further additions of properties to the student object.
// b) Use the Object.isExtensible method to check if the student object is extensible. Store the result in a variable
// called extensibleStatus.
// c) Create a new object called teacher with a 'subject' property set to 'Math'.
// ") Use the Object.seal method to seal the teacher object, preventing any additions or deletions of properties.
// e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called
// sealedStatus.
// f) Print the eatensibleStatus and sealedStatus to the console.



const students = {
    name :"sahil",
    class: "msc",
    roll_no: 7805,
    year: "first"
};

Object.preventExtensions(students);
let eatensibleStatus = Object.isExtensible(students)


const teacher={
    subject:"MATH"
}
Object.seal(teacher);
let sealedStatus= Object.isSealed(teacher)
console.log(eatensibleStatus);
console.log(sealedStatus);