

function isAlphabetOnly(str){ 
    let pattern = /[\d\W]/; 
    let spaceDash = /(\s|-)/;
    
    if(pattern.test(str) == true){
        if(spaceDash.test(str) == true){
            return true;
        }else{
            return false;
        }
    }else{
        return true;
    }
}

function isCharactersBetween(str,from, to){
    if (str.length >= from && str.length <= to){
        return true;
    }else {
        return false;
    }
}

function isNumber(str){
    let numPattern = /[\d]/;
    if (numPattern.test(str) == false){
        return false;
    }else {
        return true;
    }
}

function isMobileNumberFormat(str){
    if(/^(9)+/.test(str)){
        return true;
    }else {
        return false;
    }
}

function isEmailFormat(str){
    let pattern = /^[\w]+.{1}[\w]+@{1}(ue.edu.ph){1}$/i;

    if (/[\d]/.test(str)){
        return false;
    }else if(/[\W]/.test(str) ){
        if (pattern.test(str) == true){
            return true;
        }else {
            return false;
        }
    }else {
        if (pattern.test(str) == true){
            return true;
        }else {
            return false;
        }
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

function determineAge(d){
    let difference = Date.now() - d.getTime();
    let age = new Date(difference);

    return Math.abs(age.getUTCFullYear() - 1970);
}

function isUsernameFormat(str){
    if (/[\w]/.test(str)){
        if(/[\d]/.test(str)){
            return false;
        }else{
            return true;
        }
    }else {
        if (/(-|_)/.test(str)){
            return true;
        }else{
            return false;
        }
    }
}

function isPasswordFormat(str){
    if (/[\w]/.test(str)){
        if (/[\d]/.test(str) == false){
            return false;
        }else {
            return true;
        }
    }else {
        return false;
    }
}

function swipeLeft(){
    let form1 = document.getElementById('signupForm');
    let form2 = document.getElementById('loginForm');

    form1.style.transition = 'all 1.5s cubic-bezier(0,1,0,1) ';
    form2.style.transition = 'all 1.5s cubic-bezier(0,1,0,1)';
    form1.style.transform = 'translate(-100%)';
    form2.style.transform = 'translate(-100%)';
}

function swipeRight(){
    let form1 = document.getElementById('signupForm');
    let form2 = document.getElementById('loginForm');

    form1.style.transition = 'all 1.5s cubic-bezier(0,1,0,1) ';
    form2.style.transition = 'all 1.5s cubic-bezier(0,1,0,1)';
    form1.style.transform = 'translate(0px)';
    form2.style.transform = 'translate(0px)';
}