//Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
//Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode)
//The "use strict" directive is only recognized at the beginning of a script or a function.


//Hoisting is JavaScript's default behavior of moving declarations to the top.
//Variables and constants declared with let or const are not hoisted!

//JavaScript only hoists declarations, not initializations.
var x = 5;
var y = 8;
console.log('Output of above operation is : ' + x +" "+ y);  //Output: 5 8

var x1=5;
console.log('Output of above operation is : ' + x1 +" "+ y1);  //Output: 5 Undefined
var y1 = 8;
//Solution: To fix above problem. JavaScript in strict mode does not allow variables to be used if they are not declared.


//Local Variables
//console.log('Local variable returns: 1:  ' + carName);  // Output: carName is not defined
function f1(){
    var carName= 'Volvo';
    console.log('Local variable returns: 2:  ' + carName);  // Output: Volvo
}
//console.log('Local variable returns: 3: ' + carName); // Output: carName is not defined
f1();

//JavaScript had only two types of scope: Global Scope and Function Scope.
var x51 = 10;
console.log('Output of above operation is : ' + x51);  //Output: 10
{
  let x51 = 2;
  console.log('Output of above operation is : ' + x51);  //Output: 2
}
console.log('Output of above operation is : ' + x51);  //Output: 10

//Variables declared with the let keyword can have Block Scope.
let k1 = 2;   // Allowed
{
  //var k1 = 3;   // Identifier 'k1' has already been declared  
}

{
  //var k1 = 4;   // Identifier 'k1' has already been declared
}
//---------------------------------------------------------------------------
var J1 = 2;  // Now x is 2
var J1 = 3;   // Now x is 3
//---------------------------------------------------------------------------
var x4 = 2;       // Allowed
let x4 = 3;       // Identifier 'x4' has already been declared
{
  var x4 = 4;   // Allowed
  let x4 = 5   // Identifier 'x4' has already been declared
}
//---------------------------------------------------------------------------
let x5 = 2;       // Allowed
let x5 = 3;       // Not allowed

{
  let x5 = 4;   // Allowed
  let x5 = 5;   // Not allowed
}
//---------------------------------------------------------------------------
let x6 = 2;       // Allowed
var x6 = 3;       // Not allowed

{
  let x6 = 4;   // Allowed
  var x6 = 5;   // Not allowed
}
//---------------------------------------------------------------------------
let x7 = 2;       // Allowed
{
  let x7 = 3;   // Allowed
}

{
  let x7 = 4;   // Allowed
}
//---------------------------------------------------------------------------
//Declaring a variable with const is similar to let when it comes to Block Scope.
var x8 = 10;
// Here x is 10
{
  const x8 = 2;
  // Here x is 2
}
// Here x is 10
//-----------------------------------------------------------------------------
//we cannot change constant primitive values, but we can change the properties of constant objects.
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
//-----------------------------------------------------------------------------
//You can change the properties of a constant object:
//create a const object:
const car = {type:"Fiat", model:"500", color:"white"};
// Can change a property:
car.color = "red";
// Can add a property:
car.owner = "Johnson";
//------------------------------------------------------------------------------
//But you can NOT reassign a constant object:
const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
//----------------------------------------------------------------------------
//Arrays are also same as above when it comes to Const
//----------------------------------------------------------------------------
const x10 = 2;       // Allowed
{
  const x10 = 3;   // Allowed
}
{
  const x10 = 4;   // Allowed
}