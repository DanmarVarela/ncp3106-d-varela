<?php
    session_start();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ffffff">
    <title>Welcome - Meow! The Coding Cat</title>
    <link rel="stylesheet" href="../styles/resetStyles.css">
    <link rel="stylesheet" href="../styles/indexStyle.css">
    <link rel="stylesheet" href="../styles/login-signupStyle.css">

</head>
<body>
    <?php require '../misc/header.php'; ?>
    <section>
        <div class="login-signup-box">
            <?php require '../misc/login.php'; ?>
            <?php require '../misc/signup.php'; ?>
        </div>  
    </section>
</body>
<script src="../scripts/functions.js"></script>
<script src="../scripts/signupFormDataValidation.js"></script>
<script src="../scripts/loginFormDataValidation.js"></script>
</html>

<?php
    if ($_SESSION["accountCreationFailed"] == true){
        echo '<script> alert("Username already exists"); </script>';
    }else if ($_SESSION["loginFailed"] == true){
        echo '<script> alert("Account does not exist. Create an account instead"); </script>';
        echo '<script> swipeLeft(); </script>';
    }
    $_SESSION["loginFailed"] = false;
    $_SESSION["accountCreationFailed"] = false;
?>

