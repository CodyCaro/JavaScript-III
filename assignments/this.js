/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window binding is when you don't specify what the this keyword is. It will just point to the window, which you don't want. Can avoid with          'use strict' at the top of the funciton.
 * 2. When you call a function and it is invoked look to the left of the dot and that is what 'this' refers to.
 * 3. The New Binding uses a constructor. Inside of the constuctor you can have this.name, this.location for example and when you go to create a         new object you can pass in what you want this.name and this.location to be for that new object.
 * 4. An explicit binding uses .call .apply and .bind all functions hold these properties and if inside that function that is using the call             property is a this.name. The this.name will refer to whatever object is being passed into the .call().
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function speak() {
    console.log(`Hi my name is ${this.name}`);
}

speak();

// Principle 2

// code example for Implicit Binding
const me = {
    name: "Cody",
    intro: function () {
        console.log(`My name is ${this.name}`);
    }
}

me.intro();

// Principle 3

// code example for New Binding
function DnDCharacter(attributes) {
    this.name = attributes.name;
    this.classType = attributes.classType;
    this.level = attributes.level;
    this.spell = attributes.spell;
    this.showStats = function () {
        return `Name: ${this.name} Class: ${this.classType} Level: ${this.level}`;
    };
    this.castSpell = function () {
        return `${this.name} has cast ${this.spell}`;
    };
}

const blueWizard = new DnDCharacter({
    name: "Blue Wizard",
    classType: "Wizard",
    level: 35,
    spell: "Fireball",
});

console.log(blueWizard.showStats());
console.log(blueWizard.castSpell());

// Principle 4

// code example for Explicit Binding
const shouldChaseWaterfalls = function(){
    console.log(`Chasing waterfalls = ${this.chaseWaterfall}`);
};

const tlc = {
    chaseWaterfall: false
}

shouldChaseWaterfalls.call(tlc);