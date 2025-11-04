import { readFileSync } from "fs";
const fileRead = () => {
    const readingFile = readFileSync("./football.csv", { encoding: "utf-8" });
    const splitFile = readingFile.split("\n");
    const splittingMore = splitFile.map((value) => value.split(","));
    console.log(splittingMore);
};
const matches = readFileSync("./football.csv", { encoding: "utf-8" })
    .split("\n")
    .map((row) => row.split(","));
fileRead();
//# sourceMappingURL=index.js.map