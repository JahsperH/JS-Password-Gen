// Assignment Code
var generateBtn = document.querySelector("#generate");
//The character sets for the password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "`", "~"];
var numberChar = ["1","2","3","4","5","6","7","8","9","0"];

function generatePassword(len, up, spec, low, num) {
  var pass = "";
  
  for (var i = 0; i < len; i++) {
    var random = Math.floor(Math.random() * 4);
    switch(random) {
      case 0:
        if(up === true) {
          pass += upperCase[Math.floor(Math.random() * upperCase.length)];
        }
        break;
      case 1:
        if(spec === true) {
          pass += specialChar[Math.floor(Math.random() * specialChar.length)];
        }
        break;
      case 2:
        if(low === true) {
          pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        }
        break;
      case 3:
        if(num === true) {
          pass += numberChar[Math.floor(Math.random() * numberChar.length)];
        }
        break;
      case 4:
        break;
    }
  }
  return pass;
}

// Write password to the #password input
function writePassword() {
  //all of the prompts for the user to input their code
  var userInput = prompt("Choose a character amount between 8-128");
  if(userInput < 8 || userInput > 128) {
    alert("Please choose a number between 8-128");
    return;
  }
  var uprCasePrompt = confirm("Would you like uppercase letters in your password?");
  var spclCharPrompt = confirm("Would you like special characters in your password?");
  var lwrCasePrompt = confirm("Would you like lowercase letters in your password?");
  var numCharPrompt = confirm("Would you like numbers in your password?");
  
  if(uprCasePrompt === false && spclCharPrompt === false && lwrCasePrompt === false && numCharPrompt === false) {
    alert("Please choose at least one option");
    return;
  }
  var password = generatePassword(userInput, uprCasePrompt, spclCharPrompt, lwrCasePrompt, numCharPrompt);

  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
