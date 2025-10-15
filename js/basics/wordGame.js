
function makePhrases () {

    let wordStoreOne = ['24/7', 'Multi-tier', '30, 00 feet', 'B-to-B', 'win-win'];
    let wordStoreTwo = ['Empowered', 'Value added', 'Oriented', 'Focused', 'Aligned'];
    let wordStoreThree = ['Process', 'Solution', 'Tipping-point', 'Strategy', 'Vision'];

    let pickerOne = Math.floor(Math.random() * wordStoreOne.length);
    let pickerTwo = Math.floor(Math.random() * wordStoreTwo.length);
    let pickerThree = Math.floor(Math.random() * wordStoreThree.length);

    return [wordStoreOne[pickerOne], wordStoreTwo[pickerTwo], wordStoreThree[pickerThree]];

}

function startWordGame () {
    let randomWords = makePhrases();

    console.log(`${randomWords[0]} ${randomWords[1]} ${randomWords[2]}`);

}

startWordGame();