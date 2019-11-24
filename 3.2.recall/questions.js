let selectElementsStartingWithA = (array) => {
    let startWith = array.filter((array) => array.startsWith("a"));
    return startWith
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(str => /^[aeiou]/i.test(str));
}

let removeNullElements = (array) => {
    return array.filter(array=> array != null);
    
}

let removeNullAndFalseElements = (array) => {
    /*return array.filter(function (el) {
        return !!el })*/

}

let reverseWordsInArray = (array) => {
   return array.join().reverse()
    
}

let everyPossiblePair = (array) => {
    return array
}

let allElementsExceptFirstThree = (array) => {
    return 'Write your method here';
}

let addElementToBeginning = (array, element) => {
    array.unshift(element)
    return array
}

let sortByLastLetter = (array) => {
    return array
}

let getFirstHalf = (string) => {
    return string.substr(0,3)
}

let makeNegative = (number) => {
    return -Math.abs(number)
}

let numberOfPalindromes = (array) => {
    return 'Write your method here';
}

let shortestWord = (array) => {
    
}

let longestWord = (array) => {
    return 'Write your method here';
}

let sumNumbers = (array) => {
    return array.reduce((x, y) => x + y)
}

let repeatElements = (array) => {
    return array.join('').repeat(2).split('')
}

let stringToNumber = (string) => {
    return parseInt(string)
}

let calculateAverage = (array) => {
    return array.reduce((a, b) => (a + b)) / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    
}

let convertArrayToObject = (array) => {
    return array
}

let getAllLetters = (array) => {
    return array.sort().join('').split('')
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
