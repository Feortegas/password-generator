// Assignment code here
generatePassword = function() {
  
  // ask user for passwor lenght - it must be between 8 and 128 chars.
  var passwordLength = window.prompt("What's the Passowrd Lenght - enter a number between 8 and 128.");
  
  // check password length
  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password Length must be between 8 and 128, try again.");
    passwordLength = window.prompt("What's the Passowrd Lenght - enter a number between 8 and 128.");
  }
  
}

//password character type confirm input
// var passwordWithNumbers = window.confirm("Does the Password include Numbers?");
// var passwordWithLowercaseLetters = window.confirm("Does the Password include Lowercase Letters?");
// var passwordWithUppercaseLetters = window.confirm("Does the Password include Uppercase Letters?");
// var passwordWithSpecialChars = window.confirm("Does the Password include Special Characteres?");
// console.log("Numbers: "+ passwordWithNumbers + " Uppercase: " + passwordWithUppercaseLetters + " Lowercase " + passwordWithLowercaseLetters + " Special Chars: " + passwordWithSpecialChars);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);