class Vehicle{
    model;
    maxSpeed;
    color;
    constructor(model, maxSpeed, color){
         // validam parametrii constructorului
        this.validateMaxSpeed(maxSpeed)
        // TODO: sa validam si ceilalti parametrii

        // 'this' reprezinta obiectul curent
        // 'this.model' reprezinta propietatea
        // 'model' reprezinta parametrul din constructor
        // atribuim valori propietatilor obiectului curent
        this.model = model
        this.color = color
        this.maxSpeed = maxSpeed
    }

    validateMaxSpeed(maxSpeed){
        if(maxSpeed < 0 || maxSpeed > 300){
            // aruncam o eroare in caz de maxSpeed depaseste limitele
            throw 'maxSpeed is invalid'
        }
    }

    
}

class Bicycle extends Vehicle{
    type;
}

class Car extends Vehicle{
    // propietatile clasei:
    horsePower;
    handling;
    running;
    // constructor (creeaza o instanta a clasei - un obiect)
    constructor(model, color, maxSpeed, horsePower, handling){
        // super reprezinta clasa parinte
        // apelam constructorul clasei parinte:
        super(model, color, maxSpeed)

        this.horsePower = horsePower
        this.handling = handling
        this.running = false
    }

    // comanda:
    start(){
        this.running = true
    }
    // query/interogare/intrebare
    isRunning(){
        return this.running
    }
}

let apple = new Car("Apple Titanium", "white", 150, 95, "easy")

console.log(apple)
apple.isRunning()
apple.start()
apple.isRunning()