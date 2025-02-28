class Person {
    constructor(firstName, lastName, bDay) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.bDay = bDay;
    }

    greeting() {
        return `Hello, ${this.firstName} ${this.lastName}!`;
    }
}

module.exports = {
    Person,
};
