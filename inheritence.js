class Parent{
    constructor(){
        this.fatherName ="dalton"
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Arnold");
console.log(baby.getFullName());
const baby2 = new Child("Jerry");
console.log(baby2.getFullName());