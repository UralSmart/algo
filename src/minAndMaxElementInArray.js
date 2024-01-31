function minAndMaxElementInArray(arr) {
    let min = arr[0];
    let max = arr[0];
    const result = [];
    for(const el of arr) {
        if(el > max) {
            max = el;
        }
        if(el < min) {
            min = el;
        }
    }
    return { min, max };
}

console.log(minAndMaxElementInArray([67565534, 23, 3432, 428, 9, 12, 34]));