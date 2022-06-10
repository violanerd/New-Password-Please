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
    window.alert("Great! Your password will be " + num + " characters long. Let's pick characters to add to your password.");
  } 
  return num;
} 

var passwordUpper = function () {
  var upper = window.confirm("Would you like to use uppercase letters?");
  if (upper) {
    window.alert("Great, your password will have uppercase letters.");
    return upper;
  } else {
    window.alert("Ok, no uppercase.");
    return false;
  }
}
var passwordLower = function () {
  var lower = window.confirm("Would you like to use lowercase letters?");
  if (lower) {
    window.alert("Great, your password will have lowercase letters.");
    return lower;
  } else {
    window.alert("Ok, no lowercase.");
    return false;
  }
}
var passwordNumeric = function () {
  var numeric = window.confirm("Would you like to use numeric characters?");
  if (numeric) {
    window.alert("Great, your password will have numbers.");
    return numeric;
  } else {
    window.alert("Ok, no numbers.");
    return false;
  }
}
var passwordSpecial = function () {
  var special = window.confirm("Would you like to use special characters?");
  if (special) {
    window.alert("Great, your password will have special characters.");
    return special;
  } else if (passwordInfo.upper === false && passwordInfo.lower === false && passwordInfo.numeric === false) {
    window.alert("You must pick at least one character: upper, lower, numeric or special.");
    passwordUpper(); //this should be a function that redoes them, look at gladiator robots
  } else {
    window.alert("Ok, no special characters.");
    return false;
  }
}

// Will have to wrap the characters in a function, won't continually call down the list.
// ??How to store the variable?




//generate the password
function generatePassword () {
  passwordInfo.length = passwordLength();
  passwordInfo.upper = passwordUpper();
  passwordInfo.lower = passwordLower();
  passwordInfo.numeric = passwordNumeric();
  passwordInfo.special = passwordSpecial(); 
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
