import { writeFileSync } from "fs";
import type { OutputTarget } from "../Summary.js";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
            <h1>Analysis Output</h1>
            <p>${report}</p>
        `;
    writeFileSync("report.html", html);
  }
}
