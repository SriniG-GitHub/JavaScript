var numb = 12345;

//Converting a number to string
console.log('Converting number to string format: ' + (numb.toString())); //Ouptut: "12345"
console.log('Checking format of numb after Converting number to string : ' + typeof(numb.toString()));  //Output: String

//  ToExponential Method -> returns a string, with a number rounded and written using exponential notation
console.log('Converting number to Exponential format: ' + (numb.toExponential(5))); //Ouptut: "1.23450e+4"

var money = 99.9;
//  ToFixed Method -> returns a string, with the number written with a specified number of decimals
console.log('Converting number to Fixed format: ' + (money.toFixed(5))); //Ouptut: "99.90000"

// ToPrecision Method -> returns a string, with a number written with a specified length
console.log('Converting number to Precision format: ' + (money.toFixed(5))); //Ouptut: "99.90000"

// ToValueOf Method -> returns a number as a number
console.log('Converting number to Value of format: ' + (money.valueOf(5))); //Ouptut: 99.9

/*There are 3 JavaScript methods that can be used to convert variables to numbers:

The Number() method
The parseInt() method
The parseFloat() method */

//Number Method -> can be used to convert JavaScript variables to numbers
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN

//Number() can also convert a date to a number
Number(new Date("2017-09-30"));    // returns 1506729600000

//ParseInt() Method -> parses a string and returns a whole number. Spaces are allowed. Only the first number is returned
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 

//ParseFloat() Method -> parses a string and returns a number. Spaces are allowed. Only the first number is returned
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN

/*
NOTE: Below Listed Number Properties belongs to the JavaScript's number object wrapper called Number. These properties can only be accessed as Number.MAX_VALUE
      Using myNumber.MAX_VALUE, where myNumber is a variable, expression, or value, will return undefined. i,e Number Properties Cannot be Used on Variables.
            var x = 6;
            var y = x.MAX_VALUE;    // y becomes undefined
*/

//MAX_VALUE returns the largest possible number in JavaScript
console.log('Max Value in JavaScript is : ' + (Number.MAX_VALUE)); // Output: 1.7976931348623157e+308

//MIN_VALUE returns the lowest possible number in JavaScript
console.log('MIN Value in JavaScript is : ' + (Number.MIN_VALUE)); // Output: 5e-324

//Postive Infinity returns the largest possible number in JavaScript
console.log('Postive Infinity Value in JavaScript is : ' + (Number.POSITIVE_INFINITY)); // Output: Infinity

//Negative Infinity returns the lowest possible number in JavaScript
console.log('Negative Infinity Value in JavaScript is : ' + (Number.NEGATIVE_INFINITY)); // Output: -Infinity

//NaN is a JavaScript reserved word indicating that a number is not a legal number.Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)
console.log('NAN Value in JavaScript is : ' + (Number.NaN)); //Output: NaN

