import React from 'react';

const ForgotPassword = () => {
    return (
        <div class="popup popup-forgot">
            <div class="content-block">
                <h4>FORGOT PASSWORD</h4>
                <div class="loginform">
                    <form id="ForgotForm" method="post">
                        <input type="text" name="Email" value="" class="form_input required" placeholder="email" />
                        <input type="submit" name="submit" class="form_submit" id="submitforgot" value="RESEND PASSWORD" />
                    </form>
                    <div class="signup_bottom">
                        <p>Check your email and follow the instructions to reset your password.</p>
                    </div>
                </div>
                <div class="close_popup_button">
                    <a href="#" class="close-popup"><img src="images/icons/black/menu_close.png" alt="" title="" /></a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;