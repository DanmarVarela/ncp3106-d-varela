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
if ($passwordOrig == $passwordRepeat){
  $stmt = $conn->prepare("SELECT count(*) as cntUser FROM users WHERE 
        username = :username");
        $stmt->bindValue(':username',$userName,PDO::PARAM_STR);
        $stmt->execute();
        $count = $stmt->fetchColumn();

        $response = "<span style ='color:green;'>Available.</span>";
        if($count > 0){
            $response = "<span style = 'color:red;'> Not Available.</span>";
            
        }
        echo $response;
}
elseif($passwordOrig == $passwordRepeat ) {
  try{
    $sql = "INSERT INTO users (lastName,firstName,middleInitial,studentNumber,yearLevel,birthDate,mobileNumber,ueMailAddress,username,password) 
            VALUES (?,?,?,?,?,?,?,?,?,?)";
          
    // use exec() because no results are returned 
    $conn->prepare($sql)->execute([$lastName,$firstName,$middleInitial,$studentNumber,$yearLevel,$birthDate,$mobileNumber,$ueEmailAddress,$userName,$passwordOrig]);
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