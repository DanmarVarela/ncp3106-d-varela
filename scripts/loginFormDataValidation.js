

function validateLoginButton(){
    let usernameObj = document.forms["loginForm"]["username"];
    let passwordObj = document.forms["loginForm"]["password"];
    let errorObj = document.getElementById("error-message-loginForm");

    if (usernameObj.value.length == 0 || passwordObj.value.length== false){
        errorObj.innerHTML = "Please fill out all necessary fields";
        usernameObj.style.border = errorProperty;
        passwordObj.style.border = errorProperty;
    }else {
        document.getElementById("loginButton").type = "submit";
    }
}

function checkEmpty(name){
    let nameObj = document.forms["loginForm"][name];
    let errorObj = document.getElementById("error-message-loginForm");

    setDefault(errorObj,nameObj);
    
}