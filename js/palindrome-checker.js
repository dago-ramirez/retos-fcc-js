document.addEventListener("DOMContentLoaded", event => {
  let inputStr = document.querySelector('.input-str');
  let modalCheckerMessage = document.querySelector('.modal-checker-message');
  document.querySelector('.send-button1').addEventListener('click', event => {
    let strInv = inputStr.value.match(/[a-z0-9]/ig).reverse().join('').toLowerCase();
    let str = inputStr.value.match(/[a-z0-9]/ig).join('').toLowerCase();
    if (str === strInv) {
      modalCheckerMessage.innerHTML = `"${inputStr.value}" is a palindrome`;
      inputStr.value = '';
    } else {
      modalCheckerMessage.innerHTML = `"${inputStr.value}" is a not palindrome`;
      inputStr.value = '';
    }    
  });
});