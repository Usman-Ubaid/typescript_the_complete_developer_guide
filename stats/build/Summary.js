import { WinsAnalysis } from "./analyzers/WinsAnalysis.js";
import { HtmlReport } from "./reportTargets/HtmlReport.js";
export class Summary {
    analyzer;
    outputTarget;
    static winsAnalysisWithHtmlReports(team) {
        return new Summary(new WinsAnalysis(team), new HtmlReport());
    }
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}
//# sourceMappingURL=Summary.js.map