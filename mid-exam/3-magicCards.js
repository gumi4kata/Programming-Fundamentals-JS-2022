function solveThree(input) {

    let originalCardDeck = input.shift().split(':');
    let newDeck = [];
    let lineCommand = input.shift();

    while (lineCommand != 'Ready') {
        let currentLine = lineCommand.split(' ');
        let command = currentLine[0];
        let cardName = currentLine[1];
        let cardIndex = currentLine[2];

        switch (command) {
            case 'Add':
                if (originalCardDeck.includes(cardName)) {
                    newDeck.push(cardName);
                } else {
                    console.log('Card not found.');
                }
                break;

            case 'Insert':
                if (originalCardDeck.includes(cardName) && cardIndex > -1) {
                    newDeck.splice(cardIndex, 0, cardName);

                } else {
                    console.log('Error!');
                }
                break;

            case 'Remove':
                if (newDeck.includes(cardName)) {
                    let indexOfCard = newDeck.indexOf(cardName);
                    newDeck.splice(indexOfCard, 1);

                } else {
                    console.log('Card not found.');
                }
                break;

            case 'Swap':
                let temp = newDeck;
                let indexOne = newDeck.indexOf(cardName);
                let indexTwo = newDeck.indexOf(cardIndex);

                let el = cardName;
                let el2 = cardIndex;
                temp.splice(indexOne, 1, el2);
                temp.splice(indexTwo, 1, el);
                temp = newDeck;

                break;

            case 'Shuffle':
                for (let i = 0; i < newDeck.length / 2; i++) {
                    let tempElement = newDeck[i];

                    newDeck[i] = newDeck[newDeck.length - 1 - i];
                    newDeck[newDeck.length - 1 - i] = tempElement;
                }

                break;

        }
        lineCommand = input.shift();
    }

    console.log(newDeck.join(' '));

}

// solveThree(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
//     "Add Moonfire",
//     "Add Bite",
//     "Insert Claw 0",
//     "Swap Claw Moonfire",
//     "Remove Bite",
//     "Ready"]);

// console.log('-------');

// solveThree(["Timetwister:CopyArtifact:Lifeweaver:TimeWalk",
//     "Add UndergroundSea",
//     "Add Timetwister",
//     "Remove Wrath",
//     "Add CopyArtifact",
//     "Shuffle deck",
//     "Ready"]);

// console.log('-------');

// solveThree(["BlackLotus:Bite:Innervate:Moonfire:CopyArtifact",
//     "Add BlackLotus",
//     "Insert Claw 1",
//     "Add Moonfire",
//     "Add Bite",
//     "Ready"]);