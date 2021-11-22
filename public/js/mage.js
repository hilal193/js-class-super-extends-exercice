import Humain from "./humain.js";

class Mage extends Humain{
    constructor(nom,age,classe){
        super(nom,age);
        this.classe= classe;
    }
}

let sorcier = new Mage("harry",12,"mage");
console.log(sorcier);