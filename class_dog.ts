class Dog {
    //This is the constructor for the class.
    //It is called whenever a Dog object is created.
    //takes 5 parameters
    constructor(
    private name: string,
    private month: string,
    private day: number,
    private year: number,
    private sound: string, 
    )
    {}


speak(): string{
    return `${this.name} says ${this.sound}`;
}
get_name(): string{
    return this.name;
}
birth_date(): string{
    return `${this.month}/${this.day}/${this.year}`;
}
change_bark(new_sound:string): void {
    this.sound = new_sound;
}
//add a custom combine_dogs method to combine two dogs and create a puppy.
combine_dogs(other_dog:Dog):Dog{
    const puppyName = `Puppy of ${this.name} and ${other_dog.name}`;
    const puppySound = this.sound + other_dog.sound;
    return new Dog(puppyName, this.month,this.day, this.year + 1, puppySound);

}
}

//Instances of the Dog class are created using the new keyword.
const boyDog = new Dog("Bingo", "1", 5, 2020, "WOOFWOOF");
const girlDog = new Dog("Katey", "2", 7, 2020, " barkbark ");
console.log(boyDog.speak());
console.log(girlDog.speak());

// Access the birth_date method
console.log(boyDog.birth_date());
console.log(girlDog.birth_date());

boyDog.change_bark("woofywoofy");
console.log(boyDog.speak());

const puppy = boyDog.combine_dogs(girlDog);
console.log(puppy.speak());
console.log(puppy.get_name());
console.log(puppy.birth_date());

/*
expected output

Bingo says WOOFWOOF
Katey says  barkbark 
1/5/2020
2/7/2020
Bingo says woofywoofy
Puppy of Bingo and Katey says woofywoofy barkbark 
Puppy of Bingo and Katey
1/5/2021
*/