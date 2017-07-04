
var person1 = new Person;
var person2 = new Person;
var person3 = new Person;
var elevator = new Elevator;

person1.setWeight(78);
person2.setWeight(99);
person3.setWeight(64);

// By default is in the floor 0
elevator.addPeople(person1).floor(3);
elevator.addPeople(person2).floor(5);
elevator.addPeople(person3).floor(1);

