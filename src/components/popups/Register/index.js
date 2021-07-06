import React from 'react';

export const Register = () => {
    return (
        <div className="popup popup-signup">
            <div className="content-block">
                <h4>REGISTER</h4>
                <div className="loginform">
                    <form id="RegisterForm" method="post">
                        <input type="text" name="Username" className="form_input required" placeholder="Username" />
                        <input type="text" name="Email" className="form_input required" placeholder="Email" />
                        <input type="password" name="Password" className="form_input required"
                            placeholder="Password" />
                        <input type="submit" name="submit" className="form_submit" id="submitregister" value="SIGN UP" />
                    </form>
                    <h5>- OR REGISTER WITH A SOCIAL ACCOUNT -</h5>
                    <div className="signup_social">
                        <a href="http://www.facebook.com/" className="signup_facebook external">FACEBOOK</a>
                        <a href="http://www.twitter.com/" className="signup_twitter external">TWITTER</a>
                    </div>
                </div>
                <div className="close_popup_button">
                    <a href="#" className="close-popup"><img src="images/icons/black/menu_close.png" alt="" title="" /></a>
                </div>
            </div>
        </div>
    );
};

export default Register;