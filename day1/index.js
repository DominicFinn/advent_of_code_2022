const fs = require('fs');


const file = fs.readFileSync('day1/input.txt').toString('utf8');
const elvesCalories = file.split('\n');

const elves = {};

const isNumber = (value) => {
    return typeof value === 'number' && isFinite(value)
}

let elfPointer = 0;


for (let index = 0; index < elvesCalories.length; index++) {
    const calorie = elvesCalories[index];
    
    // if no elf at pointer
    if (!elves[elfPointer]) {
        elves[elfPointer] = 0
    }

    const tryParse = parseInt(calorie)

    // if a number is present, add it to the elf at the current pointer.
    if (isNumber(tryParse)) {
        elves[elfPointer] = elves[elfPointer] + tryParse
    } else {
        elfPointer++;
    }
}

// order elves by key by highest value
const ordered = Object.keys(elves).map(elf => [elf, elves[elf]]).sort((elf1, elf2) => elf1[1] - elf2[1]);

// take the first elf
const first = ordered[ordered.length - 1][1];
const second = ordered[ordered.length - 2][1];
const third = ordered[ordered.length - 3][1];


const topThreeElves = first + second + third

console.log(`Number of elves: ${Object.keys(elves).length}`)
console.log(`Elf with most calories is ${first}`)
console.log(`The top 3 elves total calories are ${topThreeElves}`)
