import React from 'react';

const Login = () => {
    return(
        <div class="popup popup-login">
            <div class="content-block">
                <h4>LOGIN</h4>
                <div class="loginform">
                    <form id="LoginForm" method="post">
                        <input type="text" name="Username" value="" class="form_input required" placeholder="username" />
                        <input type="password" name="Password" value="" class="form_input required"
                            placeholder="password" />
                        <div class="forgot_pass"><a href="#" data-popup=".popup-forgot" class="open-popup">Forgot
                                Password?</a></div>
                        <input type="submit" name="submit" class="form_submit" id="submitlogin" value="SIGN IN" />
                    </form>
                    <div class="signup_bottom">
                        <p>Don't have an account?</p>
                        <a href="#" data-popup=".popup-signup" class="open-popup">SIGN UP</a>
                    </div>
                </div>
                <div class="close_popup_button">
                    <a href="#" class="close-popup"><img src="images/icons/black/menu_close.png" alt="" title="" /></a>
                </div>
            </div>
        </div>
    );
};

export default Login;