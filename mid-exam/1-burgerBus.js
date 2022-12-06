function solve(arr) {

    let numberOfCities = arr.shift();
    let totalIncome = 0;

    for (let i = 1; i <= numberOfCities; i++) {
        let cityName = arr.shift();
        let currentIncome = Number(arr.shift());
        let currentExpences = Number(arr.shift());

        if (i % 3 === 0) {
            currentExpences *= 1.5;
        } else {
            currentExpences = currentExpences;
        }

        if (i % 5 === 0) {
            currentIncome = currentIncome - (currentIncome * 0.1);
        } else {
            currentIncome = currentIncome;
        }

        let profit = currentIncome - currentExpences;

        console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`);

        totalIncome += profit;

    }

    console.log(`Burger Bus total profit: ${totalIncome.toFixed(2)} leva.`);

} 
// solve(["3", "Sofia", "895.67", "213.50", "Plovdiv", "2563.20", "890.26", "Burgas", "2360.55", "600.00"]);
// console.log("----");
// solve(["5", "Lille", "2226.00", "1200.60", "Rennes", "6320.60", "5460.20", "Reims", "600.20", "452.32", "Bordeaux", "6925.30", "2650.40", "Montpellier", "680.50", "290.20"]);
// console.log('-----');
// solve(["1", "Svishtov", "300", "400"])