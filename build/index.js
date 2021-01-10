"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// numbersCollection is an instance of a class called NumbersCollection that is
// specifically created to be compatible with our Sorter class that uses 'Bubble Sort' algorithm
var numbersCollection = new NumbersCollection_1.NumbersCollection([50, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
numbersCollection.sort();
// // displays sorted numbers after sorter.sort() is called
console.log(numbersCollection.data);
// //
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xaaby');
// const sorter2 = new Sorter(charactersCollection);
charactersCollection.sort();
console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const sorter3 = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
