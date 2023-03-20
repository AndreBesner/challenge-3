// Assignment code here


// Variables for password criteria
var makePassword ;
var passLength = 0 ;
var characterTypes  ;
var includeSpecial  ;

// functions to call user input to fill password criteria parameters

// length param
function findLength(){
  passLength = prompt("Please enter password length", "8 -> 128");
  if(passLength < 8 || passLength > 128){
    window.alert("Please try again with a number between 8 and 128");
    findLength();
  }
  else if(isNaN(passLength)){
    window.alert("Not a number");
    findLength();
  }
}
// numbers and letters?
function findCharType(){
  characterTypes = prompt("Would you like to include numbers in addition to letters?", "yes/no");
  if(characterTypes == "yes"){
    characterTypes = true;
  }
  else if(characterTypes == "no"){
    characterTypes = false;
  }
  else{
    window.alert("Please try again with a simple yes or no");
    findCharType();
  }
}
// include special characters?
function findSpecial(){
  includeSpecial = prompt("Would you like to include special characters and numbers? 0-9, (!@#$%^&)", "yes/no");
  if(includeSpecial == "yes"){
    includeSpecial = true;
  }
  else if(includeSpecial == "no"){
    includeSpecial = false;
  }
  else{
    window.alert("Please try again with a simple yes or no");
    findSpecial();
  }
}

// The actual function call that invokes when user pushes red button
function passwordCriteria(){
  findLength();
  findCharType();
  findSpecial();
}

// hard coded arrays for the range of values to try and make my life easier
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "^", "&"];
var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0];
var randomNumber; // declaring this variable in order to have a little int to hold random array index 


// adding together arrays



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
