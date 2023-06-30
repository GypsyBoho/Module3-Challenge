// Assignment Code

// var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]

// A more condensed version of the array above
var upperCase = 'ABCDEFRHIJKLMNOPQRSTUVWXYZ'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var numeric = '0123456789'
var specialChar = "\"\ !#$%&'()*+,-./:;<=>?@[]^_`{|}~ "

// This variable declaration references the HTML element of "generate" //
var generateBtn = document.querySelector("#generate");

// Phase One - gathering info, asking the user
generatePassword = () => {
  var passwordResult = [];
  var length = prompt("Choose a password length between 8 and 128 characters")
  
  if (length < 8 || length > 128) {
    alert("Your password must be between 8 and 128 characters")
  } else {
    var upperCasePrompt = confirm("Would you like to use uppercase characters")
    var lowerCasePrompt = confirm("Would you like to use lowercase characters?")
    var numericPrompt = confirm("Would you like to use numbers?")
    var specialCharPrompt = confirm("Would you like to include special characters?")
  }
  
  // if (length < 8 && length > 128) {
  // } else {
  //   alert("Your password must be between 8 and 128 characters")
  // }

// All are true or false values and since they are true by default they don't need the == //
  if (upperCasePrompt) {
    for (var i = 0; i <= upperCase.length; ++i) {
      passwordText.push((Math.floor(Math.random() * password.Text.upperCase)))
    }
  }

  if (lowerCasePrompt) {
    for (var i = 0; i <= lowerCase.length; ++i) {
      passwordText.push((Math.floor(Math.random() * password.Text.lowerCase)))
    }
  }

  if (numericPrompt) {
    for (var i = 0; i < passwordResult.length; ++i) {
      passwordText.push((Math.floor(Math.random() * passwordText.numeric)))
    }
  }

  if (specialCharPrompt) {
    for (var i = 0; i < passwordResult.length; ++i) {
      passwordText.push((Math.floor(Math.random() * passwordText.legth)))
    }
  }

}
// Phase 2 - building the password //

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