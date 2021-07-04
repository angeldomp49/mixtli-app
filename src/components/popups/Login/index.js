import React from 'react';

export const Login = () => {
    return(
        <div className="popup popup-login">
            <div className="content-block">
                <h4>LOGIN</h4>
                <div className="loginform">
                    <form id="LoginForm" method="post">
                        <input type="text" name="Username" value="" className="form_input required" placeholder="username" />
                        <input type="password" name="Password" value="" className="form_input required"
                            placeholder="password" />
                        <div className="forgot_pass"><a href="#" data-popup=".popup-forgot" className="open-popup">Forgot
                                Password?</a></div>
                        <input type="submit" name="submit" className="form_submit" id="submitlogin" value="SIGN IN" />
                    </form>
                    <div className="signup_bottom">
                        <p>Don't have an account?</p>
                        <a href="#" data-popup=".popup-signup" className="open-popup">SIGN UP</a>
                    </div>
                </div>
                <div className="close_popup_button">
                    <a href="#" className="close-popup"><img src="images/icons/black/menu_close.png" alt="" title="" /></a>
                </div>
            </div>
        </div>
    );
};

export default Login;