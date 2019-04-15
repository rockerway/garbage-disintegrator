"use strict";
exports.__esModule = true;
function getTargets(content, specifiedContentRegexp) {
    return content.match(new RegExp(specifiedContentRegexp, 'g'));
}
exports.getTargets = getTargets;
function getNonRepeatedTargets(content, specifiedContentRegexp) {
    var input = content;
    var regexp = new RegExp(specifiedContentRegexp, 'm');
    var targets = [];
    while (true) {
        var found = input.match(regexp);
        if (!found) {
            break;
        }
        var matched = found[0];
        targets.push(matched);
        input = input.split(matched).join('');
    }
    return targets;
}
exports.getNonRepeatedTargets = getNonRepeatedTargets;
