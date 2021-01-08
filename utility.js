class Utility{

    printName(name){
        console.log("its in utility js name",name)
        return "my name is ",name;
    }
}
module.exports=new Utility();