import  Humain  from "./humain.js";
class Archer extends Humain{
constructor(nom,age,fleches){
    super(nom,age);
    this.fleches=fleches;
}
}
let fleche = new Archer("arrow",18,200);
console.log(fleche);







// class Archer extends Humain {
// constructor(nom,age,classe){
//     super(nom,age);
//     this.classe=classe;
// }
// }

// let ishida = new Archer("ishida",18,"archer");
// console.log(ishida);
// console.log("ishida");