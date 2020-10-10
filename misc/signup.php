
<form action="../misc/signup-validation.php" method="post" id="signupForm" name="signupForm" spellcheck="false">   
    <div class="main-containers" id="personal-info">
        <div class="spacer"></div>
        <div class="title">
            <h1>Personal Information</h1>
        </div>
        <div class="inputs">
            <div class="signup-inputBox-wrapper" id="test">
                
                <div class="signup-inputBox" id="lastName">
                    <input type="text" name="lastName" placeholder="Last Name" oninput="validateName('lastName')" required> 
                </div>
            </div>
            <div class="signup-inputBox-wrapper">
                <div class="signup-inputBox" id="firstName">
                    <input type="text" name="firstName" placeholder="First Name" oninput="validateName('firstName')" required>  
                </div> 
                <div class="signup-inputBox" id="middleInitial">
                    <input type="text" name="middleInitial" placeholder="M.I" oninput="validateName('middleInitial')" maxlength="2">
                </div>  
            </div>
            <div class="signup-inputBox-wrapper">
                <div class="signup-inputBox" id="studentNumber">
                    <input type="text" name="studentNumber" placeholder="Student Number" oninput="validateStudNum('studentNumber')" maxlength="11" required>
                </div>
                <div class="signup-inputBox" id="yearLevel" required>
                    <select name="yearLevel">
                        <option selected disabled>Year Level</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                    </select>
                </div>
            </div>
            <div class="signup-inputBox-wrapper">
                <div class="signup-inputBox" id="mobileNumber">
                    <input type="text" value="+63 " disabled id="mobileNumPrefix">
                    <input id="mobileNumberInput" type="text" name="mobileNumber" placeholder="Mobile Number" oninput="validateMobileNum('mobileNumber')" maxlength="10" required>
                </div>
                <div class="signup-inputBox" id="birthDate">
                    <input type="text" name="birthdate" placeholder="BirthDate" onchange="validateBirthDate('birthdate')" onfocusin="(this.type='date')" onfocusout="(this.type='text')" required>
                </div>
            </div>
            <div class="signup-inputBox-wrapper">
                <div class="signup-inputBox" id="email">
                    <input type="email" name="email" placeholder="name@ue.edu.ph" oninput="validateEmail('email')" required>
                </div>
            </div>
            <h4 id="error-message-personalInfo"></h4>
            <div id="signup-login-Text" class="signup-inputBox-wrapper">
                <h3>Already have an account? <span id="sign-up-text">Log-in</span></h3>
            </div>
        </div>
    </div>
    <div class="main-containers" id="login-credentials">
        <div class="spacer"></div>
        <div class="title">
            <h1>Login Credentials</h1>
        </div>
        <div class="inputs">
            <div class="inputBox-wrapper">
                <div class="inputBox-container">
                    <img src="../src/account-icon.svg" alt="failed to load image">
                    <input type="text" name="signupUsername" placeholder="Username" oninput="validateUserName('signupUsername')" maxlength="15" required>
                </div>
            </div>
            <div class="inputBox-wrapper">
                <div class="inputBox-container">
                    <img src="../src/key.svg" alt="failed to load image">
                    <input type="password" name="signupPassword" placeholder="Password" oninput="validatePassword('signupPassword')" maxlength="20" required>
                </div>
            </div>
            <h4 id="password-strength"></h4>
            <div class="inputBox-wrapper" id="confirmPassword">
                <div class="inputBox-container">
                    <img src="../src/key.svg" alt="failed to load image">
                    <input type="password" name="signupConfirmPassword" placeholder="Confirm Password">
                </div>
            </div>
            <div id="checkBox">
                <input type="checkbox" name="terms">
                <h3>By checking this, you agree to our <span> Terms and Conditions</span></h3>
            </div>
            <h4 id="error-message-loginCredentials"></h4>
            <div class="button-wrapper">
                <div class="inputBox-container">
                    <button>Register</button>
                </div>  
            </div>
        </div>  
    </div>
</form>

