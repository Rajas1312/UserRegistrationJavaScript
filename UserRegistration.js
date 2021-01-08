console.log("welcome to user registration")
let name_pattern="^[A-Z]{1}[a-z]{2,}$";
function checkFirstName(firstName){
    if(firstName.match(name_pattern)){
        console.log("valid firstname")
    }else{
        console.log("invaid firstname")
    }
}
checkFirstName("Rajas");
