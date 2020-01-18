//Use the keyword class to create a class, and always add the constructor() method. 
//The constructor method is called each time the class object is initialized.
class Car{
    constructor(carName){
        this.carName = carName;
    }
}
let carObj = new Car('Ford');
console.log('Output of the object created : ' + (carObj.carName)); //Ford

//The constructor method is special, it is where you initialize properties, it is called automatically when a class is initiated, 
//and it has to have the exact name "constructor", in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.
class Fruit{
    constructor(fruitName){
        this.fruitName = fruitName;
    }
    display(tree){
        console.log('Output of the fruit name : ' + (this.fruitName)); //Apple
        console.log('Output of the tree passed param : ' + tree); //Apple Tree
    }
}
let fruitObj = new Fruit('Apple');
fruitObj.display('Apple Tree');

//Static Class
class staticClass{
    constructor(statClass){
        this.statClass = statClass;
    }
    static print(printStat){
        console.log('Output of the static Class name : ' + (this.statClass));  //Undefined
        console.log('Output of the static Class name : ' + (printStat));  // I am new to JS
    }
}
let statiClass1 = new staticClass('Static Class');
staticClass.print('I am new to JS');

//Unlike functions, and other JavaScript declarations, class declarations are not hoisted.
//You cannot use the class yet.
//mycar1 = new Car("Ford1")
//This would raise an error.
let mycar2 = new Car("Ford2") //This will NOT working
class Car1 {
    constructor(brand) {
      this.carname = brand;
    }
  }
  
  //Now you can use the class:
  let mycar1 = new Car("Ford1")

  