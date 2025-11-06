import { readFileSync } from "fs";
import { dateStringToDate } from "./utils.js";
import { MatchResult } from "./MatchResult.js";
export class CsvFileReader {
    filename;
    data = [];
    constructor(filename) {
        this.filename = filename;
    }
    read() {
        this.data = readFileSync(this.filename, { encoding: "utf-8" })
            .split("\n")
            .map((row) => row.split(","))
            .map((row) => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
}
//# sourceMappingURL=CsvFileReader.js.map