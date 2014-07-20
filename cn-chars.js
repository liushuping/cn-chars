﻿var simplifiedCharsCodeMap = {};
var traditionalCharsCodeMap = {};
var fs = require('fs');
var simplifiedCharsCode = JSON.parse(fs.readFileSync(__dirname + '/simplifiedCharsCode.json'));
var traditionalCharsCode = JSON.parse(fs.readFileSync(__dirname + '/traditionalCharsCode.json'));

simplifiedCharsCode.forEach(function(code, index) {
    simplifiedCharsCodeMap[code] = index;
});

traditionalCharsCode.forEach(function(code, index) {
    traditionalCharsCodeMap[code] = index;
});

function toSimplifiedChar(cnChar) {
    var simCode;
    var traCode = cnChar.charCodeAt(0);
    var index = traditionalCharsCodeMap[traCode];

    if (index == undefined) return cnChar;

    simCode = simplifiedCharsCode[index];
    return String.fromCharCode(simCode);
}

function toTraditionalChar(cnChar) {
    var traCode;
    var simCode = cnChar.charCodeAt(0);
    var index = simplifiedCharsCodeMap[simCode];

    if (index == undefined) return cnChar;

    traCode = traditionalCharsCode[index];
    return String.fromCharCode(traCode);
}

exports.toTraditionalChar = toTraditionalChar;
exports.toSimplifiedChar = toSimplifiedChar;
