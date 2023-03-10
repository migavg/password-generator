// Assignment Code
var generateBtn = document.querySelector("#generate");

// object referencing the character set the user can choose from 
var characterSet = {
  upperChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerChar: "abcdefghijklmnopqrstuvwxyz",
  specialChar: "!@#$%^&*()_+-=[]{};:'<>?",
  numericChar: 0123456789
}
// blank variables that should get populated with whatever value the user uses 
var customGeneratedPassword = "";
var userInputLength = 8;

// this function prompts a box asking user to input how many characters theyd like in their password 
function promptLength() {

  var passwordLength = prompt("How many characters would you like in your password?");
  console.log(passwordLength);

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a number between 8-128.");
    promptLength();
  }
  else {
    passwordLength = userInputLength;
    return passwordLength;
  }
}

// this function generates the password length and outputs it into the generated box 

function getPassword() {

  for (var i = 0; i < userInputLength; i++) {
    var randomNumber = Math.floor(Math.random() * characterSet.upperChar.length);
    customGeneratedPassword += characterSet.upperChar.substring(randomNumber, randomNumber + 1);
  }
  console.log(customGeneratedPassword);
  return customGeneratedPassword;
}


function generatePassword() {

  var passwordLength = promptLength();
  var password = getPassword(passwordLength);
  return password;

  // var specialChar = confirm("Click OK to confirm including special characters.");
  // console.log(specialChar);

  // var numericChar = confirm("Click OK to confirm including numeric characters.");
  // console.log(numericChar);

  // var lowerChar = confirm("Click OK to confirm including lower case characters");
  // console.log(lowerChar);

  // var upperChar = confirm("Click OK to confirm including UPPER case characters");
  // console.log(upperChar);

}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

