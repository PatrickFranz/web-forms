
var form  = document.getElementsByTagName('form')[0];
var fName = document.getElementById('fname');
var lName = document.getElementById('lname');
var email = document.getElementById('email');
var dob   = document.getElementById('dob');
var passwd    = document.getElementById('password');
var btnSubmit = document.getElementById('submit');

var MIN_AGE = 13;

if(dob.value == ""){
   dob.setCustomValidity('Please enter a valid birth date.'); 
} 

form.addEventListener('submit', function(event){
  if(!form.checkValidity()){
    event.preventDefault();
    console.log("form-data not valid");
  }
});

fName.addEventListener('keyup', function(event){
  fName.value = validator.withoutSymbols(fName.value);
  if(validator.isOfLength(fName.value, 2)){
    fName.setCustomValidity('');
    document.getElementById('fname').nex
  } else {
    fName.setCustomValidity('A name requires at least 2 letters.')
  }
});

lName.addEventListener('keyup', function(event){
  lName.value = validator.withoutSymbols(lName.value);
  if(validator.isOfLength(lName.value, 2)){
    lName.setCustomValidity('');
  } else {
    lName.setCustomValidity('A name requires at least 2 letters.')
  }
});

email.addEventListener("submit", function(event){
  if(validator.isEmailAddress(email.value)){
    email.setCustomValidity('');
  } else {
    email.setCustomValidity('Please enter a valid email address.');
  }

});

dob.addEventListener('change', function(event){
  if(validator.isBeforeDate(dob.value, Date.now())){
    dob.setCustomValidity('');
  } 
  else {
    dob.setCustomValidity('Enter a valid Date of Birth.');  
  }
});