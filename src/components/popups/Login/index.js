import React from 'react';
import styles from './style.js';
import {classes} from './../../../../assets/css/global';
import {mixtli} from './../../../../assets/css/mixtli';
import {View,Text, TextInput, Button} from 'react-native';

export const Login = () => {
    return(
        <View style={[classes.dFlex, classes.justifyContentCenter, classes.alignCenter, classes.h100]} className="popup popup-login">
            <View style={[classes.m2]} className="content-block">
                <Text style={[classes.textCenter, classes.mb1 ,styles.title1]}>LOGIN</Text>
                <View className="loginform">
                    <View style={[classes.w100]} id="LoginForm" method="post">
                        <TextInput style={[classes.w100, classes.borderSimple, classes.p1, classes.mx1]} type="text" name="Username" className="form_input required" placeholder="username" />
                        <TextInput style={[classes.w100, classes.borderSimple, classes.p1, classes.mx1]} secureTextEntry={true}  type="password" name="Password" className="form_input required"
                            placeholder="password" />
                        <View style={[classes.mx2]} className="forgot_pass">
                            <Text style={[classes.textBlack, classes.textCenter]} >Forgot Password?</Text>
                        </View>
                        <Button style={[classes.mx1, classes.borderNone, classes.bgTransparent, styles.submit]} type="submit" name="submit" className="form_submit" id="submitlogin" title='SIGN IN' />
                    </View>
                    <View style={[classes.mt1]} className="signup_bottom">
                        <Text style={[classes.mx1, classes.textCenter]}>Don't have an account?</Text>
                        <Text style={[mixtli.link, classes.textCenter]} data-popup=".popup-signup" className="open-popup">SIGN UP</Text>
                    </View>
                </View>
                <View className="close_popup_button">
                    <a href="#" className="close-popup">
                        <img src="images/icons/black/menu_close.png" alt="" title="" />
                    </a>
                </View>
            </View>
        </View>
    );
};

export default Login;