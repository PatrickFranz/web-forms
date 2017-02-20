var shipFName = document.getElementById('ship-fname');
var shipLName = document.getElementById('ship-lname');
var shipAddress = document.getElementById('ship-address');
var shipCity = document.getElementById('ship-city');
var shipCountry = document.getElementById('ship-country');

var shipSameAs = document.getElementById('same-as');
var billFName = document.getElementById('bill-fname');
var billLName = document.getElementById('bill-lname');
var billAddress = document.getElementById('bill-address');
var billCity = document.getElementById('bill-city');
var billCountry = document.getElementById('bill-country');

shipSameAs.addEventListener('change', function(event){
  if(shipSameAs.checked){
    billFName.value = shipFName.value;
    billLName.value = shipLName.value;
    billAddress.value = shipAddress.value;
    billCity.value = shipCity.value;
    billCountry.value = shipCountry.value;
  }
});

shipFName.addEventListener('input', function(event){
  shipFName.value = validator.withoutSymbols(shipFName.value);
  if(validator.isOfLength(shipFName.value, 2)){
    shipFName.setCustomValidity('');
  } else {
    shipFName.setCustomValidity('Must contain, at least, two letters.');
  }
});

shipLName.addEventListener('input', function(event){
  shipLName.value = validator.withoutSymbols(shipLName.value);
  if(validator.isOfLength(shipLName.value, 2)){
    shipLName.setCustomValidity('');
  } else {
    shipLName.setCustomValidity('Must contain, at least, two letters.');
  }
});

shipAddress.addEventListener('input', function(event){
  if(validator.isOfLength(shipFName.value, 4)){
    shipFName.setCustomValidity('');
  } else {
    shipFName.setCustomValidity('An address must contain, at least, four characters.');
  }
});

shipCity.addEventListener('input', function(event){
  shipCity.value = validator.withoutSymbols(shipCity.value);
  if(validator.isOfLength(shipCity.value, 2)){
    shipCity.setCustomValidity('');
  } else {
    shipCity.setCustomValidity('The city name must contain, at least, two letters.');
  }
});

shipCountry.addEventListener('input', function(event){
  if(validator.isOfLength(shipCountry.value, 2)){
    shipCountry.setCustomValidity('');
  } else {
    shipCountry.setCustomValidity('The country name must contain, at least, two letters.');
  }
});

billFName.addEventListener('input', function(event){
  billFName.value = validator.withoutSymbols(billFName.value);
  if(validator.isOfLength(billFName.value, 2)){
    billFName.setCustomValidity('');
  } else {
    billFName.setCustomValidity('Must contain, at least, two letters.');
  }
});

billLName.addEventListener('input', function(event){
  billLName.value = validator.withoutSymbols(billLName.value);
  if(validator.isOfLength(billLName.value, 2)){
    billLName.setCustomValidity('');
  } else {
    billLName.setCustomValidity('Must contain, at least, two letters.');
  }
});

billAddress.addEventListener('input', function(event){
  if(validator.isOfLength(billAddress.value, 4)){
    billAddress.setCustomValidity('');
  } else {
    billAddress.setCustomValidity('An address must contain, at least, four characters.');
  }
});

billCity.addEventListener('input', function(event){
  billCity.value = validator.withoutSymbols(billCity.value);
  if(validator.isOfLength(billCity.value, 2)){
    billCity.setCustomValidity('');
  } else {
    billCity.setCustomValidity('The city name must contain, at least, two letters.');
  }
});

billCountry.addEventListener('input', function(event){
  if(validator.isOfLength(billCountry.value, 2)){
    billCountry.setCustomValidity('');
  } else {
    billCountry.setCustomValidity('The country name must contain, at least, two letters.');
  }
});