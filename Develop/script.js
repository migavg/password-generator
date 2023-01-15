// Assignment Code
var generateBtn = document.querySelector("#generate");

var  userInputs = {

    passwordLengthMin: 8
}

var charTypes ={
  lowerCase: "qwertyuiopasdfghjklzxcvbnm"
}

function promptLength() {{
    
  var passwordLength = prompt("How many characters would you like in your password?" );
  console.log(passwordLength);

  if (passwordLength < 8 || passwordLength >128 || passwordLength.isNAN) {
    
  promptLength();
  alert("Please enter a number between 8-128");
    }
    else {
   passwordLength = userInput.passwordLengthMin;
      return userInputs.passwordLengthMin;
    
    }
}
}


function generatePassword() {
  
  var text= "";
  for (let i = 0; i < userLength.passwordLengthMin; i++){
    text + = charTypes[(Math.floor(Math.random() * charTypes.length))];
  }
  return text;
  

promptLength();  

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

