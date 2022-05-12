const fs = require('fs');
const path = require('path');

const possibleLetters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

function sentenceDivider (text) {
    let indexTinish, firstLetter;
    for(let i = 0; i < text.length; i++) {
        if(possibleLetters.includes(text[i]) || text[i] == '“') {
            firstLetter = text.indexOf(text[i])
            break
        };
    };
    text = text.slice(firstLetter);
    for(let i = 0; i < text.length; i++) {
        if(text[i] == '.' || text[i] == '?' || text[i] == '!' || text[i] == '\n') {
            indexTinish = text.indexOf(text[i])
            break
        }
    }
    
    text = text.split('');
    sentence = text.splice(0, indexTinish + 1).join('');
    text = text.join('');
    fs.appendFileSync( path.join(process.cwd(), 'firstSentence.txt'), `${sentence}\n`);
    fs.writeFileSync( path.join(process.cwd(), 'remainSentences.txt'), text);
    return sentence;
};

module.exports = sentenceDivider;



