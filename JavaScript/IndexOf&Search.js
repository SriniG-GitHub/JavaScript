var str="Please locate where 'locate' occurs!";

var index1 = str.indexOf('locate');        //Retuns7. First occurence in a string in forward direction.
console.log('Index of locate in str is: ' + index1);

var index2 = str.indexOf('locate',16);  //Retuns21. First occurence in a string after 16 character in forward direction.
console.log('Index of locate in str is: ' + index2);

var index3 = str.lastIndexOf('locate'); //Retuns21. First occurence in a string in backward direction.
console.log('Index of locate in str is: ' + index3);

var index4 = str.lastIndexOf('locate',10); //Retuns7. First occurence in a string before 10 character in backward direction.
console.log('Index of locate in str is: ' + index4);

var index5 = str.search('locate'); //Retuns7. Cannot take 2nd parameter as above. But, Can take powerful regular expressions to search the given word in target string.
console.log('Index of locate in str is: ' + index5);

//Slicing operation in JS
var strslice = 'This is to show demo on JavaScript';
var result1 = strslice.slice(5,10);
console.log('The slice operation from index 1-5(i,e 0-4) is: '+ result1);//Returns 'is to'

var result2 = strslice.slice(5);
console.log('The slice operation from index 5-last(i,e 5-(strlength-1)) is: '+ result2);//Returns 'is to show demo on JavaScript'

var result3 = strslice.slice(-10,-5);
console.log('The slice operation from index -10, -5(i,e -9,-4) is: '+ result3);//Returns 'JavaS'

var result4 = strslice.slice(-10);
console.log('The slice operation from index 5-last(i,e -9,-(strlength-1)) is: '+ result4);//Returns 'JavaScript'

//SubString operations in JS
var strSubString = "This is to show demo on JavaScript";
//This is same as above slice. Except this cannot take negative index rest is same as slice.

var result5 = strSubString.substring(5,10)
console.log('The substring operation from index 1-5(i,e 0-4) is: '+ result5);//Returns 'is to'

var result6 = strSubString.substring(5);
console.log('The substring operation from index 5-last(i,e 5-(strlength-1)) is: '+ result6);//Returns 'is to show demo on JavaScript'


//Substr operation in JS
var strSubStr = "This is to show demo on JavaScript";
//This is same as above slice. Except the 2nd argument specifies the length of the extracted part and not index.

var result7 = strSubStr.substr(5,7);  //Returns 'is to s'. It means break string which start from char-5 to char-7
console.log('The SubStr operation returns : ' + result7);

var result8 = strSubStr.substr(5);  //Returns 'is to show demo on JavaScript'. It means start from char-5 to end of string.
console.log('The SubStr operation returns : ' + result8);

var result9 = strSubStr.substr(-5);  //Returns 'cript'. It means start from last of string to (string length-5).
console.log('The SubStr operation returns : ' + result9);

//A string can be converted to an array with the split() method
var strSplit = "This is to show demo on JavaScript";
var result10 = strSplit.split(' ');  //Splits at spaces from original string.
for(var i=0;i<result10.length;i++){
console.log('Splitting string: ' + result10[i]);   //Returns This\n   is\n    to\n    show\n     demo\n    on\n     JavaScript\n
}


//There are also other methods on string apart from above are: Replace, toUpperCase, toLowerCase, concat, trim, charAt, charCodeAt