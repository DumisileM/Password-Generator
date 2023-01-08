// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var userResponse = {};
  // ask user for length of password.
  while(true){
    var passwordLength =parseInt(prompt("How long do you want your password to be? \n Must be at least 10 characters but no more than 64 characters."));
    
    
    if (passwordLength >=10 && passwordLength <= 64 && Number.isInteger(passwordLength)){
          userResponse['length']= passwordLength;
          
          break;
      } else {
        alert("Invalid input. Please enter a numerical value between 10-64");
      };
    

  };
  
  //ask if they want any uppercase?
  var wantUppercase= confirm("Do you want any uppercase letters in your password? \n Press OK if you DO and Cancel if you do not.");
  userResponse["uppercase"] = wantUppercase;

  //ask if they want any lowercase?
  var wantLowercase= confirm("Do you want any lowercase letters in your password? \n Press OK if you DO and Cancel if you do not.");
  userResponse["lowercase"] = wantLowercase;
  //ask if they want any numeric values?
  var wantNumeric= confirm("Do you want any numeric digits in your password? \n Press OK if you DO and Cancel if you do not.");
  userResponse["numeric"] = wantNumeric;
  //ask if they want any special characters?
  var wantSpecialChar= confirm("Do you want any special characters in your password? \n Press OK if you DO and Cancel if you do not.");
  userResponse["specialChars"] = wantSpecialChar;

  console.log(userResponse)
  return userResponse
}
getPasswordOptions()
// Function for getting a random element from an array
function getRandom(arr) {


}

// Function to generate password with user input
function generatePassword() {
  //when user makes a selection use map with get random

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);