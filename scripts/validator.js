

   var ValidatorException = function(func, err){
    this.err = err;
    this.caller = func;
    this.name = "ValidatorException"
    this.msg = this.name + " " + this.err;
  };

  var validator = {};

  validator.isEmailAddress = function(email){
    if(email !== undefined){
      /* Regex answer
      var re = new RegExp(/[\w.]{3,}@[\w.]{3,}/, 'g');
      return re.test(email);*/
      var emailSplit = email.split('@');
      if(emailSplit.length === 2){
        return true;
      } else {
        return false;
      }
    } else {
      throw "err: Missing parameter in validator.isEmailAddress()";
    }

  };

  validator.isPhoneNumber = function(phone){
    //Regex answer
    // var re = new RegExp(/1?[.-\s]?\(?\d{3}\)?[.-\s]?\d{3}[.-\s]?\d{4}/, 'g');
    // return re.test(phoneNumber);
    var isValid = true;
    console.log("len: " + phone.length);
    if(phone !== undefined){
      if(phone.length === 10){
        for(var i=0; i<10; i++){
          if(isNaN(phone.charAt(i))){
            isValid = false;
          }
        }
      } else {
        isValid = false;
      }
      return isValid;
    } else {
      throw "err: Missing parameter in validator.isPhoneNumber()";
    }
  };

  validator.withoutSymbols = function(str){
    if(str !== undefined){
      var A_LOWER    = 'a'.charCodeAt(0);
      var Z_LOWER    = 'z'.charCodeAt(0);
      var A_UPPER    = 'A'.charCodeAt(0);
      var Z_UPPER    = 'Z'.charCodeAt(0);
      var SPACE_CODE = ' '.charCodeAt(0);
      var out        = "";
      
      for(var i=0; i<str.length; i++){
        if(!(isNaN(str.charAt(i)))){  //check if number [0-9]
          out += str.charAt(i);
        }
        if(str.charCodeAt(i) >= A_LOWER && str.charCodeAt(i) <= Z_LOWER){ //check if lowercase letter [a-z]
          out += str.charAt(i);
        }
        if(str.charCodeAt(i) >= A_UPPER && str.charCodeAt(i) <= Z_UPPER){  //check if uppercase letter [A-Z]
          out += str.charAt(i);
        }
        if(str.charCodeAt(i) === SPACE_CODE){  //check if space [/s]
          out += str.charAt(i);
        }
      }  
      return out;
    } else {
      throw "err: Missing parameter in validator.withoutSymbols()";
    }
  };

  validator.isDate = function(date){
    if(date !== undefined){
      var dateObj = new Date(date);
      console.log(dateObj);
      return (dateObj == "Invalid Date") ? false : true;
    } else {
      throw "err: Missing parameter in validator.isDate()";
    }
  };

  validator.isBeforeDate = function(input, reference){
    if(input !== undefined && reference !== undefined){
      var inDate = new Date(input);
      var refDate = new Date(reference);  
      return inDate < refDate;
    } else {
      throw "err: Missing parameter in validator.isBeforeDate()";
    }
  };

  validator.isAfterDate = function(input, reference){
    if(input !== undefined && reference !== undefined){
      var inDate = new Date(input);
      var refDate = new Date(reference);  
      return inDate > refDate;
    } else {
        throw "err: Missing parameter in validator.isAfterDate()";
      }
  };

  validator.isBeforeToday = function(input){
    if(input !== undefined){
      var inDate = new Date(input);
      return inDate < Date.now();
    } else {
      throw "err: Missing parameter in validator.isBeforeToday()";
    }
  };

  validator.isAfterToday = function(input){
    if(input !== undefined){
      var inDate = new Date(input);
      return inDate > Date.now();
    } else {
      throw "err: Missing parameter in validator.isAfterToday()";
    }
  };

  validator.isEmpty = function(str){ 
    if(str !== undefined){
      return str.trim().length === 0;
    } else {
      throw "err: Missing parameter in validator.isEmpty()";
    }
  };

  validator.contains = function(str, wordArray){
  if(str !== undefined && wordArray !== undefined){
    var strArray = str.split(/[-\.\"\'?!@#$%^&*\(\)_\\ ]/);
    for(var el in wordArray){
      for(var word in strArray){
        if(wordArray[el].toLowerCase() === strArray[word].toLowerCase()){
          return true;
        } 
      }
    }
    return false;
  } else {
    throw "err: Missing parameter in validator.contains()";
  }
};

validator.lacks = function(str, wordArray){
  if(str !== undefined && wordArray !== undefined){
    var strArray = str.split(/[-\.\"\'?!@#$%^&*\(\)_\\ ]/);
    for(var el in wordArray){
      for(var word in strArray){
        if(wordArray[el].toLowerCase() === strArray[word].toLowerCase()){
          return false;
        } 
      }
    }
    return true;
  } else {
    throw "err: Missing parameter in validator.lacks()";
  }
};

  validator.isComposedOf = function(inp, strings){
    if(inp !== undefined && strings !== undefined){
      inp = validator.withoutSymbols(inp);
      var match;
      var xString = "";
      for(var i=0; i<inp.length; i++){
        if(inp.charCodeAt(i) === " ".charCodeAt(0)){  //auto add spaces
          xString += " ";  
        }
        for(var el in strings){
          if(inp.charAt(i).toLowerCase() === strings[el].charAt(0).toLowerCase()){
            match = true;
            for(var j=0; j<strings[el].length; j++){
              if(strings[el].charAt(j).toLowerCase() !== inp.charAt(i+j).toLowerCase()){
                match = false;
              }
            }
            if(match){
              xString += inp.slice(i, i + strings[el].length);
            }
          }
        }
      }
      return xString === inp;
    } else {
      throw "err: Missing parameter in validator.isComposedOf()";
    }
  };
  
  /*
  Returns true if inp parameter is LESS THAN or EQUAL TO the provided length.
  */
  validator.isLength = function(inp, length){
    if(inp !== undefined && length !== undefined){
      return inp.length <= length;
    } else {
      throw "err: Missing parameter in validator.isLength()";
    }
  };

  /*
  Returns true if inp parameter is GREATER THAN or EQUAL TO the provided length.
  */
  validator.isOfLength = function(inp, length){
    if(inp !== undefined && length !== undefined){
      return inp.length >= length;
    } else {
      throw "err: Missing parameter in validator.isOfLength()";
    }
  };
  
  /*
  Returns a count of words in the provided string.
  */ 
  validator.countWords = function(inp){
    if(inp !== undefined){
      var inputArray = inp.split(/[-\"\'@#$%^&*\(\)\\ ]/);
      var counter = 0;
      for(var el in inputArray){
        if(inputArray[el].length > 0){
          counter++;
        }
      }
      return counter;
    } else {
      throw "err: Missing parameter in validator.countWords()";
    }
  };
  
  /*
  Return true if string word count is LESS THAN OR EQUAL TO than provided number.
  */
  validator.lessWordsThan = function(input, num){
    if(input !== undefined && num !== undefined){
      return validator.countWords(input) <= num;
    } else {
      throw "err: Missing parameter in validator.lessWordsThan()";
    }
  };
  
  /*
  Return true if string word count is GREATER THAN OR EQUAL TO than provided number.
  */
  validator.moreWordsThan = function(input, num){
    if(input !== undefined && num !== undefined){
      return validator.countWords(input) >= num;
    } else {
      throw "err: Missing parameter in validator.moreWordsThan()";
    }
  };
  
  validator.isBetween = function(input, floor, ceil){
    if(input !== undefined && floor !== undefined && ceil !== undefined){
      return input <= ceil && input >= floor;
    } else {
      throw "err: Missing parameter in validator.moreWordsThan()";
    }
  };
  
  validator.isAlphanumeric = function(str){
    if(str !== undefined){
      var A_UPPER = 'A'.charCodeAt(0);
      var Z_UPPER = 'Z'.charCodeAt(0);
      var A_LOWER = 'a'.charCodeAt(0);
      var Z_LOWER = 'z'.charCodeAt(0);
      var NUM_0   = '0'.charCodeAt(0);
      var NUM_9   = '9'.charCodeAt(0);
      
      for(var i=0; i<str.length; i++){
        var v = str.charAt(i);
        if(str.charCodeAt(i) >= NUM_0 && str.charCodeAt(i) <= NUM_9){
          continue;
        }
        if(str.charCodeAt(i) >= A_UPPER && str.charCodeAt(i) <= Z_UPPER){
          continue;
        } else
        if(str.charCodeAt(i) >= A_LOWER && str.charCodeAt(i) <= Z_LOWER){
          continue;
        } else {
          return false;
        }
      }
      return true;
    } else {
      throw "err: Missing parameter in validator.isAlphanumeric()";
    }
  };
  
  validator.isCreditCard = function(cc){
    if(cc !== undefined){
      if(cc.length != 16 && cc.length != 19){
        return false;
      }
      if(cc.length === 16){
        for(var i=0; i<cc.length; i++){
          if(!validator.isAlphanumeric(cc.charAt(i))){
            return false;
          }
        }
      } else
      if(cc.length === 19){
        console.log("is 19");
        for(var j=0; j<cc.length; j++){
          if( (j + 1) % 5 === 0){
            if(cc.charAt(j) === '-'){
              continue;
            } else {
              return false;
            }
          }
          else if(!validator.isAlphanumeric(cc.charAt(i))){
            return false;
          }
        }
      }

      return true; 

    } else {
      throw "err: Missing parameter in validator.isCreditCard()";
    }
  };
  
  validator.isHex = function(input){
    var HEX = 16;
    if(input !== undefined){
      if(input.charAt(0) !== "#"){
        return false;
      }
      if(input.length === 4 || input.length === 7){
        for(var i=1; i<input.length; i++){
          if(isNaN(parseInt(input.charAt(i), HEX))){
            return false;
          }
        }
      } else {
        return false;
      }
      return true;
    } else {
      throw  "err: Missing parameter in validator.isHex()";
    }
  };
  
  /*
  Validates if supplied string can be used as a valid RGB color.
  parameter: Expects a string in the format: rgb(n,n,n)
  */
  validator.isRGB = function(input){
    if(input !== undefined){
      var values;
      if(input.substr(0, 4) === "rgb(" && input.substr(-1, 1) === ")"){
        values = input.split("(") [1].split(")") [0].split(",");
        if(values.length === 3){
          for(var el in values){
            if(values[el] < 0 || values[el] > 255){
              return false;
            }
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
      return true;
    } else {
      throw "err: Missing parameter in validator.isHex()";
    }
  };
  
  validator.isHSL = function(input){
    if(input !== undefined){
      var values;
      if(input.substr(0, 4) === "hsl(" && input.substr(-1, 1) === ")"){
        values = input.split("(") [1].split(")") [0].split(",");
        if(values.length === 3){
          for(var el in values){
            if(parseInt(el) === 0){
              if(values[el] < 0 || values[el] > 360){
                return false;
              }
            } else
            if(values[el] < 0 || values[el] > 1){
              return false;
            }
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
      return true;
    } else {
      throw "err: Missing parameter in validator.isHSL()";
    }
  };
  
  validator.isColor = function(input){
    if(input !== undefined){
      return (validator.isHex(input) || validator.isRGB(input) || validator.isHSL(input)) ? true : false;
    } else {
      throw "err: Missing parameter in validator.isColor()";
    }
  };
  
  validator.isTrimmed = function(str){
    if(str !== undefined){  
      var spaceCount = 0;
      var wordCount = validator.countWords(str);
      for(var i=0; i < str.length; i++){
        if(str.charAt(i) === " "){
          spaceCount++;
        }
      }
      return spaceCount === wordCount - 1;
    } else {
     throw "err: Missing parameter in validator.isTrimmed()";
    }
  };
