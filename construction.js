class House {
    constructor(address, town, alarm, price, street, bedrooms, bathrooms, squareFootage) {
        this.address = address;
        this.town = town;
        this.alarm = alarm;
        this._price = price;
        this.street = street;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.squareFootage = squareFootage;
        this.completeAddress = `${address} ${street} ${town}`;
    }
    correctPriceMethod() {
        this._price = this._price * House.inflationCoefficient;
    }
    toString() {
        return `House at ${this.completeAddress}\n` +
            `Price: Ksh.${this._price}\n` +
            `Bedrooms: ${this.bedrooms}\n` +
            `Bathrooms: ${this.bathrooms}\n` +
            `Square Footage: ${this.squareFootage}\n`;
    }
    static setInflationCoefficient(newCoefficient) {
        House.inflationCoefficient = newCoefficient;
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        if (newPrice >= 0) {
            this._price = newPrice;
        }
        else {
            throw new Error("Price cannot be negative");
        }
    }
    calculatePropertyTax(taxRate) {
        return (this._price * taxRate) / 100;
    }
    estimateUtilityCost() {
        return this.squareFootage * 10; // Assuming Ksh.10 per square foot
    }
}
House.companyName = "Maryland Construction Company";
House.inflationCoefficient = 5;
const house1 = new House(1234, "Meru", false, 150000, "Forthstreet", 3, 2, 2000);
const house2 = new House(5432, "Nakuru", true, 225000, "Ngara road", 4, 3, 2500);
console.log(house1.address);
console.log(house1.town);
console.log(house1.alarm);
// Access and print the additional attributes
console.log(house1.bedrooms);
console.log(house1.bathrooms);
console.log(house1.squareFootage);
console.log(house1.price);
house1.correctPriceMethod();
console.log(house1.price);
console.log(house1.street);
console.log(house1.completeAddress);
// Print the custom string representation
console.log(house1.toString());
// Access and print the initial inflationCoefficient
console.log("Initial inflationCoefficient:", House.inflationCoefficient);
// Set a new inflationCoefficient using the static method
House.setInflationCoefficient(6);
// Access and print the updated inflationCoefficient
console.log("Updated inflationCoefficient:", House.inflationCoefficient);
// Access and print the initial price using the getter method
console.log("Initial price:", house1.price);
// Set a new price using the setter method
house1.price = 160000;
// Access and print the updated price using the getter method
console.log("Updated price:", house1.price);
// Calculate and print property tax for house1
const propertyTaxRate = 9; // Example tax rate (15%)
const propertyTax1 = house1.calculatePropertyTax(propertyTaxRate);
console.log(`Property tax for house1: Ksh.${propertyTax1}`);
// Estimate and print utility cost for house2
const utilityCost1 = house1.estimateUtilityCost();
console.log(`Estimated utility cost for house1: Ksh.${utilityCost1}`);
