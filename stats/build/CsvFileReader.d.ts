import { MatchResult } from "./MatchResult.js";
type MatchData = [Date, string, string, number, number, MatchResult, string];
export declare class CsvFileReader {
    filename: string;
    data: MatchData[];
    constructor(filename: string);
    read(): void;
}
export {};
//# sourceMappingURL=CsvFileReader.d.ts.map