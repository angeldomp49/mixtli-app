
const RegisterPopup = () => {
    return (
        <div class="popup popup-signup">
            <div class="content-block">
                <h4>REGISTER</h4>
                <div class="loginform">
                    <form id="RegisterForm" method="post">
                        <input type="text" name="Username" value="" class="form_input required" placeholder="Username" />
                        <input type="text" name="Email" value="" class="form_input required" placeholder="Email" />
                        <input type="password" name="Password" value="" class="form_input required"
                            placeholder="Password" />
                        <input type="submit" name="submit" class="form_submit" id="submitregister" value="SIGN UP" />
                    </form>
                    <h5>- OR REGISTER WITH A SOCIAL ACCOUNT -</h5>
                    <div class="signup_social">
                        <a href="http://www.facebook.com/" class="signup_facebook external">FACEBOOK</a>
                        <a href="http://www.twitter.com/" class="signup_twitter external">TWITTER</a>
                    </div>
                </div>
                <div class="close_popup_button">
                    <a href="#" class="close-popup"><img src="images/icons/black/menu_close.png" alt="" title="" /></a>
                </div>
            </div>
        </div>
    );
};