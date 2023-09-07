var Dog = /** @class */ (function () {
    //This is the constructor for the class.
    //It is called whenever a Dog object is created.
    //takes 5 parameters
    function Dog(name, month, day, year, sound) {
        this.name = name;
        this.month = month;
        this.day = day;
        this.year = year;
        this.sound = sound;
    }
    Dog.prototype.speak = function () {
        return "".concat(this.name, " says ").concat(this.sound);
    };
    Dog.prototype.get_name = function () {
        return this.name;
    };
    Dog.prototype.birth_date = function () {
        return "".concat(this.month, "/").concat(this.day, "/").concat(this.year);
    };
    Dog.prototype.change_bark = function (new_sound) {
        this.sound = new_sound;
    };
    //add a custom combine_dogs method to combine two dogs and create a puppy.
    Dog.prototype.combine_dogs = function (other_dog) {
        var puppyName = "Puppy of ".concat(this.name, " and ").concat(other_dog.name);
        var puppySound = this.sound + other_dog.sound;
        return new Dog(puppyName, this.month, this.day, this.year + 1, puppySound);
    };
    return Dog;
}());
//Instances of the Dog class are created using the new keyword.
var boyDog = new Dog("Bingo", "1", 5, 2020, "WOOFWOOF");
var girlDog = new Dog("Katey", "2", 7, 2020, " barkbark ");
console.log(boyDog.speak());
console.log(girlDog.speak());
// Access the birth_date method
console.log(boyDog.birth_date());
console.log(girlDog.birth_date());
boyDog.change_bark("woofywoofy");
console.log(boyDog.speak());
var puppy = boyDog.combine_dogs(girlDog);
console.log(puppy.speak());
console.log(puppy.get_name());
console.log(puppy.birth_date());
