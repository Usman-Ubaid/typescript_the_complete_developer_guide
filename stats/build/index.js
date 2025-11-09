import { CsvFileReader } from "./CsvFileReader.js";
import { MatchReader } from "./MatchReader.js";
import { MatchResult } from "./MatchResult.js";
const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// if (reader.data.length > 0 && reader.data[0]) {
//   const date = reader.data[0][0];
// }
// const date = reader.data?.[0];
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United has won ${manUnitedWins} games`);
//# sourceMappingURL=index.js.map