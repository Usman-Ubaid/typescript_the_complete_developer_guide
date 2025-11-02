import { Sorter } from "./Sorter.js";
import { NumberCollection } from "./NumberCollection.js";

const numbersCollection = new NumberCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection);
