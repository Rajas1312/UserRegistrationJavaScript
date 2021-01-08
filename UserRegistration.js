console.log("welcome to user registration")
let name_pattern="^[A-Z]{1}[a-z]{2,}$";
function checkFirstNameOrLastName(name){
    if(name.match(name_pattern)){
        console.log("Valid Name")
    }else{
        console.log("Invaid Name")
    }
}
checkFirstNameOrLastName("Rajas");
checkFirstNameOrLastName("Dongre");
