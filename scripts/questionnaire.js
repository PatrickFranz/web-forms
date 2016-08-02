var form = document.forms[0];
var radioOther = document.getElementById('radio-other');
var textOther  = document.getElementById('text-other');

radioOther.addEventListener('click', function(event){
  if(radioOther.checked){
    if(validator.isEmpty(textOther.value)){
      textOther.setCustomValidity('Please let us know what kind of pet is your favorite.');
      }
    textOther.addEventListener('input', function(event){
      if(validator.isOfLength(textOther.value, 3)){
      textOther.setCustomValidity('');
      } else {
        textOther.setCustomValidity('Are you sure the type of pet has less than 3 characters? Enter at least 3 characters.');
      }
    });
  }
});





