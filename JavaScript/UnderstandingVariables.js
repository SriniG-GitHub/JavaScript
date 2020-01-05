//Type of Datatypes in JS : Number, String, Boolean, Object, Function, Undefined.

//Declaring variables
var carName;

console.log('Car Name: '+ carName);  //Only Declared. Hence Output is Undefined.

carName = 'BMW';
console.log('Car Name: '+ carName);  //Vaue Assigned. Hence Output is BMW.

//JavaScript never sets a value to null. That must be done programmatically.
var nullDemo = null;
console.log('Null Value of Demo is : ' + nullDemo); //null

//Type of NULL value is Object.
console.log('Type of NULL is : ' + (typeof nullDemo)); //OBJECT

//Type of NAN(Not A Number) value is Number.
console.log('Type of NAN is : ' + (typeof NaN)); //Number

//Number+String
var numbString = 1+2+3+4+"5";
console.log('Value of Number + String : ' + numbString); //105

//String+Number
var stringNumb = "1"+2+3+4+5;
console.log('Value of String + Number : ' + stringNumb); //12345


/*
NOTE1:
undefined and null are equal in value but different in type:
typeof undefined           // undefined
typeof null                // object
null === undefined         // false
null == undefined          // true

NOTE2:
An empty value has nothing to do with undefined.
An empty string has both a legal value and a type.
var car = "";    // The value is "", the typeof is "string"
*/