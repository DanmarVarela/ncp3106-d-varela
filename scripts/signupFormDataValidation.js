

const errorProperty = "thin solid rgba(245, 83, 83, 0.87)";

//Main Functions
function validateName(name){
    let errorObj = document.getElementById("error-message-personalInfo");
    let nameObj = document.forms["signupForm"][name];

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

    if (isNumber(numObj.value) == false){
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

    if (isNumber(mobileNumObj.value) == false){
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

    if (birthdate >= currentDate){
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

    if (isEmailFormat(emailObj.value) == false){
        setErrorDisp(errorObj,emailObj,"Invalid Email");
        return false;
    }
    setDefault(errorObj,emailObj);
    return true;
}

function validateUserName(username){
    let usernameObj = document.forms["signupForm"][username];
    let errorObj = document.getElementById("error-message-loginCredentials");

    if (isCharactersBetween(usernameObj.value,8,15) == false){
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

    if (isCharactersBetween(passwordObj.value,8,20) == false){
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

    if (passwordObj.value != confPasswordObj.value){
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
    setDefault(errorObj,yearLvlObj);
    return true;
}

function validateTerms(terms){
    let termsObj = document.forms["signupForm"][terms]; 
    let errorObj = document.getElementById("error-message-loginCredentials");

    if (termsObj.checked == false){
        setErrorDisp(errorObj,termsObj,"To be a member, you need to agree to our Terms and Conditions");
        return false;
    }
    errorObj.innerHTML = "";
    return true;
}

function checkEmptyInputBox(){
    let inputs = document.forms["signupForm"].getElementsByTagName("input");
    for (let i=0;i<inputs.length;i++){
        if(inputs[i].value.length == 0 && inputs[i].getAttribute('name') != "middleInitial" && inputs[i].type != "checkbox"){
            inputs[i].style.border = errorProperty;
            document.getElementById("error-message-loginCredentials").innerHTML = "Please fill up the necessary data";
            return true;
        }
    }
    if(document.forms["signupForm"]["yearLevel"].value == 0){
        document.forms["signupForm"]["yearLevel"].style.border = errorProperty;
        document.getElementById("error-message-loginCredentials").innerHTML = "Please fill up the necessary data";
        return true;
    }
    return false;
}



function validateRegisterBtn(){
    let passwordObj = document.forms["signupForm"]["signupPassword"];
    let confPasswordObj = document.forms["signupForm"]['signupConfirmPassword']; 
    let errorObj = document.getElementById("error-message-loginCredentials");
    let registerBtn = document.getElementById("RegisterButton");
    
    
    if (checkEmptyInputBox() == false){
        //check for password mismatch and if terms and conditions is checked
        if (passwordObj.value != confPasswordObj.value){
            errorObj.innerHTML = "Password Mismatch";
        }else if(validateTerms('terms') == false) {
            errorObj.innerHTML = "To be a member, you need to agree to our Terms and Conditions";
        }else {
            errorObj.innerHTML = "";
        }
    }

    //check if there are any errors
    if(validateName('lastName') && validateName('firstName') && validateName('middleInitial') && validateStudNum('studentNumber') && validateYearLevel('yearLevel') && validateMobileNum('mobileNumber') && validateBirthDate('birthdate') && validateEmail('email') && validateUserName('signupUsername') && validatePassword('signupPassword') && validateConfirmPassword('signupConfirmPassword') && validateTerms('terms')){

        registerBtn.type = "submit";
    }


}