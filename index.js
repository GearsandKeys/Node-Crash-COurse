const Person = require('./person'); //common JS

//we don't use this format, because Node hasn't implemented it yet
//import Person from './person';
//You'd have to implement Babel for es6 features

const person1 = new Person("joe", 33);

person1.greeting();