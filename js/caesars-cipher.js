function rot13(str) {
    var strCipher = str.split("").map(char => {
        var codeChar = char.charCodeAt(0);
        if (codeChar < 65 || codeChar > 90) {
            return String.fromCharCode(codeChar);
        } else if (codeChar < 78) {
            return String.fromCharCode(codeChar + 13);
        } else {
            return String.fromCharCode(codeChar - 13);
        }
    }).join("");
    console.log(str);
    console.log(strCipher);
    return strCipher;
}
  
rot13("SERR PBQR PNZC"); // should decode to FREE CODE CAMP
rot13("SERR CVMMN!"); // should decode to FREE PIZZA!
rot13("SERR YBIR?"); // should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.