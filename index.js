const userInput = prompt("Enter your froyo flavors separated by commas: ");

const flavorsArray = userInput.split(",").map(flavor => flavor.trim().toLowerCase());

function countFlavors(flavors) {
    let flavorCount = {};
    for (let flavor of flavors) {
        flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
    }
    return flavorCount;
}

const flavorCounts = countFlavors(flavorsArray);

console.log("Froyo Order Summary:", flavorCounts);
