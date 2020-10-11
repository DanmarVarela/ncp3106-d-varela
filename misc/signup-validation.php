<?php

session_start();

//if register button is clicked
if (isset($_POST['RegisterButton'])){
  //connect to database
  require 'openDb.php';

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

  //prepare and execute sql query
  $sqlCommand = "SELECT * FROM users WHERE username = :username AND password = :password";
  $stmt = $conn->prepare($sqlCommand);
  $stmt->execute(['username'=>$userName, 'password'=>$passwordOrig]);
  
  // add the data to database if there is no existing username and password
  $results = $stmt->rowCount();
  if ($results == 0){
    try{
      $sql = "INSERT INTO users (lastName,firstName,middleInitial,studentNumber,yearLevel,birthDate,mobileNumber,ueMailAddress,username,password)VALUES (?,?,?,?,?,?,?,?,?,?)";
            
      $conn->prepare($sql)->execute([$lastName,$firstName,$middleInitial,$studentNumber,$yearLevel,$birthDate,$mobileNumber,$ueEmailAddress,$userName,$passwordOrig]);

      echo '<script> alert("Account Created Successfully"); </script>';

      //close connection after inserting
      $conn = null;
        
    } catch(PDOException $e) {
      echo '<script> alert("Database error:".$e->getMessage()); </script>';
    }
  }else {
    $_SESSION["accountCreationFailed"] = true;
    header("location:../pages/index.php");
    $conn = null;
  }

}else {
  header("location:../pages/index.php");
}

