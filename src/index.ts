import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// numbersCollection is an instance of a class called NumbersCollection that is
// specifically created to be compatible with our Sorter class that uses 'Bubble Sort' algorithm
const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
numbersCollection.sort();

// // displays sorted numbers after sorter.sort() is called
console.log(numbersCollection.data);
// //

const charactersCollection = new CharactersCollection('Xaaby');
// const sorter2 = new Sorter(charactersCollection);
charactersCollection.sort();

console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const sorter3 = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
