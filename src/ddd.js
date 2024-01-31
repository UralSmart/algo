function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const item = arr[i]

        if (item < min) {
            min = item;
        } else if (item > max) {
            max = item;
        }
    }

    return { min, max };
}


const numbers = [5, 1, 3, 412, 12, 512];
const result = findMinMax(numbers);

console.log(`Минимальное значение: ${result.min}`);
console.log(`Максимальное значение: ${result.max}`);