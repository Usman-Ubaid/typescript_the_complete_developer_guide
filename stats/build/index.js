import { CsvFileReader } from "./CsvFileReader.js";
const reader = new CsvFileReader("football.csv");
reader.read();
console.log(reader.data);
let manUnitedWins = 0;
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United has won ${manUnitedWins} games`);
//# sourceMappingURL=index.js.map