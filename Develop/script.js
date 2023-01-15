// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  var passwordLength = Number(prompt("How many characters would you like in your password?" ));
  console.log(passwordLength);

  var specialChar = confirm("Click OK to confirm including special characters.");
  console.log(specialChar);

  var numericChar = confirm("Click OK to confirm including numeric characters.");
  console.log(numericChar);

  var lowerChar = confirm("Click OK to confirm including lower case characters");
  console.log(lowerChar);

  var upperChar = confirm("Click OK to confirm including UPPER case characters");
  console.log(upperChar);

}



// Write password to the #password input
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

