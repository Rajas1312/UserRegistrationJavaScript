console.log("welcome to user registration")
const readLine=require('readline-sync')
const name_pattern="^[A-Z]{1}[a-z]{2,}$";
const email_pattern="^[a-zA-Z]{5}[0-9a-zA-Z\\.\\_\\-]*\\@[a-z]*\\.(com|co|in)$";
function checkFirstNameOrLastName(){
    let name=readLine.question("Enter a Name ")
    if(name.match(name_pattern)){
        console.log("Valid Name")
    }else{
        console.log("Invaid Name")
        checkFirstNameOrLastName()
    }
}
checkFirstNameOrLastName();
checkFirstNameOrLastName();
function checkEmailId(){
    let email=readLine.question("Enter a email Id ")
    if(email.match(email_pattern)){
        console.log("valid email")
    }else{
        console.log("invalid email")
       return checkEmailId()
    }
}
checkEmailId();