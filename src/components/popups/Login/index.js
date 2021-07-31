import React from 'react';
import styles from './style.js';
import {View,Text} from 'react-native';

export const Login = () => {
    return(
        <View style={styles.container} className="popup popup-login">
            <View className="content-block">
                <Text>LOGIN</Text>
                <View className="loginform">
                    <form id="LoginForm" method="post">
                        <input type="text" name="Username" className="form_input required" placeholder="username" />
                        <input type="password" name="Password" className="form_input required"
                            placeholder="password" />
                        <View className="forgot_pass"><a href="#" data-popup=".popup-forgot" className="open-popup">Forgot
                                Password?</a></View>
                        <button type="submit" name="submit" className="form_submit" id="submitlogin">SIGN IN</button>
                    </form>
                    <View className="signup_bottom">
                        <p>Don't have an account?</p>
                        <a href="#" data-popup=".popup-signup" className="open-popup">SIGN UP</a>
                    </View>
                </View>
                <View className="close_popup_button">
                    <a href="#" className="close-popup"><img src="images/icons/black/menu_close.png" alt="" title="" /></a>
                </View>
            </View>
        </View>
    );
};

export default Login;