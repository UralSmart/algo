// First method
function largestOfFour(arr) {
    const arrayOfMaxValues = [];
    for(let i = 0; i < arr.length; i++) {
        let subArr = arr[i];
        let maxSubArrVal = 0;
        for(let j = 0; j < subArr.length; j++) {
            if(subArr[j] > maxSubArrVal) {
                maxSubArrVal = subArr[j];
            }
        }
        arrayOfMaxValues.push(maxSubArrVal);
    }
    return arrayOfMaxValues;
}

console.log(largestOfFour([[1, 2, 3, 4], [5, 18, 0, 12], [3, 5, 12, 5], [28, 9, 12, 34]]));

// Second method
function largestOfFour2(arr) {
    let arrayOfMaxValues = [];
    arr.forEach(subArr => {
        let maxSubArrVal = 0;
        subArr.forEach(element => {
            if(element > maxSubArrVal) {
                maxSubArrVal = element;
            }
        })
        arrayOfMaxValues.push(maxSubArrVal);
    })
    return arrayOfMaxValues;
}

console.log(largestOfFour2([[1, 2, 3, 4], [5, 18, 0, 12], [3, 5, 12, 5], [28, 9, 12, 34]]));

// Third method
function largestOfFour3(arr) {
    return arr.map(subArr => Math.max(...subArr));
}

console.log(largestOfFour3([[1, 2, 3, 4], [5, 18, 0, 12], [3, 5, 12, 5], [28, 9, 12, 34]]));
