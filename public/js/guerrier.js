
import Humain from './humain.js'

export default class Guerrier extends Humain{
    constructor(nom, age, force, vie){
        super(nom, age);
        this.force = force;
        this.vie = vie;
    }
}

let guerrier1 = new Guerrier('Guerrier 1', 30, 20, 200)
let guerrier2 = new Guerrier('Guerrier 2', 30, 20, 200)
console.log(guerrier1);
console.log(guerrier2);