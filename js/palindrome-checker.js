function palindrome(str) {
    var strInv = str.match(/[a-z0-9]/ig).reverse().join('').toLowerCase();
    str = str.match(/[a-z0-9]/ig).join('').toLowerCase();
    let isPalindrome = strInv === str;
    console.log("Input string: " + str);
    console.log("Output string: " + strInv);
    console.log("Is a palindrome? " + isPalindrome + "\n\n");
    return isPalindrome;
  }

palindrome("my eye"); // should return true.
palindrome("eye"); // should return true.
palindrome("_eye"); // should return true.
palindrome("race car"); // should return true.
palindrome("not a palindrome"); // should return false.
palindrome("A man, a plan, a canal. Panama"); // should return true.
palindrome("never odd or even"); // should return true.
palindrome("nope"); // should return false.
palindrome("almostomla"); // should return false.
palindrome("My age is 0, 0 si ega ym."); // should return true.
palindrome("1 eye for of 1 eye."); // should return false.
palindrome("0_0 (: /-\ :) 0-0"); // should return true.
palindrome("five|\_/|four"); // should return false.