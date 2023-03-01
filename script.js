var generateBtn = document.querySelector("#generate");

// Character types
var Lower = "abcdefghijklmnopqrstuvwxyz";
var Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Numbers = "1234567890";
var Special = "!$%&()*+,-./|:;<=>?@[]{}";

// Password criteria
var inpLength, inpLower, inpUpper, inpNumbers, inpSpecial;

// Password Generated
var passwordGen = "";

function generatePassword() {
  // Prompt user for password criteria
  inpLength = window.prompt("Please input the length of the password that you would like (between 8 and 128 characters)");
  inpLower = confirm("Please select if you would like to include lowercases characters. Select Cancel for No, Ok for Yes.");
  inpUpper = confirm("Please select if you would like to include uppercases characters. Select Cancel for No, Ok for Yes.");
  inpNumbers = confirm("Please select if you'd like to include numbers in your password. Select Cancel for No, Ok for Yes.");
  inpSpecial = confirm("Please select if you would like to include special characters. Select Cancel for No, Ok for Yes.");

  // Input validation
  if (
    isNaN(inpLength) ||
    inpLength < 8 ||
    inpLength > 128 ||
    (!inpLower && !inpUpper && !inpNumbers && !inpSpecial)
  ) {
    alert("Please try again, your input for password length is not valid.");
    return;
  }

  // Generate password string based on selected character types
  passwordGen = "";
  if (inpLower) {
    passwordGen += Lower;
  }
  if (inpUpper) {
    passwordGen += Upper;
  }
  if (inpNumbers) {
    passwordGen += Numbers;
  }
  if (inpSpecial) {
    passwordGen += Special;
  }

  // Generate password using selected criteria and length
  var password = "";
  for (var i = 0; i < inpLength; i++) {
    password += passwordGen.charAt(Math.floor(Math.random() * passwordGen.length));
  }

  // Return generated password
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
