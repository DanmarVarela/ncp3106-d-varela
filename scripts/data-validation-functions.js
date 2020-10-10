

const errorProperty = "thin solid rgba(245, 83, 83, 0.87)";
//Main Functions
function validateName(name){
    let errorObj = document.getElementById("error-message-personalInfo");
    let nameObj = document.forms["signupForm"][name];

    if (isAlphabetOnly(nameObj.value) == false){
        setErrorDisp(errorObj,nameObj,"Alphabetical characters only");
    }else{
        setDefault(errorObj,nameObj);
    }
}

function validateStudNum(num){
    let numObj = document.forms["signupForm"][num];
    let errorObj = document.getElementById("error-message-personalInfo");

    if (isNumber(numObj.value) == false){
        numObj.value = numObj.value.slice(0,-1);
    }else if (isCharactersBetween(numObj.value,1,10) == true) {
        setErrorDisp(errorObj,numObj,"Student Number should be 11 digits");
        return 0;
    }
    setDefault(errorObj,numObj);
}

function validateMobileNum(mobileNum){
    let mobileNumObj = document.forms["signupForm"][mobileNum];
    let errorObj = document.getElementById("error-message-personalInfo");

    if (isNumber(mobileNumObj.value) == false){
        mobileNumObj.value = mobileNumObj.value.slice(0,-1);
    }else if (isCharactersBetween(mobileNumObj.value,1,9) == true) {
        setErrorDisp(errorObj,mobileNumObj,"Invalid Mobile Number");
        return 0;
    }else if (mobileNumObj.value.length == 10){
        if(isMobileNumberFormat(mobileNumObj.value) == false){
            setErrorDisp(errorObj,mobileNumObj,"Invalid Mobile Number");
            return 0;
        }
    }
    setDefault(errorObj,mobileNumObj);
}

function validateBirthDate(bDay){
    
    let bDayObj = document.forms["signupForm"][bDay];
    let errorObj = document.getElementById("error-message-personalInfo");
    let birthdate = new Date(bDayObj.value);
    let currentDate = new Date();

    if (birthdate >= currentDate){
        setErrorDisp(errorObj,bDayObj,"Invalid Birthdate");
        return 0;
    }else if (determineAge(birthdate) < 18){
        setErrorDisp(errorObj,bDayObj,"You should be at least 18 years old");
        return 0;
    }
    setDefault(errorObj,bDayObj);

}  

function validateEmail(email){
    let emailObj = document.forms["signupForm"][email];
    let errorObj = document.getElementById("error-message-personalInfo");

    if (emailObj.value.length == 0){
        setDefault(errorObj,emailObj);
    }else if (isEmailFormat(emailObj.value) == false){
        setErrorDisp(errorObj,emailObj,"Invalid Email");
        return 0;
    }
    setDefault(errorObj,emailObj);
}

function validateUserName(username){
    let usernameObj = document.forms["signupForm"][username];
    let errorObj = document.getElementById("error-message-loginCredentials");

    if (usernameObj.value.length == 0){
        setDefault(errorObj,usernameObj);
    }else if (isCharactersBetween(usernameObj.value,8,15) == false){
        setErrorDisp(errorObj,usernameObj,"Username should be between 8 to 15 characters");
        return 0;
    }else if (isUsernameFormat(usernameObj.value) == false){
        setErrorDisp(errorObj,usernameObj,"Numbers and Special Characters except _ and - are not allowed");
        return 0;
    }
    setDefault(errorObj,usernameObj);
}

function validatePassword(pass){
    let passwordObj = document.forms["signupForm"][pass];
    let errorObj = document.getElementById("error-message-loginCredentials");

    if (passwordObj.value.length == 0){
        setDefault(errorObj,passwordObj);
    }else if (isCharactersBetween(passwordObj.value,8,20) == false){
        setErrorDisp(errorObj,passwordObj,"Password should be between 8 to 20 characters");
        return 0;
    }else if (isPasswordFormat(passwordObj.value) == false){
        setErrorDisp(errorObj,passwordObj,"Password should be a combination of alphanumeric characters");
        return 0;
    }
    setDefault(errorObj,passwordObj);

}

