"# sentence-divider" 

    Returns the first sentence from a text.
    This function also writes the sentence in the working folder to the firstSentence.txt file and the rest of the text to the remainSentences.txt file.

    sentenceDivider('some text') -> first sentence from given text

## Installation

    npm i sentence-divider

## Usage

    const sentenceDivider = require('sentence-divider');
    const firstSentence = sentenceDivider('some text');
    console.log(firstSentence)
