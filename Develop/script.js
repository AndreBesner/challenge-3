// Assignment code here


// Variables for password criteria
var passLength = 0 ;
var includeLower ;
var includeUpper ;
var includeNumber;
var includeSpecial ;
var numberOfSelections = 0 ;
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
// lowercase?
function findLower(){
  includeLower = prompt("Would you like your password to include lowercaser characters?")
  if(includeLower == "no"){
    includeLower = false ;
  }
  else if(includeLower == "yes"){
    includeLower= true ;
    numberOfSelections++;
  }
  else{
    window.alert("Please try again with a simple yes or no");
    findLower();
  }
}
// uppercase?
function findUpper(){
  includeUpper = prompt("Would you like your password to include uppercase characters?")
  if(includeUpper == "no"){
    includeUpper = false ;
  }
  else if(includeUpper == "yes"){
    includeUpper= true ;
    numberOfSelections++;
  }
  else{
    window.alert("Please try again with a simple yes or no");
    findUpper();
  }
}
// include numbers?
function findNumber(){
  includeNumber = prompt("Would you like your password to include lowercaser characters")
  if(includeNumber == "no"){
    includeNumber = false ;
  }
  else if(includeNumber == "yes"){
    includeNumber= true ;
    numberOfSelections++;
  }
  else{
    window.alert("Please try again with a simple yes or no");
    findNumber();
  }
}
// include special characters?
function findSpecial(){
  includeSpecial = prompt("Would you like your password to include lowercaser characters")
  if(includeSpecial == "no"){
    includeSpecial = false ;
  }
  else if(includeSpecial == "yes"){
    includeSpecial= true ;
    numberOfSelections++;
  }
  else{
    window.alert("Please try again with a simple yes or no");
    findSpecial();
  }
}



// The actual function call that invokes when user pushes red button
function passwordCriteria(){
  findLength();
  findLower();
  findUpper();
  findNumber();
  findSpecial();
  // this ensures the user selected at least one character type to build array with
  if(numberOfSelections < 1){
    window.alert("You need to make at least one selection, this is just an empty password!");
    passwordCriteria();
  }
}

// hard coded arrays for the range of values to try and make my life easier
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "^", "&"];
var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var randomNumber; // declaring this variable in order to have a little int to hold random array index 
var workingCharacters; //this will be the actual character set the password is generated from





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
