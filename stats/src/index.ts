import { CsvFileReader } from "./CsvFileReader.js";
import { MatchReader } from "./MatchReader.js";
import { Summary } from "./Summary.js";
import { WinsAnalysis } from "./analyzers/WinsAnalysis.js";
import { ConsoleReport } from "./reportTargets/ConsoleReport.js";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Chelsea"), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
