//complete this code
class Animal {
	Animal(species){
		this.species = species;
	}
	get getSpecies(){
		return species;
	}
	makeSound(){
		console.log(`The ${species} makes a sound`);
	}
}

class Dog extends Animal {
	bark(){
		super(species);
		console.log("woof");
}
}

class Cat extends Animal {
	purr(){
		super(species);
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
