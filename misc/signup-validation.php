<?php

$lastName = $_POST['lastName'];
$firstName = $_POST['firstName'];
$middleInitial = $_POST['middleInitial'];
$studentNumber = $_POST['studentNumber'];
$yearLevel = $_POST['yearLevel'];
$birthDate = $_POST['birthdate'];
$mobileNumber = $_POST['mobileNumber'];
$ueEmailAddress = $_POST['email'];
$userName = $_POST['signupUsername'];
$passwordOrig = $_POST['signupPassword'];
$passwordRepeat = $_POST['signupConfirmPassword'];



if ($passwordOrig == $passwordRepeat ) {
    insertRecord($lastName,$firstName,$middleInitial,$studentNumber,$yearLevel,
                     $birthDate,$mobileNumber,$ueEmailAddress,$userName,$passwordOrig);
    }
    else {
        echo '<script>
              alert("Passwrod Mismatch!");
              </script>';
                  
        echo '<script>
              window.history.go(-1);
              </script>';
          }

// functionnnnn
function insertRecord($lastName,$firstName,$middleInitial,$studentNumber,$yearLevel,
                    $birthDate,$mobileNumber,$ueEmailAddress,$userName,$passwordOrig) {
 
try{
 require 'openDb.php';
     
  $sql = "INSERT INTO userstable (lastName,firstName,middleInitial,studentNumber,yearLevel,
                    birthDate,mobileNumber,ueMailAddress,username,password) VALUES (?,?,?,?,?,?,?,?,?,?)";
     
     
  // use exec() because no results are returned 
     $conn->prepare($sql)->execute([$lastName,$firstName,$middleInitial,$studentNumber,$yearLevel,
     $birthDate,$mobileNumber,$ueEmailAddress,$userName,$passwordOrig]);

    echo "Successfully Registered";
  
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
}




?>