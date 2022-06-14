// Assignment code here

//an empty object to be added to
var passwordInfo = {
  // will add password length
  // will add password character preferences 
}

// Variable to hold string to create password from
var passList = '';
// Arrays to create Password
var upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialList = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ";", "?"];
var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//FUNCTIONS TO ADD TO THE PASSWORDINFO OBJECT

// function to get passwordinfo length
var passwordLength = function () { 
  var num = window.prompt("How long would you like your password to be? Anywhere from 8 to 128 characters.");
  var checkIfNum = parseInt(num);
  if (num === "" || num === null || num < 8 || num > 128 || !checkIfNum) {
    alert("Please choose an appropriate length password");
    passwordLength();
  } else {
    alert("Great! Your password will be " + num + " characters long. Let's pick characters to add to your password.");
  } 
  return num;
} 

// functions to get which characters to add to the password
var passwordUpper = function () {
  var upper = window.confirm("Would you like to use uppercase letters?");
  if (upper) {
    alert("Great, your password will have uppercase letters.");
    passwordInfo.upper = true;
    for (var i=0; i < passwordInfo.length; i++) (
      passList += (upperList[randomNumber(upperList)])
    )
  } else {
    alert("Ok, no uppercase.");
    passwordInfo.upper = false;
  }
}
var passwordLower = function () {
  var lower = window.confirm("Would you like to use lowercase letters?");
  if (lower) {
    alert("Great, your password will have lowercase letters.");
    passwordInfo.lower = true;
    for (var i=0; i < passwordInfo.length; i++) (
      passList += (lowerList[randomNumber(lowerList)])
    )
  } else {
    alert("Ok, no lowercase.");
    passwordInfo.lower = false;
  }
}
var passwordNumeric = function () {
  var numeric = window.confirm("Would you like to use numeric characters?");
  if (numeric) {
    alert("Great, your password will have numbers.");
    passwordInfo.numeric = true;
    for (var i=0; i < passwordInfo.length; i++) (
      passList += (numList[randomNumber(numList)])
    )
  } else {
    alert("Ok, no numbers.");
    passwordInfo.numeric = false;
  }
}
var passwordSpecial = function () {
  var special = window.confirm("Would you like to use special characters?");
  if (special) {
    alert("Great, your password will have special characters.");
    passwordInfo.special = true;
    for (var i=0; i < passwordInfo.length; i++) (
      passList += (specialList[randomNumber(specialList)])
    )
  } else {
    alert("Ok, no special characters.");
    passwordInfo.special = false;
  }
}

// function to check if at least one character preference is selected
var pickCharacters = function () {
  passwordUpper();
  passwordLower();
  passwordNumeric();
  passwordSpecial();
  if (passwordInfo.upper === false && passwordInfo.lower === false && passwordInfo.numeric === false && passwordInfo.special === false) {
    alert("You must pick at least one character: upper, lower, numeric or special.");
    pickCharacters();
  }
  else {
    window.alert("Let's generate that password!");
  }
}  
  
// random number generator
var randomNumber = function(list) {
  var value = Math.floor(Math.random() * (list.length));
  return value;
};

//generate the password
function generatePassword () {
  passwordInfo.length = passwordLength(); // gets the password length
  pickCharacters (); //adds the character choices to the passwordInfo object && generates the passList
  var passDone = ""; //holds the password

  // Randomly select from passList to generate password
  
  // Variables to hold half of passList to increase randomness
  var firstHalfPassList = passList.slice(0, passList.length/2);
  var secondHalfPassList = passList.slice(passList.length/2, passList.length -1);
  
  var random = true; // variable to switch between halves of passList
  for (var i = 0; i < passwordInfo.length; i++) { //loop through list to get the password!
    if (random) {
      passDone += firstHalfPassList.charAt(Math.floor(Math.random() * firstHalfPassList.length));
      random = false;
    } else {
      passDone += secondHalfPassList.charAt(Math.floor(Math.random() * secondHalfPassList.length));
      random = true;
    }
  }
  passList = ""; // clear the string to generate a new password if desired
  return passDone;
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
