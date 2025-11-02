import { Sorter } from "./Sorter.js";
import { NumberCollection } from "./NumberCollection.js";
import { CharactersCollection } from "./CharactersCollection.js";

const numbersCollection = new NumberCollection([10, 3, -5, 0]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection);

const charactersCollection = new CharactersCollection("ayXbc");
const characterSorter = new Sorter(charactersCollection);
characterSorter.sort();
console.log(charactersCollection);
