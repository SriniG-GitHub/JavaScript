// Fun with '0' and '+ive/-ive' values.
var x=1;
//x=0. is False because '0' means False
console.log('Value returned as : ' + Boolean(x=0));  //Output : False
//x=0. is True because '1' means True.
console.log('Value returned as : ' + Boolean(x=1));  //Output : True
//x=50. is True because '+ive value' means True.
console.log('Value returned as : ' + Boolean(x=50));  //Output : True
//x=-50. is True because '-ive value' means True.
console.log('Value returned as : ' + Boolean(x=-50));  //Output : True

// Fun with Float values
var a = 0.1;
var b= 0.2;
var c = a+b; //Expected : 0.3 but check output
console.log('Value returned as : ' + c );  //Output : 0.30000000000000004

//Solution to above problem
c = ((a*10) + (b*10)) / 10;
console.log('Value returned as : ' + c );  //Output : 0.3

//To break string in middle we should use backslash(\)
var lable = 'Hello \
World!';
console.log('Value returned as : ' + lable );  //Output : Hello World!

//IF condition with semicolon executes irrespective of satisifcation. It is true always.
var z = 'James';
if (z == 55);   //Because of a misplaced semicolon, this code block will execute regardless of the value of z
{
console.log('This is illegal. Condition not satisfied but entered loop');  //Output : This is illegal. Condition not satisfied but entered loop
}


//What happens if we break return in 2 lines:
function myFunction(a) {
    var
    power = 10; 
    return a * power;
  }
  console.log('Value returned as : ' + myFunction(5) );  //Output : 50

  function myFunction1(a1) {
    var
    power1 = 10; 
    return         //Compiler treats this as 'return;'
    a1 * power1;
  }
  console.log('Value returned as : ' + myFunction1(5) );  //Output : undefined

  //Accessing Arrays with Named Indexes
  //JavaScript does not support arrays with named indexes.
  //In JavaScript, arrays use numbered indexes
var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x1 = person.length;       // person.length will return 3
var y1 = person[0];           // person[0] will return "John"


//In JavaScript, objects use named indexes
//If you use a named index, when accessing an array, JavaScript will redefine the array to a standard object
//After the automatic redefinition, array methods and properties will produce undefined or incorrect results
var person1 = [];
person["firstName1"] = "John";
person["lastName1"] = "Doe";
person["age1"] = 46;
var x2 = person1.length;      // person.length will return 0
var y2 = person1[0];          // person[0] will return undefined

//Different options:
0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false

//Subtracting a string from a string, does not generate an error but returns NaN (Not a Number)
"Hello" - "Dolly"    // returns NaN

var x5 = 5 + 7;       // x.valueOf() is 12,  typeof x is a number
var x6 = 5 + "7";     // x.valueOf() is 57,  typeof x is a string
var x7 = "5" + 7;     // x.valueOf() is 57,  typeof x is a string
var x8 = 5 - 7;       // x.valueOf() is -2,  typeof x is a number
var x9 = 5 - "7";     // x.valueOf() is -2,  typeof x is a number
var x10 = "5" - 7;     // x.valueOf() is -2,  typeof x is a number
var x11 = 5 - "x";     // x.valueOf() is NaN, typeof x is a number

//In JS: try to Avoid global variables, avoid new(instead use arr =[] and not new array[]), avoid ==(instead use ===), avoid eval()