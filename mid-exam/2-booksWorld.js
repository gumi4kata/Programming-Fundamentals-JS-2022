function solveTwo(input) {

    let mostFavGenres = input.shift().trim().split(' | ');
    let line = input.shift().trim();

    while (line !== 'Stop!') {
        let currentCommand = line.split(' ');
        let command = currentCommand[0];
        let firstArgument = currentCommand[1];
        let secondArgument = currentCommand[2];

        switch (command) {
            case 'Join':
                if (!mostFavGenres.includes(firstArgument)) {
                    mostFavGenres.push(firstArgument);
                }
                break;

            case 'Drop':
                if (mostFavGenres.includes(firstArgument)) {
                    let itemIndex = mostFavGenres.indexOf(firstArgument);
                    if (itemIndex > -1) {
                        mostFavGenres.splice(itemIndex, 1);
                    }
                }
                break;

            case 'Replace':
                if (mostFavGenres.includes(firstArgument) && !mostFavGenres.includes(secondArgument)) {
                    let updateIndex = mostFavGenres.indexOf(firstArgument)
                    if (updateIndex > -1) {
                        mostFavGenres[updateIndex] = secondArgument;
                    }
                }
                break;

            case 'Prefer':
                let firstIndex = firstArgument;
                let secondIndex = secondArgument;
                if (firstIndex && secondIndex) {
                    let element = mostFavGenres[firstArgument];
                    mostFavGenres.splice(firstIndex, 1);
                    mostFavGenres.push(element);

                    let secondelement = mostFavGenres[secondArgument];
                    mostFavGenres.splice(secondIndex, 1);
                    mostFavGenres.push(secondelement);
                }
                break;

        }
        line = input.shift();
    }

    console.log(mostFavGenres.join(' '));

}

// solveTwo((["Romance | Fiction | Horror | Mystery",
//     "Drop Romance",
//     "Join Fantasy",
//     "Prefer 1 2",
//     "Stop!"]));
// console.log('-------');
// solveTwo((["Thriller | Young | Crime",
//     "Join Political",
//     "Replace Young Fairytale",
//     "Prefer 6 2",
//     "Stop!"]));