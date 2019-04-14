"use strict";
exports.__esModule = true;
function getTargets(content, specifiedContentRegexp) {
    return content.match(specifiedContentRegexp);
}
exports.getTargets = getTargets;
function getNonRepeatedTargets(content, specifiedContentRegexp) {
    var targets = [];
    while (true) {
        var found = content.match(specifiedContentRegexp);
        if (!found) {
            break;
        }
        var matched = found[0];
        targets.push(matched);
        content = content.split(matched).join('');
    }
    return targets;
}
exports.getNonRepeatedTargets = getNonRepeatedTargets;
