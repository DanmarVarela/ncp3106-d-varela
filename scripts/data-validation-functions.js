

const errorProperty = "thin solid rgba(245, 83, 83, 0.87)";
//Main Functions
function validateName(name){
    let errorObj = document.getElementById("error-message-personalInfo");
    let nameObj = document.forms["signupForm"][name];

    if (isAlphabetOnly(nameObj.value) == false){
        setErrorDisp(errorObj,nameObj,"Alphabetical characters only");
        nameObj.value = nameObj.value.slice(0,-1);
    }else {
        setDefault(errorObj,nameObj);
    }
}

function validateStudNum(num){
    let numObj = document.forms["signupForm"][num];
    let errorObj = document.getElementById("error-message-personalInfo");

    if (isNumber(numObj.value) == false){
        numObj.value = numObj.value.slice(0,-1);

        if (isCharactersBetween(numObj.value,0,0) == true) {
            setDefault(errorObj,numObj);
        }else {
            setErrorDisp(errorObj,numObj,"Student Number should be 11 digits");
        }

    }else if (isCharactersBetween(numObj.value,11,11) == false) {
        setErrorDisp(errorObj,numObj,"Student Number should be 11 digits");
    }else {
        setDefault(errorObj,numObj);
    }
}

function validateMobileNum(mobileNum){
    let mobileNumObj = document.forms["signupForm"][mobileNum];
    let errorObj = document.getElementById("error-message-personalInfo");

    if (isNumber(mobileNumObj.value) == false){
        mobileNumObj.value = mobileNumObj.value.slice(0,-1);

        if (isCharactersBetween(mobileNumObj.value,0,0) == true) {
            setDefault(errorObj,mobileNumObj);
        }else {
            setErrorDisp(errorObj,mobileNumObj,"Invalid Mobile number");
        }

    }else if (isCharactersBetween(mobileNumObj.value,10,10) == false) {
        setErrorDisp(errorObj,mobileNumObj,"");
    }else {
        setDefault(errorObj,mobileNumObj);
    }
}

function validateBirthDate(bDay){
    let bDayObj = document.forms["signupForm"][bDay];
    let errorObj = document.getElementById("error-message-personalInfo");

    console.log(bDay.value);
}



//accompanying functions

//allows alphabetical letters only. spaces and dashes are allowed only between words.
//consecutive spaces or dash are not allowed. 
function isAlphabetOnly(str){ 
                            
    let allNumSpecialChar = /[\d\W]/;
    let spaceDash = /(\s|-)/;                       varela
    let allSpaceDash = /(\s|-){2,}|^(\s|-)/;
    let lastChar = str.charAt(str.length-1);
    
    if (allNumSpecialChar.test(lastChar) == true ){
        if(spaceDash.test(lastChar) == true && allSpaceDash.test(str) == false){
            return true;
        }else {
            return false;
        }
    }else {
        return true;
    }
}

function isCharactersBetween(str,from, to){
    if (str.length < from || str.length > to){
        return false;
    }else {
        return true;
    }
}

function isNumber(str){
    let numPattern = /[\d]/;
    let lastChar = str.charAt(str.length-1)
    if (numPattern.test(lastChar) == false){
        return false;
    }else {
        return true;
    }
}

function isEmailFormat(str){
    let pattern = /^[\w]+.{1}[\w]+@{1}(ue.edu.ph){1}$/;
    if (pattern.test(str) == true){
        return true;
    }else {
        return false
    }
}

function setErrorDisp(errorObj, inputBoxObj, str){
    errorObj.innerHTML = str;
    inputBoxObj.style.border = errorProperty;
}
function setDefault(errorObj, inputBoxObj){
    errorObj.innerHTML = null;
    inputBoxObj.style.border = "none";
}


buttonClicked(){
    console.log("btn clicked");
}
