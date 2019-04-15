"use strict";
exports.__esModule = true;
var fs = require("fs");
function readFile(path) {
    return fs.readFileSync(path).toString();
}
exports.readFile = readFile;
function writeFile(path, text) {
    fs.writeFileSync(path, text);
}
exports.writeFile = writeFile;
