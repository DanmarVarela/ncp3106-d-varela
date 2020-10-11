

function validateLoginButton(){
    if (!checkLoginEmptyBox()){
        document.getElementById('loginButton').type = "submit";
    }
}

function notEmpty(name){
    let nameObj = document.forms["loginForm"][name];
    let errorObj = document.getElementById("error-message-loginForm");
    setDefault(errorObj,nameObj);
}

function checkLoginEmptyBox(){
    let inputs = document.forms["loginForm"].getElementsByTagName("input");
    for (let i=0;i<inputs.length;i++){
        if(inputs[i].value.length == 0){
            inputs[i].style.border = errorProperty;
            document.getElementById("error-message-loginForm").innerHTML = "Please fill up the necessary data";
            return true;
        }
    }
    return false;
}