function heroes(input) {

    let numberOfHeros = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < numberOfHeros; i++) {
        let line = input.shift();
        let lineArr = line.split(' ');
        let heroName = lineArr[0];
        let hitPoint = lineArr[1];
        let manaPoints = lineArr[2];

        heroes[heroName] = {
            hitPoint,
            manaPoints,
        }
    }

    let line = input.shift();

    while (line !== 'End') {
        let commandLine = line.split(' - ');
        let command = commandLine[0];


        switch (command) {
            case 'CastSpell':
                let heroName = commandLine[1];
                let manaPoints = Number(commandLine[2]);
                let spellName = commandLine[3];
                if (heroes[heroName].manaPoints >= manaPoints) {
                    heroes[heroName].manaPoints -= manaPoints;

                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].manaPoints} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;

            case 'TakeDamage':
                let damagedHero = commandLine[1];
                let damagePoints = Number(commandLine[2]);
                let attacker = commandLine[3];

                let reducedHP = heroes[damagedHero].hitPoint - damagePoints;

                if (reducedHP > 0) {
                    heroes[damagedHero].hitPoint -= damagePoints;
                    console.log(`${damagedHero} was hit for ${damagePoints} HP by ${attacker} and now has ${heroes[damagedHero].hitPoint} HP left!`);
                } else {
                    console.log(`${damagedHero} has been killed by ${attacker}!`);
                    delete heroes[damagedHero];
                }

                break;

            case 'Heal':
                let healedHero = commandLine[1];
                let healedPoints = Number(commandLine[2]);

                let amountRecovered = Number(heroes[healedHero].hitPoint) + healedPoints;

                if (amountRecovered > 100) {
                    console.log(`${healedHero} healed for ${100 - heroes[healedHero].hitPoint} HP!`);
                    heroes[healedHero].hitPoint = 100;
                } else {
                    heroes[healedHero].hitPoint = amountRecovered;
                    console.log(`${healedHero} healed for ${healedPoints} HP!`);
                }

                break;

            case 'Recharge':
                let rechargedHero = commandLine[1];
                let rechargedAmount = Number(commandLine[2]);

                let increadedMana = Number(heroes[rechargedHero].manaPoints) + rechargedAmount;

                if (increadedMana > 200) {
                    console.log(`${rechargedHero} recharged for ${Math.abs(200 - Number(heroes[rechargedHero].manaPoints))} MP!`);
                    heroes[rechargedHero].manaPoints = 200;
                } else {
                    heroes[rechargedHero].manaPoints = increadedMana;
                    console.log(`${rechargedHero} recharged for ${rechargedAmount} MP!`);
                }

                break;

        }
        line = input.shift();
    }

    for (const [hero, current] of Object.entries(heroes)) {
        console.log(`${hero} \n HP: ${current.hitPoint} \n MP: ${current.manaPoints}`);
    }

}