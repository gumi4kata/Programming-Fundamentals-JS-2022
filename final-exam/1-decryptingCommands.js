function solve(input) {

    let nameString = input.shift();
    let line = input.shift();
    let newNameString = '';

    while (line !== 'Finish') {
        let commandLine = line.split(' ');
        let command = commandLine[0];


        switch (command) {
            case 'Replace':
                let currentChar = commandLine[1];
                let newChar = commandLine[2];
                if (nameString.includes(currentChar)) {
                    nameString = nameString.split(currentChar).join(newChar);
                    console.log(nameString);
                }
                break;

            case 'Cut':

                let startIndex = Number(commandLine[1]);
                let endIndex = Number(commandLine[2]);

                if (startIndex >= 0 && startIndex <= nameString.length && endIndex >= 0 && endIndex <= nameString.length) {
                    let substr = newNameString.substring(startIndex, endIndex - 1);
                    newNameString = newNameString.replace(substr, '');
                    console.log(newNameString);

                } else {
                    console.log("Invalid indices!");
                }
                break;

            case 'Make':
                let letterCaseCommand = commandLine[1];


                if (letterCaseCommand === 'Upper') {
                    newNameString = nameString.toUpperCase();
                    console.log(newNameString);
                } else if (letterCaseCommand === 'Lower') {
                    newNameString = nameString.toLowerCase();
                    console.log(newNameString);
                }

                break;

            case 'Check':
                let newString = commandLine[1];
                if (nameString.hasOwnProperty(newString)) {
                    console.log(`Message contains ${newString}`);
                } else {
                    console.log(`Message doesn't contain ${newString}`);
                }
                break;

            case 'Sum':
                let startIn = Number(commandLine[1]);
                let endIn = Number(commandLine[2]);

                let sum = 0;

                if (startIn >= 0 && endIn >= 0 && startIn <= nameString.length && endIn <= nameString.length) {

                    let currentString = newNameString.slice(startIn, endIn + 1);

                    for (let i = 0; i < currentString.length; i++) {
                        sum += currentString[i].charCodeAt(0);
                    }
                    console.log(sum);

                } else {
                    console.log('Invalid indices!');
                }

                break;

        }

        line = input.shift();
    }
}