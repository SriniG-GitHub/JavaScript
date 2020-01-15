//Declare Array in JS
var cars = ['Audi', 'BMW', 'Ferrari', 'Volvo'];
console.log('Car array output: ' + cars);    //Returns output as [Audi,BMW,Ferrari,Volvo]


//To update a value in given array
cars[3] = 'Porsche';
console.log('Car array output: ' + cars);    //Returns output as [Audi,BMW,Ferrari,Porsche]

//To find length of array
console.log('Length of car array is: ' + cars.length); // Returns output as 4

//To sort arrays
cars[4] = 26;
cars[5] = 'Buggati'
cars[6] = 52.5;
cars[7] = false;
console.log('Car array output: ' + cars); //Returns output as [Audi,BMW,Ferrari,Porsche,26,Buggati,52.5,false]
console.log('After sorting car array output is: ' + cars.sort()); //Returns output as [26,52.5,Audi,BMW,Buggati,Ferrari,Porsche,false]

//Push Method  --> Adds item in last of array
cars.push('Lamborghini');
console.log('Car array output: ' + cars); //Returns output as [26,52.5,Audi,BMW,Buggati,Ferrari,Porsche,false,Lamborghini]

/*
NOTE: In JavaScript, arrays use numbered indexes.  
      In JavaScript, objects use named indexes.
*/

//ToString method
console.log('Car array output as string format: ' + (cars.toString())); //Returns output as [26,52.5,Audi,BMW,Buggati,Ferrari,Porsche,false,Lamborghini]

//Join method --> same as above only difference is we can add separator
console.log('Car array output with join: ' + (cars.join('*'))); // Returns ouput as [26*52.5*Audi*BMW*Buggati*Ferrari*Porsche*false*Lamborghini]
 
//Pop Method --> Removes last item and retuns
console.log('Car array output after popping: ' + (cars.pop())); // Returns output as [Lamborghini]

// Shift --> removes first element of array
console.log('Car array output after shifting: ' + (cars.shift())); // Returns output as [26]

// Un-Shift --> adds first element of array (The unshift() method returns the new array length)
console.log('Car array output after popping: ' + (cars.unshift('VolksWagen'))); // Returns output as 8
console.log('Car array output: ' + cars); //Returns output as [VolksWagen,52.5,Audi,BMW,Buggati,Ferrari,Porsche,false]

//Delete item from an array
delete cars[5];
console.log('Car array output after deleteing item at position 5: ' + cars); //Returns output as [VolksWagen,52.5,Audi,BMW,Buggati,,Porsche,false]

//Splicing an array --> can be used to add new items to an array (Returns an array with the deleted items)
cars.splice(2,2,'Mango','Banana'); //First param-> start, Second param-> No of items to be deleted, Third -> List of items to be added.
console.log('Car array output after splicing: ' + cars.splice(2,2,'Mango','Banana')); // Returns output as Mango,Banana
console.log('Car array output: ' + cars); //Returns output as [VolksWagen,52.5,Mango,Banana,Buggati,,Porsche,false]

//Slice Method --> method slices out a piece of an array into a new array. This method creates a new array. It does not remove any elements from the source array.
var slicedCar1 = cars.slice(5); //Slicing starts from index 5 to end of the array
console.log('Car array output: ' + slicedCar1); // Returns output as [,Porsche,false]
var slicedCar2 = cars.slice(3,6); //Slicing starts from index 3 to end at index 5 (6-1)
console.log('Car array output: ' + slicedCar2); // Returns output as [Banana,Buggati,]

//Reverse Array - method reverses the elements in an array.
console.log('Reversing an array: ' + cars.reverse());  //Returns output as [false,Porsche,,Buggati,Banana,Mango,52.5,VolksWagen]

//Sorting Number Array.
var numbArray = [45,1,28,5,0,78,55];
console.log('Number array sorted output: ' + (numbArray.sort())); //Returns output as [0,1,28,45,5,55,78]
//Issue:=== Look above output. It should be [0,1,5,28,45,55,78]. Sort() method works good in string not in numbers.
//Solution:=== 
console.log('Number array sorted output: ' + (numbArray.sort(function(a,b){return a-b}))); //Returns output as [0,1,5,28,45,55,78]
console.log('Number array sorted descending order: ' + (numbArray.sort(function(a,b){return b-a}))); //Returns output as [78,55,45,28,5,1,0]

//Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value. So we can use below method:
//Math.max.apply to find the highest number in an array || Math.min.apply to find the lowest number in an array
console.log('Maximum value from the sorted array: ' + (Math.max.apply(numbArray))); //Returns output as -Infinity
console.log('Maximum value from the sorted array: ' + (Math.max.apply(null,numbArray))); //Returns output as 78
/*
NOTE: Math.max.apply(null, numbArray) is equivalent to Math.max(45,1,28,5,0,78,55)
*/
console.log('Minimum value from the sorted array: ' + (Math.min.apply(numbArray))); //Returns output as Infinity
console.log('Minimum value from the sorted array: ' + (Math.min.apply(null,numbArray))); //Returns output as 0
/*
NOTE: Math.min.apply(null, numbArray) is equivalent to Math.min(45,1,28,5,0,78,55)
*/
