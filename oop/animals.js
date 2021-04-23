class Animal {
    makeSound() {}
}

class Dog extends Animal {
    makeSound() {
        console.log("Ham!")
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow")
    }
}

class Fish extends Animal {
    makeSound() {
        // nu scoate niciun sunet
    }
}

class Child {
    playWith(animal) {
        animal.makeSound()
    }
}

let animals = [
    new Dog(),
    new Cat(),
    new Fish()
]

let Heidi = new Child()
animals.forEach(animal => Heidi.playWith(animal))

// alternativ cu for of:
for (const animal of animals) {
    Heidi.playWith(animal)
}