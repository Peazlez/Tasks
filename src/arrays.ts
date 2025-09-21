/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    // new array to work with
    let numArray: number[] = [];
    // check for empty array
    if(numbers.length === 0){
        return numArray
    }
    // check for only one element
    else if(numbers.length === 1){
        // add same element into array twice
        numArray.splice(0,0,numbers[0])
        numArray.splice(1,0,numbers[0])
    }
    else {
        // add first and last element
        numArray.splice(0,0,numbers[0])
        numArray.splice(1,0,numbers[numbers.length-1])
    }
    return numArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    // use map method to triple each num in array
    let newArray = numbers.map((price: number): number => price *3);
    return newArray;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    // create new array, run on each element, return new array
    return numbers.map((str: string): number=>{
        // cast int to string
        const parsed = parseInt(str, 10);
        // use isNaN to check if parsed is a number, if not return 0
        return isNaN(parsed) ? 0 : parsed;
    })
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
        return amounts.map((amount: string): number => {
            const noDollar = amount.startsWith('$') ? amount.slice(1) :amount;
            const conversion = Number(noDollar);
            return isNaN(conversion) ? 0 : conversion;
        });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // remove strings ending with '?'
    const noMark = messages.filter((msg: string): boolean => !msg.endsWith("?"));
    //map remaining while converting '!' strings to uppercase
    const final = noMark.map((msg: string): string => msg.endsWith("!") ? msg.toUpperCase() : msg);
    return final
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    // sift through list adding 1 to lessThanWords if a word is less than 4 letters
    let lessThanWords = words.filter((word: string): boolean => word.length < 4) 
    return lessThanWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    // return "true" if array is empty
    if(colors.length === 0){
        return true
    }
    else{
        // checks for 'red' or 'blue' or 'green' and returns true if all elements are one of these three
        let colorCheck = colors.every( (color: string): boolean => color === 'red'|| color === 'blue'|| color ==='green'); 
    return colorCheck
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    // check for empty num array
    if (addends.length === 0){
        return "0=0"
    }
    // acquire total of nums in array
    let sum = addends.reduce((currentTotal: number, num: number) => currentTotal+num, 0);
    // create string of all nums "adding" together
    const addendsStr = addends.join("+")
    // return formatted answer 
    // (Also could use backtick method?  like fstring (return `${sum}=${addendsStr}`))
    return sum + "=" + addendsStr;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // find first element less than 0
    const firstLowValuesIndex = values.findIndex((value: number): boolean => value < 0);
    let total = 0;

    // if negative value is found
    if (firstLowValuesIndex !== -1){
        for (let i = 0 ; i < firstLowValuesIndex ; i++) 
            // add all elements prior to negative element
            total += values[i];
    
    // clone original array
    const result = [...values];
    //splice total into spot after negative value
    result.splice(firstLowValuesIndex +1, 0, total)
    return result;
    }

    // if negative value is not found
    else{
        // add all values in array together
        let sum = values.reduce((currentTotal: number, num: number) => currentTotal + num,0,);
        // add sum to end of array
        const newArray = [...values, sum]
        return newArray
    }
}