var inputString = "Hello This Is My First Program In Javascript JS";
reverseWordsInAString(inputString);



function reverseWordsInAString(reverseString){
var arrString = reverseString.split(' ');
var len = arrString.length;
console.log('Length of string after splitting is: ' + len);
var finalString='';

for(var i=0;i<len;i++){
var temp = arrString[i];
for(var j=temp.length-1;j>=0;j--){
  finalString = finalString+temp.charAt(j);
}
finalString = finalString+' ';
}
console.log('Final String is: ' + finalString);
}