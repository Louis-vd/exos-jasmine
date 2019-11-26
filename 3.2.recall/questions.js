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
    const newTab = [];
    array.forEach(element => {
        if ((element !== null) && (element !== false) )
        {
            newTab.push(element);
        }
    });
    return newTab;
    
    /*return array.filter(arr => arr !=false)*/
    
}

let reverseWordsInArray = (array) => {
   
   return array.join(" ").split("").reverse().join("").split(" ").reverse()
   
}

let everyPossiblePair = (array) => {
    return array
}

let allElementsExceptFirstThree = (array) => {
    return array.splice(3,5)
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
    return array
}

let shortestWord = (array) => {

    return array.sort(Math.min(...array))
    
    
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

    const double =  array.filter((item,index,self) => self.indexOf(item)==index)
    
    return double.filter (array => array <= 5)
    
}

let convertArrayToObject = (array) => {
    /*const obj = Object.values(array)
    return Object.fromEntries(new Map([obj]))*/
    return array.concat(array)
}

let getAllLetters = (array) => {
    
    const allLetter = array.join('').split('').sort()
    return [...new Set(allLetter)]
}

let swapKeysAndValues = (object) => {
    return Array.prototype.reverse.call(object)
}

let sumKeysAndValues = (object) => {
    return object
}

let removeCapitals = (string) => {
    return string.replace( /[^a-z]/g, '')
}

let roundUp = (number) => {
    return Math.round(number)+1
}

let formatDateNicely = (date) => {
    return new Date(date)
}

let getDomainName = (string) => {
    return string.split('@')[1]
    
}

let titleize = (string) => {
    return string
}

let checkForSpecialCharacters = (string) => {
    return string = !!"false"
}

let squareRoot = (number) => {
    return Math.sqrt(number)
}

let factorial = (number) => {
    
    
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
