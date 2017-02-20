var searchInput = document.getElementById('search-form-text-input');

searchInput.addEventListener('input',  function(event){
  if(validator.isAlphanumeric(searchInput.value)){
    searchInput.setCustomValidity('');
  } else {
    searchInput.setCustomValidity('Please limit your search to letters and numbers.');
  }
});