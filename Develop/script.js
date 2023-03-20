// Assignment code here

// Variables for password criteria
var passLength = 0 ; // length for password
var includeLower ; // boolean value for uppercase being true, the next several variables follow same pattern
var includeUpper ;
var includeNumber;
var includeSpecial ;
var numberOfSelections = 0 ; // check user input to ensure they have selected at least one char type
var workingCharacters = ""; // this will be the actual character set the password is generated from
var alphabetLower = "abcdefghijklmnopqrstuvwxyz" ; // character sets to generate password from I tried to use ones most programs seems to accept
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var numberList = "0123456789" ;
var specialCharacterList = "!@#$%&<>/?[]{}|" ;
// length parameter for password
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
  includeLower = prompt("Would you like your password to include lowercase characters?", "yes/no");
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
  includeUpper = prompt("Would you like your password to include uppercase characters?", "yes/no");
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
  includeNumber = prompt("Would you like your password to include numbers?", "yes/no");
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
  includeSpecial = prompt("Would you like your password to include special characters?", "yes/no");
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
// This actually puts together the lists of characters the user selected with previous logic
function buildList(){
  if(includeLower){
    workingCharacters += alphabetLower ;
  }
  if(includeUpper){
    workingCharacters += alphabetUpper;
  }
  if(includeNumber){
    workingCharacters += numberList ;
  }
  if(includeSpecial){
    workingCharacters += specialCharacterList ;
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
  buildList();
  window.alert(workingCharacters);                                                                    // debug to be removed before prod
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
