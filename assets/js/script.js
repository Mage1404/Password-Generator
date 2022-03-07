// Assignment code here
var password_length = 0;
var password_result = "";
var password_list = "";
var password_number = "0123456789";
var password_upper = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
var password_lower = "abcdefghijklmnopqrstuwxyz";
var password_special = " !\"#$%&'()*+,-./:;<=>?@[/]^_`{|}~";

var password_generator = function () {
  password_length = 0;
  password_length = window.prompt('Please choose a length of at least 8 characters and no more than 128 characters');
  if (password_length >= 8 && password_length <= 128) {
    type_select();
  } else {
    window.alert("Please enter an valid password length");
  }
}

var type_select = function () {
  password_result = "";
  password_list = "";
  var password_temp_length = password_length;
  var numberconfirm = window.confirm("Do you want to include numeric in the password?");
  if (numberconfirm) {
    password_result += password_number.charAt(Math.floor(Math.random() * 10));
    password_list += password_number;
    password_temp_length -= 1;  
  } 
  var lowerconfirm = window.confirm("Do you want to include lowercase characters in the password?");
  if (lowerconfirm) {
    password_result += password_lower.charAt(Math.floor(Math.random() * 26));
    password_list += password_lower;
    password_temp_length -= 1; 
  }
  var upperconfirm = window.confirm("Do you want to include uppercase characters in the password?");
  if (upperconfirm) {
    password_result += password_upper.charAt(Math.floor(Math.random() * 26));
    password_list += password_upper;
    password_temp_length -= 1; 
  }
  var specialconfirm = window.confirm("Do you want to include special characters in the password?");
  if (specialconfirm) {
    password_result += password_special.charAt(Math.floor(Math.random() * password_special.length));
    password_list += password_special;
    password_temp_length -= 1; 
  }
  if (password_temp_length === password_length) {
    window.alert("please select at least one character type for your password");
    type_select();
  } else {
    for (var i = 0; i < password_temp_length; i++) {
      password_result += password_list.charAt(Math.floor(Math.random() * password_list.length));
    }
  }
  password_result = random_string(password_result);
  document.getElementById("password").value = password_result;
  return;
}

var random_string = function(a) {
  var result = "";
  a = a.split('');
  while (a.length > 0) {
    result +=  a.splice(a.length * Math.random() << 0, 1);
  }
  return result;
}
