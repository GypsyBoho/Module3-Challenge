// Assignment Code

// var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]

// A more condensed version of the array above
var upperCase = 'ABCDEFRHIJKLMNOPQRSTUVWXYZ'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var numeric = '0123456789'
var specialChar = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ "

// This variable declaration references the HTML element of "generate" //
var generateBtn = document.querySelector("#generate");

generatePassword = () => {
  var passwordText = [];

  var length = prompt("Choose a password length between 8 and 128 characters")
  var legnthParse = parseFloat(length);
  var confirmSpecial = confirm("Would you like to use uppercase characters?")
  var lowerCase = confirm("Would you like to use lowercase characters?")
  var numeric = confirm("Would you like to use numbers?")
  var specialChar = confirm ("Would you like to include special characters?")
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

}

// Pseudo Code
// The user requests to generate a randome password
// The alert prompts the user to chose the number of characters between 8 and 128 characters
// The alert then prompts the user to chose to include or not uppercase characters
// The alert then prompts the user to chose to include or not lowercase characters
// The alert then prompts the user to chose to include or not numeric characters
// The alert then prompts the user to chose to include or not special characters
// The randomized password is then shown in the alert window