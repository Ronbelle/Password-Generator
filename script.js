// Assignment Code
let generateBtn = document.querySelector("#generate");

// Declares Possible password characters
let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let alphaUpcase = alpha.join('$$').toUpperCase().split('$$');
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '/', '?', ']', ' ', '{', '}', '|', '`', '~', '=', '+', ';', ':'];
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

//Function that genenerates the password
function generatePassword() {
  let yourPassword = [];
  let finalArray = [];
  let separator = "";