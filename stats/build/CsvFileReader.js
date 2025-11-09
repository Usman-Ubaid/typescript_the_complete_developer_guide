import { readFileSync } from "fs";
export class CsvFileReader {
    filename;
    data = [];
    constructor(filename) {
        this.filename = filename;
    }
    read() {
        this.data = readFileSync(this.filename, { encoding: "utf-8" })
            .split("\n")
            .map((row) => row.split(","));
    }
}
//# sourceMappingURL=CsvFileReader.js.map