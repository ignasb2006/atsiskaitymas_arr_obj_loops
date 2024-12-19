'use strict';

/* 1 uzduotis */

const hundredCycle = () => {
    let sum = 0;
    for (let i = 1; i <= 100; i++){
        sum += i;
    }
    return sum;
}

const sum = hundredCycle();

console.log(sum)

/* 2 uzduotis */

const numArray = [52,21,67,44,22];

const getBiggestInArray = (array) => {
    const sortedArray = array.toSorted((a,b) => {
        if (a < b){
            return 1;
        } else if (a > b){
            return -1;
        } else {
            return 0;
        }
    })
    const biggestValue = sortedArray[0];
    return biggestValue
}

const biggestValue = getBiggestInArray(numArray);

console.log(biggestValue);

/* 3 uzduotis */

const car = {
    make: "Toyota",
    model: "Corolla",
    productionYear: 2006
}

const getCarName = (object) => {
    const make = object.make;
    const model = object.model;
    const year = object.productionYear;
    
    const fullName = `${year} ${make} ${model}`;

    return fullName;
}

const carName = getCarName(car);

console.log(carName);