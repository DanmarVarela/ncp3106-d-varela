

const errorProperty = "thin solid rgba(245, 83, 83, 0.87)";
//Main Functions
function validateName(name){
    let errorObj = document.getElementById("error-message-personalInfo");
    let nameObj = document.forms["signupForm"][name];

    if (nameObj.value.length == 0 && name != "middleInitial"){
        setErrorDisp(errorObj,nameObj,"This field cannot be empty");
        return false;
    }
    if (isAlphabetOnly(nameObj.value) == false){
        setErrorDisp(errorObj,nameObj,"Alphabetical characters only");
        return false;
    }
    setDefault(errorObj,nameObj);
    return true;
}

function validateStudNum(num){
    let numObj = document.forms["signupForm"][num];
    let errorObj = document.getElementById("error-message-personalInfo");

    if (numObj.value.length == 0){
        setErrorDisp(errorObj,numObj,"This field cannot be empty");
        return false;
    }else if (isNumber(numObj.value) == false){
        numObj.value = numObj.value.slice(0,-1);
        return false;
    }else if (isCharactersBetween(numObj.value,1,10) == true) {
        setErrorDisp(errorObj,numObj,"Student Number should be 11 digits");
        return false;
    }
    setDefault(errorObj,numObj);
    return true;
}

function validateMobileNum(mobileNum){
    let mobileNumObj = document.forms["signupForm"][mobileNum];
    let errorObj = document.getElementById("error-message-personalInfo");

    if (mobileNumObj.value.length == 0){
        setErrorDisp(errorObj,mobileNumObj,"This field cannot be empty");
        return false;
    }else if (isNumber(mobileNumObj.value) == false){
        mobileNumObj.value = mobileNumObj.value.slice(0,-1);
        return false;
    }else if (isCharactersBetween(mobileNumObj.value,1,9) == true) {
        setErrorDisp(errorObj,mobileNumObj,"Invalid Mobile Number");
        return false;
    }else if (mobileNumObj.value.length == 10){
        if(isMobileNumberFormat(mobileNumObj.value) == false){
            setErrorDisp(errorObj,mobileNumObj,"Invalid Mobile Number");
            return false;
        }
    }
    setDefault(errorObj,mobileNumObj);
    return true;
}

function validateBirthDate(bDay){
    
    let bDayObj = document.forms["signupForm"][bDay];
    let errorObj = document.getElementById("error-message-personalInfo");
    let birthdate = new Date(bDayObj.value);
    let currentDate = new Date();

    if (bDayObj.value.length == 0){
        setErrorDisp(errorObj,bDayObj,"This field cannot be empty");
        return false;
    }else if (birthdate >= currentDate){
        setErrorDisp(errorObj,bDayObj,"Invalid Birthdate");
        return false;
    }else if (determineAge(birthdate) < 18){
        setErrorDisp(errorObj,bDayObj,"You should be at least 18 years old");
        return false;
    }
    setDefault(errorObj,bDayObj);
    return true;
}  

function validateEmail(email){
    let emailObj = document.forms["signupForm"][email];
    let errorObj = document.getElementById("error-message-personalInfo");

    if (emailObj.value.length == 0){
        setErrorDisp(errorObj,emailObj,"This field cannot be empty");
        return false;
    }else if (emailObj.value.length == 0){
        setDefault(errorObj,emailObj);
        return false;
    }else if (isEmailFormat(emailObj.value) == false){
        setErrorDisp(errorObj,emailObj,"Invalid Email");
        return false;
    }
    setDefault(errorObj,emailObj);
    return true;
}

function validateUserName(username){
    let usernameObj = document.forms["signupForm"][username];
    let errorObj = document.getElementById("error-message-loginCredentials");

    if (usernameObj.value.length == 0){
        setErrorDisp(errorObj,usernameObj,"This field cannot be empty");
        return false;
    }else if (usernameObj.value.length == 0){
        setDefault(errorObj,usernameObj);
        return false;
    }else if (isCharactersBetween(usernameObj.value,8,15) == false){
        setErrorDisp(errorObj,usernameObj,"Username should be between 8 to 15 characters");
        return false;
    }else if (isUsernameFormat(usernameObj.value) == false){
        setErrorDisp(errorObj,usernameObj,"Numbers and Special Characters except _ and - are not allowed");
        return false;
    }
    setDefault(errorObj,usernameObj);
    return true;
}

function validatePassword(pass){
    let passwordObj = document.forms["signupForm"][pass];
    let errorObj = document.getElementById("error-message-loginCredentials");

    if (passwordObj.value.length == 0){
        setErrorDisp(errorObj,usernameObj,"This field cannot be empty");
        return false;
    }else if (isCharactersBetween(passwordObj.value,8,20) == false){
        setErrorDisp(errorObj,passwordObj,"Password should be between 8 to 20 characters");
        return false;
    }else if (isPasswordFormat(passwordObj.value) == false){
        setErrorDisp(errorObj,passwordObj,"Password should be a combination of alphanumeric characters");
        return false;
    }
    setDefault(errorObj,passwordObj);
    return true;
}

function validateConfirmPassword(confPassword){
    let passwordObj = document.forms["signupForm"]["signupPassword"];
    let confPasswordObj = document.forms["signupForm"][confPassword];
    let errorObj = document.getElementById("error-message-loginCredentials");

    if (confPasswordObj.value.length == 0){
        setErrorDisp(errorObj,confPasswordObj,"This field cannot be empty");
        return false;
    }else if (confPasswordObj.value.length == 0){
        setDefault(errorObj,confPasswordObj);
        return false;
    }else if (passwordObj.value != confPasswordObj.value){
        setErrorDisp(errorObj,confPasswordObj,"Password Mismatch");
        return false;
    }
    setDefault(errorObj,confPasswordObj);
    return true;
}

function validateYearLevel(year){
    let yearLvlObj = document.forms["signupForm"][year]; 
    let errorObj = document.getElementById("error-message-personalInfo");

    if (yearLvlObj.value == 0){
        setErrorDisp(errorObj,yearLvlObj,"Select Year Level");
        return false;
    }
    return true;
}

function validateTerms(terms){
    let termsObj = document.forms["signupForm"][terms]; 
    let errorObj = document.getElementById("error-message-loginCredentials");

    if (termsObj.checked == false){
        setErrorDisp(errorObj,termsObj,"Please agree to our Terms and Conditions");
        return false;
    }
    errorObj.innerHTML = "";
    return true;
}

function validateRegisterBtn(){
    let passwordObj = document.forms["signupForm"]["signupPassword"];
    let confPasswordObj = document.forms["signupForm"]['signupConfirmPassword']; 
    let errorObj = document.getElementById("error-message-loginCredentials");
    let registerBtn = document.getElementById("RegisterButton");
    let bDayObj = document.forms["signupForm"]['birthdate'];

    if (passwordObj.value != confPasswordObj.value){
        setErrorDisp(errorObj,confPasswordObj,"Password Mismatch");
        return 0;
    }else if (validateTerms('terms') == false){
        errorObj.innerHTML = "Please agree to the Terms and Conditions";
        return 0;
    }else if (bDayObj.value.length == 0){
        setErrorDisp(document.getElementById("error-message-personalInfo"),bDayObj,"This field cannot be empty");
        errorObj.innerHTML = "Please fill up all the necessary data";
        return 0;
    }else if (validateName('lastName') == true && validateName('firstName') == true && validateName('middleInitial') == true
        && validateStudNum('studentNumber') == true && validateMobileNum('mobileNumber') == true && validateBirthDate('birthdate') == true
        && validateEmail('email') == true && validateUserName('signupUsername') == true && validatePassword('signupPassword') == true 
        && validateConfirmPassword('signupConfirmPassword') == true && validateYearLevel('yearLevel') == true){

            registerBtn.type = "submit";
    }else {
        errorObj.innerHTML = "Please fill up all the necessary data";
    }
}