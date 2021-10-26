// Assignment code here
generatePassword = function() {
  var password = "";
  
  // ask for user input
  passwordCriteria.length = getPasswordLength();
  passwordCriteria.hasNumbers = getHasNumbers();
  passwordCriteria.hasLowercase = getHasLowercase();
  passwordCriteria.hasUppercase = getHasUppercase();
  passwordCriteria.hasSpecialChars = getHasSpecialChars();

  var str = "";

  if (passwordCriteria.hasNumbers) {
    str = str + "0123456789";
  }

  if (passwordCriteria.hasLowercase) {
    str = str + "abcdefghijklmnopqrstuvwxyz";
  }

  if (passwordCriteria.hasUppercase) {
    str = str + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (passwordCriteria.hasSpecialChars) {
    str = str + "!@#$%^&*?";
  }

  for (let index = 0; index < passwordCriteria.length; index++) {
    var char = Math.floor(Math.random() * str.length + 1);

    password = password + str.charAt(char);
  }
  return password;
  
}

var getPasswordLength = function() {
  var length = 0;
  while (length < 8 || length > 128) {
    length = prompt("What's the Passowrd Lenght - enter a number between 8 and 128.");
  }
  return length;
};

var getHasNumbers = function() {
  var hasNumbers = false;
  hasNumbers = confirm("Does the Password include Numbers?");
  return hasNumbers;
};

var getHasLowercase = function() {
  var hasLowercase = false;
  hasLowercase = confirm("Does the Password include Lowercase Letters?");
  return hasLowercase;
};

var getHasUppercase = function() {
  var hasUppercase = false;
  hasUppercase = confirm("Does the Password include Uppercase Letters?");
  return hasUppercase;
};

var getHasSpecialChars = function() {
  var hasSpecialChars = false;
  hasSpecialChars = confirm("Does the Password include Special Characteres?");
  return hasSpecialChars;
};

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