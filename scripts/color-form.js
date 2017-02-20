var colorBox = document.getElementById('color-textbox');

var redSlide   = document.getElementById('red-slider');
var greenSlide = document.getElementById('green-slider');
var blueSlide  = document.getElementById('blue-slider');
var alphaSlide = document.getElementById('alpha-slider');

var redNum   = document.getElementById('red-num');
var greenNum = document.getElementById('green-num');
var blueNum  = document.getElementById('blue-num');
var alphaNum = document.getElementById('alpha-num');

var redVal   = redNum.value   = document.getElementById('red-slider').value;
var greenVal = greenNum.value = document.getElementById('green-slider').value;
var blueVal  = blueNum.value  = document.getElementById('blue-slider').value;
var alphaVal = alphaNum.value = document.getElementById('alpha-slider').value;

setColor();

redSlide.addEventListener('input', function(event){
  if(validator.isBetween(redSlide.value, 0, 255)){
    redNum.value = redVal = document.getElementById('red-slider').value;
    setColor();
    redNum.setCustomValidity('');
  } else {
    redNum.setCustomValidity('Value must be between 0 and 255, inclusive.');
  }
});

redNum.addEventListener('input', function(event){
  if(validator.isBetween(redNum.value, 0, 255)){
    redNum.setCustomValidity('');
    redSlide.value = redVal = redNum.value;
    setColor();
  } else {
    redNum.setCustomValidity('Value must be between 0 and 255, inclusive.');
  }
});

greenSlide.addEventListener('input', function(event){
  if(validator.isBetween(greenSlide.value, 0, 255)){
    greenNum.setCustomValidity('');    
    greenNum.value = greenVal = document.getElementById('green-slider').value;
    setColor();
  } else {
    greenNum.setCustomValidity('Value must be between 0 and 255, inclusive.');
  }
});

greenNum.addEventListener('input', function(event){
  if(validator.isBetween(greenNum.value, 0, 255)){
    greenNum.setCustomValidity('');
    greenSlide.value = greenVal = greenNum.value;
    setColor();
  } else {
    greenNum.setCustomValidity('Value must be between 0 and 255, inclusive.');
  }
});

blueSlide.addEventListener('input', function(event){
  if(validator.isBetween(greenSlide.value, 0, 255)){
    blueNum.setCustomValidity('');    
    blueNum.value = blueVal = document.getElementById('blue-slider').value;
    setColor();
  } else {
    greenNum.setCustomValidity('Value must be between 0 and 255, inclusive.');
  }
});

blueNum.addEventListener('input', function(event){
  if(validator.isBetween(blueNum.value, 0, 255)){
    blueNum.setCustomValidity('');
    blueSlide.value = blueVal = blueNum.value;
    setColor();
  } else {
    blueNum.setCustomValidity('Value must be between 0 and 255, inclusive.');
  }
});

alphaSlide.addEventListener('input', function(event){
  if(validator.isBetween(alphaSlide.value, 0, 1)){
    alphaNum.setCustomValidity('');
    alphaNum.value = alphaVal = document.getElementById('alpha-slider').value;
    setColor();
  } else {
    alphaNum.setCustomValidity('Value must be between 0 and 1, inclusive.');
  }
});

alphaNum.addEventListener('input', function(event){
  if(validator.isBetween(alphaNum.value, 0, 1)){
    alphaNum.setCustomValidity('');
    alphaSlide.value = alphaVal = alphaNum.value;
    setColor();
  } else {
    alphaNum.setCustomValidity('Value must be between 0 and 255, inclusive.');
  }
});

function setColor(){
  var rgb = "rgb(" +
            redVal + "," +
            greenVal + "," +
            blueVal + ")";
  
  if(validator.isRGB(rgb) ){
    if(validator.isBetween(alphaVal, 0, 1)){
    colorBox.style.backgroundColor = "rgba(" +
            redVal + "," +
            greenVal + "," +
            blueVal + "," +
            alphaVal + ")";
  } else {}
    colorBox.style.backgroundColor = rgb;
  }
}
