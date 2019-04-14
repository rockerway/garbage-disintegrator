"use strict";
exports.__esModule = true;
var fs = require("fs");
function readFile(path) {
    return fs
        .readFileSync(path)
        .toString()
        .split('\n')
        .slice(0, -1)
        .join('\n');
}
exports.readFile = readFile;
function writeFile(path, text) {
    fs.writeFileSync(path, text);
}
exports.writeFile = writeFile;
function appendTextToFile(path, text) {
    fs.appendFileSync(path, text);
}
exports.appendTextToFile = appendTextToFile;
