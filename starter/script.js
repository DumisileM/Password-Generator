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

  console.log(Object.values(userResponse));

  while(Object.values(userResponse).includes(true)==false){
       
       
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
      var wantSpecialChar= confirm("Do you want any special characters($@%&*, etc) in your password? \n Press OK if you DO and Cancel if you do not.");
      userResponse["specialChars"] = wantSpecialChar;
      console.log(Object.values(userResponse).includes())
      if( Object.values(userResponse).includes(true)==false){
        alert('Please at least one character type');
      };
  }

  
  return userResponse
}
// Function for getting a random element from an array
function getRandom(arr) {
  //return item at random selected index out of all indexes in array
  return arr[Math.floor(Math.random() * arr.length)];

}
function checkSizeAndAdd(arr,item,size){
    arr.unshift(item);
    return true

};
// Function to generate password with user input
function generatePassword() {
  var userResponse = getPasswordOptions();
  
  var maxLength = userResponse.length
  password =[]
  var i = 0;
  while(password.length < maxLength){

    if (userResponse.uppercase ==true && password.length < maxLength  ){
      password.push(getRandom(upperCasedCharacters));
      i++

    };
    if (userResponse.lowercase ==true && password.length < maxLength  ){
      password.unshift(getRandom(lowerCasedCharacters));
      i++

    };
    if (userResponse.numeric ==true && password.length < maxLength  ){
      password.unshift(getRandom(numericCharacters));
      i++

    };
    if (userResponse.specialChars ==true && password.length < maxLength  ){
      password.push(getRandom(specialCharacters));
      i++

    };
    
  }
  return password.join("");

 
 
 

  };


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

