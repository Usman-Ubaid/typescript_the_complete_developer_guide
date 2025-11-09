import type { MatchData } from "./MatchData.js";
export interface Analyzer {
    run(matches: MatchData[]): string;
}
export interface OutputTarget {
    print(report: string): void;
}
export declare class Summary {
    analyzer: Analyzer;
    outputTarget: OutputTarget;
    static winsAnalysisWithHtmlReports(team: string): Summary;
    constructor(analyzer: Analyzer, outputTarget: OutputTarget);
    buildAndPrintReport(matches: MatchData[]): void;
}
//# sourceMappingURL=Summary.d.ts.map