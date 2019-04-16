"use strict";
exports.__esModule = true;
var fs = require("fs");
function readFile(path) {
    if (!isFileExist(path)) {
        throw new Error("file: '" + path + "' does not exist.");
    }
    return fs.readFileSync(path).toString();
}
exports.readFile = readFile;
function writeFile(path, text) {
    if (isFileExist(path)) {
        throw new Error("file: '" + path + "' already exist.");
    }
    fs.writeFileSync(path, text);
}
exports.writeFile = writeFile;
function isFileExist(path) {
    return fs.existsSync(path);
}
