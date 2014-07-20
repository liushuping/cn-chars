var cnchars = require('../cn-chars');
var simplifiedChars = [
    '÷”',
    '«·'
];

var traditionalChars = [
    'Áä',
    '›p'
];

describe('#toSimplifiedChar', function() {
    traditionalChars.forEach(function(cnChar, index) {
        it('should convert traditional character ' + traditionalChars[index] ' to ' + simplifiedChars[index], function() {
            var result = cnchars.toSimplifiedChar(cnChar);
            assert.ok(result == simplifiedChars[index]);
        });
    });
});

describe('#toTraditionalChar', function() {
    traditionalChars.forEach(function(cnChar, index) {
        it('should convert simplified character ' + simplifiedChars[index] ' to ' + traditionalChars[index], function() {
            var result = cnchars.toTraditionalChar(cnChar);
            assert.ok(result == traditionalChars[index]);
        });
    });
});
