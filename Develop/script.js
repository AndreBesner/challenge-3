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
  includeSpecial = prompt("Would you like to include special characters? (!@#$%^&*)", "yes/no");
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
