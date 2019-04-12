"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
function info(message, type) {
    var header = type ? chalk_1["default"].green.bold(type) + " " : '';
    console.log("" + header + message);
}
exports.info = info;
function error(message) {
    console.error(chalk_1["default"].red(message));
}
exports.error = error;
function success(message) {
    console.error(chalk_1["default"].green(message));
}
exports.success = success;
