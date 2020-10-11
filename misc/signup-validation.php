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

require 'openDb.php';

if ($passwordOrig == $passwordRepeat ) {
  try{
    $sql = "INSERT INTO users (lastName,firstName,middleInitial,studentNumber,yearLevel,birthDate,mobileNumber,ueMailAddress,username,password) 
            VALUES (?,?,?,?,?,?,?,?,?,?)";
          
    // use exec() because no results are returned 
    $conn->prepare($sql)->execute([$lastName,$firstName,$middleInitial,$studentNumber,$yearLevel,$birthDate,$mobileNumber,$ueEmailAddress,$userName,$passwordOrig]);
    echo $studentNumber ;
    echo $mobileNumber;
    echo "Successfully Registered";
      
  } catch(PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
  }
  
  $conn = null;
      
}
else {
  echo '<script>
          alert("Password Mismatch!");
        </script>';
                  
  echo '<script>
        window.history.go(-1);
        </script>';
}
?>