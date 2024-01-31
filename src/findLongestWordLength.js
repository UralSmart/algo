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


console.log(findLongestWordLength('Mama mila fg 4 ;aerhgiar'));