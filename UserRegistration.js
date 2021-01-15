console.log("welcome to user registration")
const readLine=require('readline-sync')
const name_pattern="^[A-Z]{1}[a-z]{2,}$";
const email_pattern="^[a-zA-Z]{5}[0-9a-zA-Z\\.\\_\\-]*\\@[a-z]*\\.(com|co|in)$";
const mobile_pattern="^(\\+91)?[6-9]{1}[0-9]{9}$";
const password_pattern="^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9\\W]{8,}$";

class UserRegistration{
    checkFirstNameOrLastName=(name)=>{
            if(name.match(name_pattern)){
                console.log("Valid Name")
                return true;
            }else{
                console.log("Invaid Name")
                //return this.checkFirstNameOrLastName()
                }
                
            }
    checkEmailId=(email)=>{
        if(email.match(email_pattern)){
            console.log("valid email")
            return true;
        }else{
            console.log("invalid email")
            return false;
            //return this.checkEmailId()
        }
    }
     checkMobileNumber=(mobile)=>{
        if(mobile.match(mobile_pattern)){
            console.log("valid mobile number")
            return true;
        }else{
            console.log("invalid mobile number")
            return false;
            //return this.checkMobileNumber()
        }
    }
    checkPassword=(password)=>{
        if(password.match(password_pattern)){
            console.log("valid password")
            return true;
        }else{
            console.log("invalid password")
            return false;
            //return this.checkPassword()
        }
    }
}
userRegistration=new UserRegistration();
module.exports=new UserRegistration();

