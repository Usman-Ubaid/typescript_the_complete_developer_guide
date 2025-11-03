import { Sorter } from "./Sorter.js";
export declare class NumberCollection extends Sorter {
    data: number[];
    constructor(data: number[]);
    get length(): number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}
//# sourceMappingURL=NumberCollection.d.ts.map