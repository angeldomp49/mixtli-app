import React from 'react';

export const ForgotPassword = () => {
    return (
        <div className="popup popup-forgot">
            <div className="content-block">
                <h4>FORGOT PASSWORD</h4>
                <div className="loginform">
                    <form id="ForgotForm" method="post">
                        <input type="text" name="Email" className="form_input required" placeholder="email" />
                        <input type="submit" name="submit" className="form_submit" id="submitforgot" value="RESEND PASSWORD" />
                    </form>
                    <div className="signup_bottom">
                        <p>Check your email and follow the instructions to reset your password.</p>
                    </div>
                </div>
                <div className="close_popup_button">
                    <a href="#" className="close-popup"><img src="images/icons/black/menu_close.png" alt="" title="" /></a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;