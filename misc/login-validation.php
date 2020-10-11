<?php

    session_start();

    //if button is clicked
    if(isset($_POST['loginButton'])){

        //connect to database
        require 'openDB.php';

        $userName = $_POST['username'];
        $password = $_POST['password'];

        //prepare and execute sql query
        $sqlCommand = "SELECT * FROM users WHERE username = :username AND password = :password";
        $stmt = $conn->prepare($sqlCommand);
        $stmt->execute(['username'=>$userName, 'password'=>$password]);

        //log in user if entered username and password matches an account;
        $results = $stmt->rowCount();

        if ($results == 1){
            echo '<script> alert("Logged in successfully"); </script>';
            echo 'logged in';
            $conn = null;
        }else {
            $_SESSION["loginFailed"] = true;
            header("location:../pages/index.php");
            $conn = null;
        }

    }else{
        header("location:../pages/index.php");
    }