console.log("welcome to user registration")
const readLine=require('readline-sync')
const name_pattern="^[A-Z]{1}[a-z]{2,}$";
const email_pattern="^[a-zA-Z]{5}[0-9a-zA-Z\\.\\_\\-]*\\@[a-z]*\\.(com|co|in)$";
const mobile_pattern="^(\\+91)?[6-9]{1}[0-9]{9}$";
const password_pattern="^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9\\W]{8,}$";

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
        checkEmailId()
    }
}
checkEmailId();
function checkMobileNumber(){
    let mobile=readLine.question("Enter a mobile number ")
    if(mobile.match(mobile_pattern)){
        console.log("valid mobile number")
    }else{
        console.log("invalid mobile number")
        checkMobileNumber()
    }
}
checkMobileNumber();
function checkPassword(){
    let password=readLine.question("Enter a password ")
    if(password.match(password_pattern)){
        console.log("valid password")
    }else{
        console.log("invalid password")
        checkPassword()
    }
}
checkPassword();