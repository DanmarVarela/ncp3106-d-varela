
<form action="../misc/login-validation.php" method="post" id="loginForm" spellcheck="false">
    <div id="cat-image" class="main-containers">
        <img src="../src/yellowCat.svg" alt="failed to load image">
    </div>
    <div class="main-containers" id="login">
        <div class="spacer"></div>
        <div class="title">
            <h1>Log-in</h1>
        </div>
        <div class="inputs">
            <div class="inputBox-wrapper">
                <div class="inputBox-container">
                    <img src="../src/account-icon.svg" alt="failed to load image">
                    <input type="text" class="fullInputBox" name="username" placeholder="Username">
                </div>
            </div>
            <div class="inputBox-wrapper">
                <div class="inputBox-container">
                    <img src="../src/key.svg" alt="failed to load image">
                    <input type="password" class="fullInputBox" name="password" placeholder="Password">
                </div>
            </div>
            <div class="inputBox-wrapper" id="forgotPassword">
                <h3>Need Help?</h3>
                <h3><span>Forgot Password?</span></h3>
            </div>
            <div class="button-wrapper" id="btn-wrapper">
                <div class="inputBox-container" id="btn-container">
                    <button>Log-in</button>
                </div>  
            </div>
            <h3>Don't have an account? <span onclick="swipeRight()">Register</span></h3>
        </div>
    </div>
</form>
