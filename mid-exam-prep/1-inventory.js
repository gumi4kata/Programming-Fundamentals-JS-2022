function inventory(input) {

    let jurnalItems = input.shift().split(', ');
    let line = input.shift();

    while (line !== 'Craft!') {
        let items = line.split(' - ');
        let command = items[0];
        let item = items[1];

        if (command === 'Collect') {
            if (!jurnalItems.includes(item)) {
                jurnalItems.push(item);
            }
        }
        if (command === 'Drop') {
            if (jurnalItems.includes(item)) {
                for (let i = 0; i < jurnalItems.length; i++) {
                    if (item === jurnalItems[i]) {
                        jurnalItems.splice(i, 1);
                        break;
                    }
                }
            }
        }
        if (command === 'Combine Items') {

            let splitted = item.split(':');
            let oldItem = splitted[0];
            let newItem = splitted[1];

            if (jurnalItems.includes(oldItem)) {

                for (let i = 0; i < jurnalItems.length; i++) {
                    if (oldItem === jurnalItems[i]) {
                        jurnalItems.splice(i + 1, 0, newItem);
                        break;
                    }
                }
            }
        }

        if (command === 'Renew') {
            if (jurnalItems.includes(item)) {
                let itemIndex = jurnalItems.indexOf(item);
                jurnalItems.splice(itemIndex, 1);
                jurnalItems.push(item);
            }
        }

        line = input.shift();

    }

    console.log(jurnalItems.join(', '));
}

// inventory([
//     'Iron, Wood, Sword',
//     'Collect - Gold', 'Collect - Iron',
//     'Drop - Wood', 'Renew - Wood',
//     'Craft!']);

// console.log('-------------');

// inventory([
//     'Iron, Sword',
//     'Drop - Bronze',
//     'Combine Items - Sword:Bow',
//     'Renew - Iron',
//     'Craft!']);