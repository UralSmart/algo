// First method
function findLongestWordLength(str) {
    let maxVal = 0;
    const wordArr = str.split(' ');

    for(let i = 0; i < wordArr.length; i++) {
        let word = wordArr[i];
        if(word.length > maxVal) {
            maxVal = word.length;
        }
    }
    return maxVal;
}

// Second method
function findLongestWordLength2(str) {
    let maxVal = 0;
    const wordArr = str.split(' ');

    for(let i = 0; i < wordArr.length; i++) {
        let word = wordArr[i];
        if(word.length > maxVal) {
            maxVal = word.length;
        }
    }
    return maxVal;
}

// Third method
function findLongestWordLength3(str) {
    const arrOfWords = str.split(' ');
    const arrOfLengths = arrOfWords.map(element => element.length);

    return Math.max(...arrOfLengths);
}

console.log(findLongestWordLength('Let America great again!'));
console.log(findLongestWordLength2('Let America great again!'))
console.log(findLongestWordLength3('Let America great again!'))