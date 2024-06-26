function isPalindrome(x) {
    // Convert the integer to a string
    const str = x.toString();
    
    // Iterate through the string from both ends towards the center
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        // If characters at current positions don't match, return false
        if (str[i] !== str[j]) {
            return false;
        }
    }
    // If the loop completes without returning false, it's a palindrome
    return true;
}

// Test cases
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
