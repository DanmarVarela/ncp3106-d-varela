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
<script src="../scripts/data-validation-functions.js"></script>

</html>