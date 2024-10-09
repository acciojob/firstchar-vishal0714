function firstChar(text) {
    // Iterate through each character in the string
    for (let char of text) {
        // Return the first non-space character
        if (char !== ' ') {
            return char;
        }
    }
    // If no non-space character is found, return an empty string
    return '';
}

// Test cases
console.log(firstChar(' Rosa Parks '));  // Output: 'R'
console.log(firstChar(' Hello World '));  // Output: 'H'
console.log(firstChar(' '));  // Output: ''
console.log(firstChar(''));  // Output: ''

// Do not change the code below
// Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
alert(firstChar(text));
