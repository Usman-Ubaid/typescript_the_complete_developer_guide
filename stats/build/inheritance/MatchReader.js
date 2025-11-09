import { CsvFileReader } from "./CsvFileReader.js";
import { dateStringToDate } from "./utils.js";
export class MatchReader extends CsvFileReader {
    mapRow(row) {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ];
    }
}
//# sourceMappingURL=MatchReader.js.map