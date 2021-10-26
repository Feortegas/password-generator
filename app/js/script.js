// Assignment code here
generatePassword = function() {
  var password = "";
  
  // ask for user inputs
  passwordCriteria.length = getPasswordLength();
  passwordCriteria.hasNumbers = getHasNumbers();
  passwordCriteria.hasLowercase = getHasLowercase();
  passwordCriteria.hasUppercase = getHasUppercase();
  passwordCriteria.hasSpecialChars = getHasSpecialChars();

  // reset the str to empty just in case
  var str = "";

  // if true, add all possible number characters
  if (passwordCriteria.hasNumbers) {
    str = str + "0123456789";
  }

  // if true, add all possible lowercase characters
  if (passwordCriteria.hasLowercase) {
    str = str + "abcdefghijklmnopqrstuvwxyz";
  }

  // if true, add all possible uppercase characters
  if (passwordCriteria.hasUppercase) {
    str = str + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // if true, add all possible special characters
  if (passwordCriteria.hasSpecialChars) {
    str = str + "!@#$%^&*?";
  }

  // loops as many times as the defined password length
  // select the ramdom character and adds it to the password variable
  for (let index = 0; index < passwordCriteria.length; index++) {
    var char = Math.floor(Math.random() * str.length + 1);

    password = password + str.charAt(char);
  }
  // returns the password value to be writen in the textarea.
  return password;
  
}

// ask for user input - password length
var getPasswordLength = function() {
  var length = 0;
  while (length < 8 || length > 128) {
    length = prompt("What's the Passowrd Lenght - enter a number between 8 and 128.");
  }
  return length;
};

// ask for user input - if it has numbers on it
var getHasNumbers = function() {
  var hasNumbers = false;
  hasNumbers = confirm("Does the Password include Numbers?");
  return hasNumbers;
};

// ask for user input - if it has lowercase characters on it
var getHasLowercase = function() {
  var hasLowercase = false;
  hasLowercase = confirm("Does the Password include Lowercase Letters?");
  return hasLowercase;
};

// ask for user input - if it has uppercase characters on it
var getHasUppercase = function() {
  var hasUppercase = false;
  hasUppercase = confirm("Does the Password include Uppercase Letters?");
  return hasUppercase;
};

// ask for user input - if it has special characters on it
var getHasSpecialChars = function() {
  var hasSpecialChars = false;
  hasSpecialChars = confirm("Does the Password include Special Characteres?");
  return hasSpecialChars;
};

// global variables
var passwordCriteria = {
  length : "",
  hasNumbers: "",
  hasLowercase: "",
  hasUppercase: "",
  hasSpecialChars: ""
};

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