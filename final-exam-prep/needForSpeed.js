function needForSpeed(input) {

    let numberOfCars = Number(input.shift());
    let cars = {};

    for (let i = 0; i < numberOfCars; i++) {
        let [model, mileage, fuel] = input.shift().split('|');

        cars[model] = {
            mileage,
            fuel,
        }
    }
    let line = input.shift();

    while (line !== "Stop") {
        let commandLine = line.split(" : ");
        let command = commandLine.shift();

        if (command === 'Drive') {
            let car = commandLine[0];
            let distance = Number(commandLine[1]);
            let fuel = Number(commandLine[2]);

            if (cars[car].fuel > fuel) {
                cars[car].mileage = Number(cars[car].mileage) + distance;
                cars[car].fuel = Number(cars[car].fuel) - fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            } else {
                console.log('Not enough fuel to make that ride');
            }


            if (cars[car].mileage >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete cars[car];
            }
        }

        if (command === 'Refuel') {
            let car = commandLine[0];
            let fuel = Number(commandLine[1]);


            if (cars[car].fuel = Number(cars[car].fuel) + fuel >= 75) {
                console.log(`${car} refueled with ${Number(cars[car].fuel)} liters`);
                cars[car].fuel = 75;
            } else {
                cars[car].fuel = cars[car].fuel + fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            }

        }

        if (command === "Revert") {
            let car = commandLine[0];
            let distance = Number(commandLine[1]);

            cars[car].mileage = Number(cars[car].mileage) - distance;

            if (cars[car].mileage <= 10000) {
                cars[car].mileage = 10000;
            } else {
                console.log(`${car} mileage decreased by ${distance} kilometers`);
            }

        }

        line = input.shift();
    }

    for (const [car, current] of Object.entries(cars)) {
        console.log(`${car} -> Mileage: ${current.mileage} kms, Fuel in the tank: ${current.fuel} lt.`);
    }


}