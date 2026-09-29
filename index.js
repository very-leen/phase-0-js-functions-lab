function calculateTax(amount){
    const interest = 10/100 * amount;
    return interest;
};

function convertToUpperCase(text){
    const newText = text.toUpperCase();
    return newText;
}

function findMaximum(num1, num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}

function isPalindrome(word){
    let palindrome = word.split('').reverse().join('');
    if (palindrome == word){
        return true;
    }else{
        return false
    }
};

function calculateDiscountedPrice(originalPrice, discountPercentage){
    const discount = discountPercentage/100 * originalPrice;
    return originalPrice - discount;
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };