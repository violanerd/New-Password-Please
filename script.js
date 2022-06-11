// Assignment code here

//an empty object to be added to
var passwordInfo = {
}
//Password information
var passList = '';
var upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialList = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ";", "?"];
var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//functions to add to the passswordInfo object
var passwordLength = function () { 
  var num = window.prompt("How long would you like your password to be? Anywhere from 8 to 128 characters.");
  if (num < 8 || num > 128) {
    window.alert("Please choose an appropriate length password");
    generatePassword();
  } else {
    window.alert("Great! Your password will be " + num + " characters long. Let's pick characters to add to your password.");
  } 
  return num;
} 

// functions to get which characters to add to the password
var passwordUpper = function () {
  var upper = window.confirm("Would you like to use uppercase letters?");
  if (upper) {
    window.alert("Great, your password will have uppercase letters.");
    passwordInfo.upper = true;
    passList += (upperList[randomNumber(upperList)]);
  } else {
    window.alert("Ok, no uppercase.");
    passwordInfo.upper = false;
  }
}
var passwordLower = function () {
  var lower = window.confirm("Would you like to use lowercase letters?");
  if (lower) {
    window.alert("Great, your password will have lowercase letters.");
    passwordInfo.lower = true;
    passList += (lowerList[randomNumber(lowerList)]);
  } else {
    window.alert("Ok, no lowercase.");
    passwordInfo.lower = false;
  }
}
var passwordNumeric = function () {
  var numeric = window.confirm("Would you like to use numeric characters?");
  if (numeric) {
    window.alert("Great, your password will have numbers.");
    passwordInfo.numeric = true;
    passList += (numList[randomNumber(numList)]);
  } else {
    window.alert("Ok, no numbers.");
    passwordInfo.numeric = false;
  }
}
var passwordSpecial = function () {
  var special = window.confirm("Would you like to use special characters?");
  if (special) {
    window.alert("Great, your password will have special characters.");
    passwordInfo.special = true;
    passList += (specialList[randomNumber(specialList)]);
  } else {
    window.alert("Ok, no special characters.");
    passwordInfo.special = false;
  }
}

// function to check if at least one character is selected
var pickCharacters = function () {
  passwordUpper();
  passwordLower();
  passwordNumeric();
  passwordSpecial();
  if (passwordInfo.upper === false && passwordInfo.lower === false && passwordInfo.numeric === false && passwordInfo.special === false) {
    window.alert("You must pick at least one character: upper, lower, numeric or special.");
    pickCharacters();
  }
  else {
    window.alert("Let's generate that password!");
  }
}  
  

// random number generator
var randomNumber = function(list) {
  var value = Math.floor(Math.random() * (list.length) + 1);
  return value;
};

//how to get random chars for the length of the password??? 

//generate the password
function generatePassword () {
  passwordInfo.length = passwordLength();
  pickCharacters (); //adds the character choices to the passwordInfo object
  console.log(passwordInfo);
  console.log(passList.length);
  console.log(passwordInfo.length)
  while (passList.length < passwordInfo.length) {
    if (passwordInfo.upper === true){
      passList += (upperList[randomNumber(upperList)]);
    }
  }
  return passList;
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
