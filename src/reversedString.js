// First method
function reverseString(str) {
    let reversedString = '';
    for (let i = str.length; i > 0; i--) {
        reversedString += str.substring(i, i-1);
    }
    return reversedString;
}

// Second method
function reverseString2(str) {
    let reversedString = '';
    for (let i = str.length-1; i >= 0; i--) {
        reversedString += str.charAt(i);
    }
    return reversedString;
}

// Third method
function reverseString3(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Abrau'));
console.log(reverseString2('Abrau'));
console.log(reverseString3('Abrau'));