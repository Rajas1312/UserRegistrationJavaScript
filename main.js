const utility=require('./utility')
const readLine=require('readline-sync')

let firstName=readLine.question('Enter first name');
const retData=utility.printName(firstName);
console.log("it is in the main js",retData);
