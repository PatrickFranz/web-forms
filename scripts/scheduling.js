var schedDate  = document.getElementById('date-in');
var schedTime  = document.getElementById('time-in');
var schedTZone = document.getElementById('timezone-in');
var schedMsg   = document.getElementById('message');
var schedPhone = document.getElementById('contact-tel');
var schedEmail = document.getElementById('contact-email');

schedValidate();

schedDate.addEventListener('input', function(event){
  if(validator.isDate(schedDate.value)){
    if(isValidApptTime()){
      schedDate.setCustomValidity('');
      schedTime.setCustomValidity('');
    } else {
      schedDate.setCustomValidity('We can only make appointments for future dates and times.');
      }
    } else {
      schedDate.setCustomValidity('This doesn\'t look like a valid  date. Please use the following format: mm/dd/yyyy');
    }
  });

  schedTime.addEventListener('input', function(event){
    if(isValidApptTime()){
      schedTime.setCustomValidity('');
      schedDate.setCustomValidity('');
    } else {
      schedTime.setCustomValidity('We can only make appointments for future dates and times.');
    }
  });

schedMsg.addEventListener('input', function(event){
  schedMsg.value = validator.withoutSymbols(schedMsg.value);
});

schedPhone.addEventListener('input', function(event){
  if(validator.isPhoneNumber(schedPhone.value)){
    schedPhone.setCustomValidity('');
  } else {
    schedPhone.setCustomValidity('Please enter a proper phone number.');
  }
});

schedEmail.addEventListener('input', function(event){
  if(validator.isEmailAddress(schedEmail.value)){
    schedEmail.setCustomValidity('');
  } else {
    schedEmail.setCustomValidity('Please add a proper email address.');
  }
});


function schedValidate(){
  if(!isValidApptTime()){
    schedTime.setCustomValidity('We can only make appointments for future dates and times.');
  }
  schedMsg.setCustomValidity('');  
}

/*
Returns true if time and date of appt is in the future
*/
function isValidApptTime(){
  var apptTime = new Date(schedDate.value);
  var hour = schedTime.value.split(':')[0];
  var min = schedTime.value.split(':')[1];
  apptTime.setHours(hour, min);
  apptTime.setDate(apptTime.getDate() + 1);
  return validator.isAfterDate(apptTime, new Date());
}
