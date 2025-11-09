import { MatchReader } from "./MatchReader.js";
import { Summary } from "./Summary.js";
const matchReader = MatchReader.matchReader("football.csv");
matchReader.load();
// Summary.winsAnalysisWithHtmlReports("Man United").buildAndPrintReport(
//   matchReader.matches
// );
const summary = Summary.winsAnalysisWithHtmlReports("Chelsea");
summary.buildAndPrintReport(matchReader.matches);
//# sourceMappingURL=index.js.map