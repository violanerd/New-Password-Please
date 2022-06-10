// Assignment code here

//an empty object to be added to
var passwordInfo = {
}
//functions to add to the passswordInfo object
var passwordLength = function () { 
  var num = window.prompt("How long would you like your password to be? Anywhere from 8 to 128 characters.");
  if (num < 8 || num > 128) {
    window.alert("Please choose an appropriate length password");
    generatePassword();
  } 
  else {
    window.alert("Great! Your password will be " + num + " characters long. Let's make some more choices about your password.");
  } 
  return num;
}

//generate the password
function generatePassword () {
  passwordInfo.length = passwordLength();
  console.log(passwordInfo);
}

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
