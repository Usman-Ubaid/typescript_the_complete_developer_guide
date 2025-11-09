import { writeFileSync } from "fs";
export class HtmlReport {
    print(report) {
        const html = `
            <h1>Analysis Output</h1>
            <p>${report}</p>
        `;
        writeFileSync("report.html", html);
    }
}
//# sourceMappingURL=HtmlReport.js.map