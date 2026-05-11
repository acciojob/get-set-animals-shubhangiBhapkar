//complete this code
class Animal {
	Animal(species){
		this.species = species;
	}
	get getSpecies(){
		return this.species;
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`);
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
	bark(){
		super(species);
		console.log("woof");
}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	purr(){
		super(species);
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
