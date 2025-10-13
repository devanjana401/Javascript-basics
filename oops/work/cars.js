class Cars {
    constructor(name) { // constructor used for initializing
        this.name = name;
    }
    work() {
        console.log(`${this.name} is a branded car`);
    }
}
class Suzuki extends Cars {
    constructor(name, model) {
        super(name); // call parent class constructor
        this.model = model; // initialize new property
    }
    show() {
        console.log(`${this.name} model is ${this.model}`);
    }
}
const car1 = new Suzuki("Suzuki", "Swift");
car1.work();
car1.show();
