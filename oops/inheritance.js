//Parent class
class Animal {
    constructor(name){       //constructor used for initializing
        this.name = name;
    }
    //method
    speak(){
        console.log(`${this.name} makes a sound`);
        
    }
}
//Child class(inherit from parent class Animal)
class Dog extends Animal{
    constructor(name,breed){
        super(name);       //super used to invoke parent / call parent class constructor
        this.breed = breed;
    }
    //override speak method(polymorphism)
    speak(){
        console.log(`${this.name} ${this.breed} barks`);   
    }
}
const dog = new Dog("Eva","Spitz");    //instance of dog
dog.speak();